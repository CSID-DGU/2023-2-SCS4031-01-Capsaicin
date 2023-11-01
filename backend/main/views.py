from django.shortcuts import render
from rest_framework.views import APIView
from main.models import BloodPressure, Weight, FoodCategory
from main.serializers import BloodPressureSerializer, WeightSerializer, FoodCategorySerializer, WeightPostSerializer
from rest_framework.response import Response

# Create your views here.

class BloodPressureAV(APIView):

    def get(self, request):
        find_user = request.user
        bloodpressure = BloodPressure.objects.filter(user=find_user)
        serializer = BloodPressureSerializer(bloodpressure, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        find_user = request.user
        serializer = BloodPressureSerializer(data=request.data)
        if serializer.is_valid():
            systolic = serializer.validated_data['systolic']
            diastolic = serializer.validated_data['diastolic']
            bloodpressure = BloodPressure()
            bloodpressure.systolic = systolic
            bloodpressure.diastolic = diastolic
            bloodpressure.user = find_user
            bloodpressure.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class WeightAV(APIView):
    def get(self, request):
        find_user = request.user
        weights = Weight.objects.filter(user=find_user)
        serializer = WeightSerializer(weights, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        find_user = request.user
        serializer = WeightPostSerializer(data=request.data)
        if serializer.is_valid():
            weight_figure = serializer.validated_data['weight_figure']
            weight = Weight()
            weight.weight_figure = weight_figure
            weight.user = find_user
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