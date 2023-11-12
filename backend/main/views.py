from django.shortcuts import render
from rest_framework.views import APIView
from main.models import BloodPressure, Weight, FoodCategory, Food, Center
from main.serializers import BloodPressureSerializer, WeightSerializer, FoodCategorySerializer, WeightPostSerializer, BloodPressurePostSerializer, FoodSerializer, CenterSeializer
from rest_framework.response import Response

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
        # if not request.user.has_perm('auth.can_add_bloodpressure'):
        #     logger.error("Permission denied for user: %s" % request.user)
        #     return Response("Permission denied", status=status.HTTP_403_FORBIDDEN)
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
            return Response(serializer.errors)
        
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
        
class CenterAV(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get(self, request):
        find_user = request.user
        center = Center.objects.filter(user=find_user)
        serializer = WeightSerializer(center, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        find_user = request.user
        serializer = CenterSeializer(data=request.data)
        if serializer.is_valid():
            name = serializer.validated_data['name']
            center = Center()
            center.name = name
            center.user = find_user
            center.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)