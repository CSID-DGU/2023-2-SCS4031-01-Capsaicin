from django.urls import path, include
#from rest_framework.routers import DefaultRouter
from main.views import BloodPressureAV, WeightAV, FoodCategoryAV, FoodAV, CenterAV

# router = DefaultRouter()
# router.register('bloodpressure', BloodPressureAV)
urlpatterns = [
    path('bloodpressure',BloodPressureAV.as_view(), name='bloodpressure'),
    path('weights',WeightAV.as_view(), name='weights'),
    path('foodcategory',FoodCategoryAV.as_view(), name='foodcategory'),
    path('food/<int:category>/',FoodAV.as_view(), name='food'),
    path('center',CenterAV.as_view(), name='center'),
]
