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
        serializer = BloodPressureSerializer(bloodpressure, context={'request':request})
        return Response(serializer.data)