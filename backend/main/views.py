from django.shortcuts import render
from rest_framework.views import APIView
from main.models import BloodPressure, Weight, FoodCategory, Food, Center, Notice, ExerciseCategory, Meal, MealAmount
from main.serializers import *
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.db import transaction
from collections import defaultdict

from .recommend import recommend_menu
from django.http import JsonResponse

from rest_framework import permissions, status

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
                MealAmount.objects.create(meal=new_meal, food=find_food, count=m['count'], unit=m['unit'])

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

        calorie_by_date = defaultdict(float)
        for entry in serializer_data:
            date = entry['date']
            calorie_by_date[date] += entry['calorie']

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
                ExerciseAmount.objects.create(userexercise=new_exercise, exercise=find_exercise, count=count)
            except ExerciseCategory.DoesNotExist:
                return Response({"detail": f"Exercise with ID {exercise_id} does not exist."}, status=status.HTTP_400_BAD_REQUEST)

            return Response({"exercise_id": exercise_id, "count": count})  # 혹은 다른 적절한 응답을 반환
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MealRecommendationView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        find_user = request.user

        last_meal = Meal.objects.filter(user=find_user).last()
        food_list = MealAmount.objects.filter(meal=last_meal)
        def meal_amount_to_dict(meal_amount):
            return {
                'food_name': meal_amount.food.foodName,
                # 다른 필요한 필드들도 추가할 수 있음
            }

        # food_list에 있는 MealAmount 인스턴스들을 딕셔너리로 변환
        data_to_serialize = [meal_amount_to_dict(meal_amount) for meal_amount in food_list]

        # Serializer에 전달
        # serializer = MealRecommendSerializer(data=data_to_serialize, many=True, context={'request': request})


        # # serializer = MealRecommendSerializer(data=list(food_list), many=True, context={'request':request})
        # if serializer.is_valid():
        #     # Serializer에서 'food_name'을 추출하여 리스트로 만듦
        #     print(serializer.data)
        #     menu_name_list = [item['food_name'] for item in serializer.data]
        #     # 이제 menu_name_list를 사용하면 됨
        #     data = serializer.data
        #     menu_name = menu_name_list
        # else:
        #     data = {'error': serializer.errors}
        menu_name = [item['food_name'] for item in data_to_serialize]

  
        try:
            # 추천 로직 호출
            recommended = recommend_menu(menu_name, top=10)
            
            # 나트륨을 기준으로 정렬
            sorted_recommended = recommended[['음 식 명', '나트륨(mg)']].sort_values(by='나트륨(mg)')

            # JSON 응답 생성
            result = {
                'recommended_menu': sorted_recommended.to_dict(orient='records')
            }

            return JsonResponse(result)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)