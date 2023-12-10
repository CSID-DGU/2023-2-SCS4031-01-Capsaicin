from django.shortcuts import render
from rest_framework.views import APIView
from main.models import BloodPressure, Weight, FoodCategory, Food, Center, Notice, ExerciseCategory, Meal, MealAmount
from main.serializers import *
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db import transaction
from collections import defaultdict
from django.db.models import Count, Sum
from django.utils import timezone

from main.recommend import run
from rest_framework import permissions, status
from datetime import datetime, timedelta

class LastBloodPressureAV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = guard_user.user_id
        bloodpressure = BloodPressure.objects.filter(user=find_user).order_by('measurement_date', 'measurement_time').last()
        serializer = guardBloodPressureSerializer(bloodpressure, context={'request':request})
        return Response(serializer.data)
    
class LastWeightAV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = guard_user.user_id
        weights = Weight.objects.filter(user=find_user).order_by('measurement_date').last()
        serializer = WeightSerializer(weights, context={'request':request})
        return Response(serializer.data)
    
class MealAV(APIView):    
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = guard_user.user_id

        last_meal = Meal.objects.filter(user=find_user).last()
        food_list = MealAmount.objects.filter(meal=last_meal)
        serializer = MealAmountSerializer(food_list, many=True, context={'request':request})
        return Response(serializer.data)
    
class BloodPressureAV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = guard_user.user_id
        bloodpressure = BloodPressure.objects.filter(user=find_user).order_by('measurement_date', 'measurement_time')
        serializer = BloodPressureSerializer(bloodpressure, many = True, context={'request':request})
        return Response(serializer.data)
    
class WeightAV(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        guard_user = request.user
        find_user = guard_user.user_id
        weights = Weight.objects.filter(user=find_user).order_by('measurement_date')
        serializer = WeightSerializer(weights, many = True, context={'request':request})
        return Response(serializer.data)
    
class ExerciseAV(APIView):    
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = guard_user.user_id

        last_exercise = UserExercise.objects.filter(user=find_user).last()
        last_exercise_list = ExerciseAmount.objects.filter(userexercise=last_exercise)
        exercise_list = ExerciseAmount.objects.filter(userexercise__user=find_user)
        serializer_name = ExerciseAmountSerializer(last_exercise_list, context={'request': request}, many=True).data
        # 모든 운동 데이터 직렬화
        serializer_data = ExerciseAmountSerializer(exercise_list, many=True, context={'request': request}).data
        for entry in serializer_name:
                del entry['calorie']
                del entry['date']
                del entry['total_calorie']

        calorie_by_date = defaultdict(float)
        for entry in serializer_data:
            date = entry['date']
            calorie_by_date[date] += entry['total_calorie']

        return Response({'last_exercise_name': serializer_name, 'calorie_by_date': dict(calorie_by_date)})
    
class MealRecommendationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = User.objects.get(id=guard_user.user_id)

        # 현재 날짜
        today = datetime.now().date()

        # 어제 날짜 계산
        yesterday = today - timedelta(days=1)

        # 어제 날짜의 식사에 대한 총 나트륨 합 계산
        total_natrium = MealAmount.objects.filter(
            meal__user=find_user,
            date=yesterday
        ).aggregate(Sum('natrium'))['natrium__sum'] or 0.0

        # return Response({"user": find_user.fullname, "yesterday_total_natrium": total_natrium})
        top_natrium_foods = MealAmount.objects.filter(
            meal__user=find_user,
            date=yesterday
        ).order_by('-natrium')[:3]

        #어제 식사
        yesterday_foods = MealAmount.objects.filter(
            meal__user=find_user,
            date=yesterday
        )
        yesterday_foods_names = {
            "yesterday_foods": [item.food.foodName for item in yesterday_foods]
        }
        yesterday_food_name = yesterday_foods_names.get("yesterday_foods", [])

        # 결과 반환
        response_data = {
            "user": find_user.fullname,
            "yesterday_total_natrium": total_natrium,
            "top_natrium_foods": [
                {"food": item.food.foodName, "natrium": item.natrium} for item in top_natrium_foods
            ]
        }
        print(response_data)
        menu_names = {
            "top_natrium_foods": [item.food.foodName for item in top_natrium_foods]
        }
        top_natrium_foods = menu_names.get("top_natrium_foods", [])
        print(top_natrium_foods)

        if total_natrium < 600:
            serial = MealRecommendSerializer({'condition': "저나트륨", 'message': f"어제 섭취하신 나트륨은 {total_natrium}g입니다. 하루 권장 섭취 나트륨은 600g으로, 섭취 나트륨이 부족한 것으로 보입니다. \n 끼니를 거르지 마시고, 조금 더 영양가 있는 식사를 해보시는게 어떨까요?", 'data' : []})
            return Response(serial.data)
        elif total_natrium >= 600 and total_natrium <2000:
            serial = MealRecommendSerializer({'condition': "정상", 'message': f"어제 섭취하신 나트륨은 {total_natrium}g입니다. 어제 드신 음식은 {yesterday_food_name}입니다. 섭취 나트륨이 정상인 것으로 보입니다. \n 지금처럼 영양가 있는 식사를 꾸준히 유지해시는게 어떨까요?", 'data' : []})

            return Response(serial.data)
        else: 
            result = run(total_natrium, top_natrium_foods, "음식분류")
            serial = MealRecommendSerializer({'condition': "고나트륨", 'message': f"어제 섭취하신 나트륨은 {total_natrium}g입니다. 어제 드신 음식 중 나트륨이 높은 음식은 {top_natrium_foods}입니다. 섭취 나트륨이 과도한 것으로 보입니다. \n 아래와 같은 음식을 드셔보는건 어떨까요?", 'data' : result})
              
            
            return Response(serial.data)
        
class ExerciseRecommendationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        guard_user = request.user
        find_user = User.objects.get(id=guard_user.user_id)

        # 현재 날짜
        today = datetime.now().date()

        # 어제 날짜 계산
        yesterday = today - timedelta(days=1)

        # 어제 날짜의 식사에 대한 총 나트륨 합 계산
        total_meal_calorie = MealAmount.objects.filter(
            meal__user=find_user,
            date=yesterday
        ).aggregate(Sum('calorie'))['calorie__sum'] or 0.0

        height = find_user.height
        weight = Weight.objects.filter(user=find_user).order_by('measurement_date').last()
        last_weight = weight.weight_figure
        

        # 생년월일을 날짜 형식으로 변환
        birthdate = datetime.strptime(find_user.birth, '%Y-%m-%d').date()

        # 나이 계산
        age = today.year - birthdate.year - ((today.month, today.day) < (birthdate.month, birthdate.day))

        gender = find_user.gender

        pre_bmr = (10*last_weight) + (6.25*height) - (5*age)
        if gender == 'M':
            bmr = pre_bmr + 5
        else:
            bmr = pre_bmr - 161
        
        user_exercise_yesterday = UserExercise.objects.filter(user=find_user, date=yesterday).first()

        exercise_calories_yesterday = ExerciseAmount.objects.filter(userexercise=user_exercise_yesterday).aggregate(Sum('total_calorie'))['total_calorie__sum'] or 0.0
        extra = total_meal_calorie - (exercise_calories_yesterday + bmr)
        extra_rounded = round(extra, 3)

        random_category = ExerciseCategory.objects.order_by('?').first()

        print({"user": find_user.fullname, "yesterday_total_calorie": total_meal_calorie, "height" : height, "weight" : last_weight, "age" : age, "gender" : gender, "pre_bmr" : pre_bmr, "bmr" : bmr, "calorie" : exercise_calories_yesterday, "extra":extra, "category": random_category.name})

        if extra > 0:
            return Response({"user": find_user.fullname, "yesterday_total_meal_calorie": total_meal_calorie, "extra" : extra, "message":{"text": f"소모칼로리가 {extra_rounded}만큼 필요합니다. 가볍게 산책해보시면 어떨까요?"}}, status=status.HTTP_200_OK)
        elif extra == 0:
            return Response({"user": find_user.fullname, "yesterday_total_meal_calorie": total_meal_calorie, "extra" : extra, "message":"소모칼로리와 섭취칼로리가 동일한 것으로 보입니다."}, status=status.HTTP_200_OK)
        elif extra < 0:
            if gender == 'M' and age < 65:
                if total_meal_calorie < 2000:
                    message = f"{find_user.fullname}님의 하루 권장 섭취칼로리는 2000입니다. 섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            elif gender == 'M' and age >= 65:
                if total_meal_calorie < 1800:
                    message = f"{find_user.fullname}님의 하루 권장 섭취칼로리는 1800입니다. 섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            elif gender == 'F' and age < 65:
                if total_meal_calorie < 1600:
                    message = f"{find_user.fullname}님의 하루 권장 섭취칼로리는 1600입니다. 섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            elif gender == 'F' and age > 65:
                if total_meal_calorie < 1300:
                    message = f"{find_user.fullname}님의 하루 권장 섭취칼로리는 1300입니다. 섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            return Response({"user": find_user.fullname, "yesterday_total_meal_calorie": total_meal_calorie, "extra" : extra, "message":message}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)