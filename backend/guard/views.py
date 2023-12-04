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