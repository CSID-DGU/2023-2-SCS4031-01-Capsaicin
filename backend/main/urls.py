from django.urls import path, include
#from rest_framework.routers import DefaultRouter
from main.views import *

# router = DefaultRouter()
# router.register('bloodpressure', BloodPressureAV)
urlpatterns = [
    path('bloodpressure',BloodPressureAV.as_view(), name='bloodpressure'),
    path('weights',WeightAV.as_view(), name='weights'),
    path('foodcategory',FoodCategoryAV.as_view(), name='foodcategory'),
    path('food/<int:category>/',FoodAV.as_view(), name='food'),
    path('notice',NoticeAV.as_view(), name='notice'),
    path('bloodpressure/last', LastBloodPressureAV.as_view(), name='lastbloodpressure'),
    path('weights/last', LastWeightAV.as_view(), name='lastweights'),
    path('exercisecategory',ExerciseCategoryAV.as_view(), name='exercisecategory'),
    path('meal', MealAV.as_view(), name='meal'),
    path('center', CenterAV.as_view(), name='center'),
    path('exercise', ExerciseAV.as_view(), name='exercise'),
    path('recommend',MealRecommendationView.as_view(), name='recommend'),
]
