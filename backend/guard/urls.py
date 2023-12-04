from django.urls import path, include
#from rest_framework.routers import DefaultRouter
from guard.views import *

urlpatterns = [
    path('bloodpressure/last', LastBloodPressureAV.as_view()),
    path('weights/last', LastWeightAV.as_view()),
    path('meal', MealAV.as_view(), name='meal'),
    path('bloodpressure',BloodPressureAV.as_view(), name='bloodpressure'),
    path('weights',WeightAV.as_view(), name='weights'),
    path('exercise', ExerciseAV.as_view(), name='exercise'),
]
