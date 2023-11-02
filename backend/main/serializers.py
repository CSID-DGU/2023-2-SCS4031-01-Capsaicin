from rest_framework import serializers
from accounts.models import User
from main.models import BloodPressure, Weight, FoodCategory

class BloodPressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = "__all__"

class BloodPressurePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = ["systolic", "diastolic"]

class WeightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = "__all__"


class WeightPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = ["weight_figure"]

class FoodCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodCategory
        fields = "__all__"