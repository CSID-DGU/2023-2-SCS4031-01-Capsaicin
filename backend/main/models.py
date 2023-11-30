from django.db import models
from accounts.models import User

# Create your models here.
class BloodPressure(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bloodpressure")
    systolic = models.IntegerField()
    diastolic = models.IntegerField()
    measurement_date = models.DateField()
    measurement_time = models.TimeField()

    def __str__(self):
        return f"{self.systolic}"
    
class Weight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="weights")
    weight_figure = models.FloatField()
    measurement_date = models.DateField()

    # def __str__(self):
    #     return self.weight_figure
    
class FoodCategory(models.Model):
    name = models.CharField(max_length=20)
    imgUrl = models.CharField(max_length=200)
    #categoryId = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
class Food(models.Model):
    foodName = models.CharField(max_length=30)
    foodImgUrl = models.CharField(max_length=200, null = True)
    amount = models.FloatField()
    calorie = models.FloatField()
    natrium = models.FloatField()
    category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE, related_name="food")
    #test = models.IntegerField()

    def __str__(self):
        return self.foodName
    
class Center(models.Model):
    name = models.CharField(max_length=30)

class Notice(models.Model):
    description = models.CharField(max_length=500)
    center = models.ForeignKey(Center, on_delete=models.CASCADE)

class Meal(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="meal")

class MealAmount(models.Model):
    meal = models.ForeignKey(Meal, on_delete=models.CASCADE, related_name='mealamount')
    food = models.ForeignKey(Food, on_delete=models.CASCADE, related_name='mealamount')
    count = models.FloatField()
    unit = models.CharField(max_length=10)

class ExerciseCategory(models.Model):
    name = models.CharField(max_length=20)
    imgUrl = models.CharField(max_length=200)
    calorie = models.FloatField()
    # time = models.IntegerField()

    def __str__(self):
        return self.name

class UserExercise(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="userexercise")
    date = models.DateField(auto_now=True)

class ExerciseAmount(models.Model):
    userexercise = models.ForeignKey(UserExercise, on_delete=models.CASCADE, related_name='exerciseamount')
    exercise = models.ForeignKey(ExerciseCategory, on_delete=models.CASCADE, related_name='exerciseamount')
    count = models.IntegerField()