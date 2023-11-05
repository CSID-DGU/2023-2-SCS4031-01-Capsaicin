from django.contrib import admin
from main.models import BloodPressure, Weight, FoodCategory, Food

# Register your models here.
admin.site.register(BloodPressure)
admin.site.register(Weight)
admin.site.register(FoodCategory)
admin.site.register(Food)