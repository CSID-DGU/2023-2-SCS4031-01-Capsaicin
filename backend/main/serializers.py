from rest_framework import serializers
from accounts.models import User
from main.models import BloodPressure, Weight

class BloodPressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = "__all__"

class WeightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = "__all__"