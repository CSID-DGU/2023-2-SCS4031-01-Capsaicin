from rest_framework import serializers
from accounts.models import User
from main.models import BloodPressure, Weight, FoodCategory, Food, Center, Notice

class BloodPressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = "__all__"

class BloodPressurePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = ["systolic", "diastolic",  "measurement_date", "measurement_time"]

class WeightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = "__all__"


class WeightPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = ["weight_figure", "measurement_date"]

class FoodSerializer(serializers.ModelSerializer):
    class Meta:
        model = Food
        fields = "__all__"

class FoodCategorySerializer(serializers.ModelSerializer):
    #food = FoodSerializer()

    class Meta:
        model = FoodCategory
        fields = "__all__"

class CenterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Center
        fields = "__all__"

class NoticeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notice
        fields = "__all__"