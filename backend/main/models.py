from django.db import models
from accounts.models import User

# Create your models here.
class BloodPressure(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="bloodpressure")
    systolic = models.IntegerField()
    diastolic = models.IntegerField()
    measurement_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.systolic
    
class Weight(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="weights")
    weight_figure = models.FloatField()
    measurement_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.weight_figure