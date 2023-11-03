from django.db import models
from accounts.models import User

# Create your models here.
class BloodPressure(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bloodpressure")
    systolic = models.IntegerField()
    diastolic = models.IntegerField()
    measurement_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.systolic}"
    
class Weight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="weights")
    weight_figure = models.FloatField()
    measurement_date = models.DateTimeField(auto_now_add=True)

    # def __str__(self):
    #     return self.weight_figure
    
class FoodCategory(models.Model):
    name = models.CharField(max_length=20)
    imgUrl = models.CharField(max_length=200)
    categoryId = models.CharField(max_length=20)

    def __str__(self):
        return self.name
    
class Food(models.Model):
    foodName = models.CharField(max_length=30)
    foodImgUrl = models.CharField(max_length=200)
    calorie = models.FloatField()
    natrium = models.FloatField()
    category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE, related_name="food")
    #test = models.IntegerField()

    def __str__(self):
        return self.foodName