from django.shortcuts import render
from rest_framework.views import APIView
from main.models import BloodPressure, Weight
from main.serializers import BloodPressureSerializer, WeightSerializer
from rest_framework.response import Response

# Create your views here.

class BloodPressureAV(APIView):

    def get(self, request):
        bloodpressure = BloodPressure.objects.all()
        serializer = BloodPressureSerializer(bloodpressure, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        serializer = BloodPressureSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
        
class WeightAV(APIView):
    def get(self, request):
        weights = Weight.objects.all()
        serializer = WeightSerializer(weights, many = True, context={'request':request})
        return Response(serializer.data)
    
    def post(self, request):
        serializer = WeightSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)