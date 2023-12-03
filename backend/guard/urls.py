from django.urls import path, include
#from rest_framework.routers import DefaultRouter
from guard.views import *

urlpatterns = [
    path('bloodpressure/last', LastBloodPressureAV.as_view()),
    path('weights/last', LastWeightAV.as_view()),
    path('meal', MealAV.as_view(), name='meal'),
]
