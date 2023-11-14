from rest_framework import serializers
from accounts.models import User
from main.models import BloodPressure, Weight, FoodCategory, Food, Center, Notice, Meal, MealAmount, ExerciseCategory

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

class MealSerializer(serializers.ModelSerializer):
    class Meta:
        model = Meal
        fields = "__all__"

class MealAmountSerializer(serializers.ModelSerializer):
    food_name = serializers.SerializerMethodField()

    class Meta:
        model = MealAmount
        fields = ["food_name", "count"]
    
    def get_food_name(self, obj):
        return obj.food.foodName

class ExerciseCategorySerializer(serializers.ModelSerializer):
    #food = FoodSerializer()

    class Meta:
        model = ExerciseCategory
        fields = "__all__"

class MealAmountPostSerializer(serializers.Serializer):
    food_id = serializers.IntegerField(required=True)
    count = serializers.IntegerField(required=True)

class MealPostSerializer(serializers.Serializer):
    meal_list = MealAmountPostSerializer(many=True)