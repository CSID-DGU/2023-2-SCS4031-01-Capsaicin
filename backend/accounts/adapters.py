from allauth.account.adapter import DefaultAccountAdapter
from main.models import Weight, BloodPressure, Center
from django.utils import timezone
from .models import User

class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data

        user = super().save_user(request, user, form, False)
        phone_number = data.get("phone_number")
        fullname = data.get("fullname")
        birth = data.get("birth")
        gender = data.get("gender")
        userType = data.get("userType")
        userPhoneNumber = data.get("userPhoneNumber")
        height = data.get("height")
        weight = data.get("weight")
        
        systolic = data.get("systolic")
        center_name = data.get("center")

        user.phone_number = phone_number
        user.fullname = fullname
        user.birth = birth
        user.gender = gender
        user.userType = userType
        user.height = height
        user.weight = weight
        user.systolic = systolic
        
        if (userType == "보호자" and userPhoneNumber != ""):
            find_user = User.objects.get(phone_number = userPhoneNumber)
            user.user_id = find_user.id

        user.save()
        newUser = user

        weightvalue = Weight()
        weightvalue.weight_figure = weight
        weightvalue.user = newUser
        weightvalue.measurement_date = timezone.now().date()
        weightvalue.save()


        bloodPressure = BloodPressure()
        bloodPressure.systolic = systolic
        bloodPressure.diastolic = 0
        bloodPressure.measurement_date = timezone.now().date()
        bloodPressure.measurement_time = timezone.now().strftime("%H:%M")
        bloodPressure.user = newUser
        bloodPressure.save()
        if center_name:
            center_obj, created = Center.objects.get_or_create(name=center_name)
            newUser.center = center_obj
            newUser.save()

        return user