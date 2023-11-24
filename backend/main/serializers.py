from rest_framework import serializers
from accounts.models import User
from main.models import *

class BloodPressureSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = ["systolic", "diastolic",  "measurement_date", "measurement_time"]

class BloodPressurePostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = ["systolic", "diastolic",  "measurement_date", "measurement_time"]

class WeightSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weight
        fields = ["weight_figure", "measurement_date"]


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


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["fullname"]

class CenterSerializer(serializers.ModelSerializer):
    fullname = serializers.SerializerMethodField()

    class Meta:
        model = Center
        fields = ["name", "fullname"]

    def get_fullname(self, obj):
       if obj.center is not None:
            users_data = UserSerializer(obj.center.all(), many=True).data
            return users_data[0]["fullname"]
       else:
            return None
    


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

class MealAmountPostSerializer(serializers.Serializer):
    food_id = serializers.IntegerField(required=True)
    count = serializers.IntegerField(required=True)

class MealPostSerializer(serializers.Serializer):
    meal_list = MealAmountPostSerializer(many=True)

class ExerciseCategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = ExerciseCategory
        fields = ["name", "imgUrl", "calorie", "time"]

class UserExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExercise
        fields = "__all__"

class ExerciseAmountSerializer(serializers.ModelSerializer):
    exercise_name = serializers.SerializerMethodField()
    calorie = serializers.FloatField(source='exercise.calorie', read_only=True)
    date = serializers.DateField(source='userexercise.date', read_only=True)

    class Meta:
        model = ExerciseAmount
        fields = ["exercise_name", "calorie", "date"]
    
    def get_exercise_name(self, obj):
        return obj.exercise.name

class ExerciseAmountPostSerializer(serializers.Serializer):
    exercise_id = serializers.IntegerField(required=True)
    count = serializers.IntegerField(required=True)

class UserExercisePostSerializer(serializers.Serializer):
    exercise_list = ExerciseAmountPostSerializer()