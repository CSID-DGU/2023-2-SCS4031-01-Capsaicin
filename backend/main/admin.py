from django.contrib import admin
from main.models import BloodPressure, Weight, FoodCategory

# Register your models here.
admin.site.register(BloodPressure)
admin.site.register(Weight)
admin.site.register(FoodCategory)