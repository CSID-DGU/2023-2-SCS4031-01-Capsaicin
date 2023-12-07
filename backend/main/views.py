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

from .recommend import run
from django.http import JsonResponse

from rest_framework import permissions, status
from datetime import datetime, timedelta

import logging
logger = logging.getLogger(__name__)

# Create your views here.

class BloodPressureAV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user
        bloodpressure = BloodPressure.objects.filter(user=find_user).order_by('measurement_date', 'measurement_time')
        serializer = BloodPressureSerializer(bloodpressure, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):

        find_user = request.user
        serializer = BloodPressurePostSerializer(data=request.data)
        if serializer.is_valid():
            systolic = serializer.validated_data['systolic']
            diastolic = serializer.validated_data['diastolic']
            measurement_date = serializer.validated_data['measurement_date']
            measurement_time = serializer.validated_data['measurement_time']
            bloodpressure = BloodPressure()
            bloodpressure.systolic = systolic
            bloodpressure.diastolic = diastolic
            bloodpressure.measurement_date = measurement_date
            bloodpressure.measurement_time = measurement_time
            bloodpressure.user = find_user
            bloodpressure.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=400)
        
class LastBloodPressureAV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user
        bloodpressure = BloodPressure.objects.filter(user=find_user).order_by('measurement_date', 'measurement_time').last()
        serializer = BloodPressureSerializer(bloodpressure, context={'request':request})
        return Response(serializer.data)
        
class WeightAV(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        find_user = request.user
        weights = Weight.objects.filter(user=find_user).order_by('measurement_date')
        serializer = WeightSerializer(weights, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        find_user = request.user
        serializer = WeightPostSerializer(data=request.data)
        if serializer.is_valid():
            weight_figure = serializer.validated_data['weight_figure']
            measurement_date = serializer.validated_data['measurement_date']
            weight = Weight()
            weight.weight_figure = weight_figure
            weight.user = find_user
            weight.measurement_date = measurement_date
            weight.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class LastWeightAV(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user
        weights = Weight.objects.filter(user=find_user).order_by('measurement_date').last()
        serializer = WeightSerializer(weights, context={'request':request})
        return Response(serializer.data)

class FoodCategoryAV(APIView):
    def get(self, request):
        foodcategory = FoodCategory.objects.all()
        serializer = FoodCategorySerializer(foodcategory, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        serializer = FoodCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class FoodAV(APIView):
    def get(self, request,category):
        # find_category = request.category
        food = Food.objects.filter(category=category)
        # food = Food.objects.all()
        serializer = FoodSerializer(food, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        serializer = FoodSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)

class NoticeAV(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        find_user = request.user
        center = Center.objects.get(id=find_user.center_id)
        notice = Notice.objects.filter(center=center).last()
        serializer = NoticeSerializer(notice, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        find_user = request.user

        if not find_user.is_superuser:
            return Response({'error': '관리자만이 공지를 작성할 수 있습니다.'}, status=status.HTTP_403_FORBIDDEN)
        
        center = Center.objects.get(id=find_user.center_id)
        description = request.data.get('description', None)

        if not description:
            return Response({'error': 'Description은 필수 항목입니다.'}, status=status.HTTP_400_BAD_REQUEST)

        # 새 Notice 인스턴스 생성
        new_notice = Notice.objects.create(description=description, center=center)

        # 새로 생성된 Notice 인스턴스를 시리얼라이즈
        serializer = NoticeSerializer(new_notice, context={'request': request})

        return Response(serializer.data, status=status.HTTP_201_CREATED)

class CenterAV(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        find_user = request.user
        center = get_object_or_404(Center, id=find_user.center_id)
        # center = Center.objects.prefetch_related('center').get(id=find_user.center_id)
        serializer = CenterSerializer(center, context={'request':request})
        return Response(serializer.data)

class ExerciseCategoryAV(APIView):
    def get(self, request):
        exercisecategory = ExerciseCategory.objects.all()
        serializer = ExerciseCategorySerializer(exercisecategory, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        serializer = ExerciseCategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        

class MealAV(APIView):    
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user

        last_meal = Meal.objects.filter(user=find_user).last()
        food_list = MealAmount.objects.filter(meal=last_meal)
        serializer = MealAmountSerializer(food_list, many=True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        find_user = request.user

        serializer = MealPostSerializer(data=request.data)

        if serializer.is_valid():
            with transaction.atomic():
                new_meal = Meal()
                new_meal.user = find_user
                new_meal.save()

            meal_list_data = serializer.validated_data['meal_list']
            for m in meal_list_data:
                find_food = Food.objects.get(id=m['food_id'])
                natrium = m['count'] * find_food.natrium
                calorie = m['count'] * find_food.calorie
                MealAmount.objects.create(meal=new_meal, food=find_food, count=m['count'], unit=m['unit'], natrium=natrium, calorie=calorie)

            return Response(meal_list_data)  # 혹은 다른 적절한 응답을 반환
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ExerciseAV(APIView):    
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user

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

    def post(self, request):
        find_user = request.user

        serializer = UserExercisePostSerializer(data=request.data)

        if serializer.is_valid():
            with transaction.atomic():
                new_exercise = UserExercise()
                new_exercise.user = find_user
                new_exercise.save()

            exercise_info_data = serializer.validated_data.get('exercise_list', {})
            exercise_id = exercise_info_data.get('exercise_id')
            count = exercise_info_data.get('count')
            
            try:
                find_exercise = ExerciseCategory.objects.get(id=exercise_id)
                total_calories = count / 10 * find_exercise.calorie
                ExerciseAmount.objects.create(userexercise=new_exercise, exercise=find_exercise, count=count, total_calorie=total_calories)
            except ExerciseCategory.DoesNotExist:
                return Response({"detail": f"Exercise with ID {exercise_id} does not exist."}, status=status.HTTP_400_BAD_REQUEST)
            
            # 응답 데이터 형태 변경
            response_data = {"exercise_list": [{"exercise_id": exercise_id, "count": count}]}
            return Response(response_data)

            # return Response({"exercise_id": exercise_id, "count": count})  # 혹은 다른 적절한 응답을 반환
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MealRecommendationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user

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
            serial = MealRecommendSerializer({'condition': "저나트륨", 'message': "섭취 나트륨이 부족한 것으로 보입니다. \n 조금 더 영양가 있는 식사를 해보시는게 어떨까요?", 'data' : []})
            return Response(serial.data)
        elif total_natrium >= 600 and total_natrium <2000:
            serial = MealRecommendSerializer({'condition': "정상", 'message': "섭취 나트륨이 정상인 것으로 보입니다. \n 지금처럼 영양가 있는 식사를 꾸준히 유지해시는게 어떨까요?", 'data' : []})

            return Response(serial.data)
        else: 
            result = run(total_natrium, top_natrium_foods, "음식분류")
            serial = MealRecommendSerializer({'condition': "고나트륨", 'message': "섭취 나트륨이 과도한 것으로 보입니다. \n 아래와 같은 음식을 드셔보는건 어떨까요?", 'data' : result})
            
            
            return Response(serial.data)
            # return Response("고나트륨 {}".format(result))

        
class TopUsersAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user

        # 현재 월을 가져옴
        current_month = timezone.now().month

        # 혈압 랭킹 조회
        blood_pressure_ranking = (
            User.objects
            .filter(center=find_user.center)
            .filter(bloodpressure__measurement_date__month=current_month)
            .annotate(num_measurements=Count('bloodpressure'))
            .order_by('-num_measurements')[:3]
        )

        serialized_blood_top_users = [
                {'username': user.fullname, 'num_measurements': user.num_measurements}
                for user in blood_pressure_ranking
            ]
        blood_top_users = [
                {'username': user.fullname}
                for user in blood_pressure_ranking
            ]
        print(serialized_blood_top_users)

        #운동 랭킹 조회
        exercise_ranking_by_center = (
            UserExercise.objects
            .filter(date__month=current_month, user__center=find_user.center)
            .values('user__fullname')
            .annotate(total_calories=Sum('exerciseamount__total_calorie'))
            .order_by('-total_calories')[:3]
        )

        serialized_exercise_top_users_by_center = [
            {'username': user['user__fullname'], 'total_calories': user['total_calories']}
            for user in exercise_ranking_by_center
        ]

        print(serialized_exercise_top_users_by_center)

        exercise_top_users = [
            {'username' : user['user__fullname']}
            for user in exercise_ranking_by_center
        ]
        
        return Response({'blood_top_users': blood_top_users, 'exercise_top_users' : exercise_top_users}, status=status.HTTP_200_OK)
    
class ExerciseRecommendationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user

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

        print({"user": find_user.fullname, "yesterday_total_calorie": total_meal_calorie, "height" : height, "weight" : last_weight, "age" : age, "gender" : gender, "pre_bmr" : pre_bmr, "bmr" : bmr, "calorie" : exercise_calories_yesterday, "extra":extra})

        if extra > 0:
            return Response({"user": find_user.fullname, "yesterday_total_meal_calorie": total_meal_calorie, "extra" : extra, "message":{"text": f"소모칼로리가 {extra_rounded}만큼 필요합니다. 가볍게 걸어보는게 어떨까요?"}}, status=status.HTTP_200_OK)
        elif extra == 0:
            return Response({"user": find_user.fullname, "yesterday_total_meal_calorie": total_meal_calorie, "extra" : extra, "message":"소모칼로리와 섭취칼로리가 동일한 것으로 보입니다."}, status=status.HTTP_200_OK)
        elif extra < 0:
            if gender == 'M' and age < 65:
                if total_meal_calorie < 2000:
                    message = "섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            elif gender == 'M' and age >= 65:
                if total_meal_calorie < 1800:
                    message = "섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            elif gender == 'F' and age < 65:
                if total_meal_calorie < 1600:
                    message = "섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            elif gender == 'F' and age > 65:
                if total_meal_calorie < 1300:
                    message = "섭취 칼로리가 하루 권장 섭취칼로리보다 적은 것으로 보입니다. \n 끼니를 거르지 말고 영양가 있는 식사를 해보는게 어떨까요?"
                else:
                    message = "하루 권장 섭취칼로리는 충족하셨네요! \n 운동하신 만큼 단백질을 보충하는건 어떨까요?"
            return Response({"user": find_user.fullname, "yesterday_total_meal_calorie": total_meal_calorie, "extra" : extra, "message":message}, status=status.HTTP_200_OK)
        return Response(status=status.HTTP_400_BAD_REQUEST)


