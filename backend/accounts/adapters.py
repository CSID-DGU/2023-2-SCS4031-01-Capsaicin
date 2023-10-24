from allauth.account.adapter import DefaultAccountAdapter
from accounts.models import BloodPressure


class CustomAccountAdapter(DefaultAccountAdapter):

    def save_user(self, request, user, form, commit=True):
        data = form.cleaned_data

        user = super().save_user(request, user, form, False)
        phone_number = data.get("phone_number")
        fullname = data.get("fullname")
        birth = data.get("birth")
        gender = data.get("gender")
        userType = data.get("userType")
        guardPhoneNumber = data.get("guardPhoneNumber")
        height = data.get("height")
        weight = data.get("weight")
        
        systolic = data.get("systolic")


        user.phone_number = phone_number
        user.fullname = fullname
        user.birth = birth
        user.gender = gender
        user.userType = userType
        user.guardPhoneNumber = guardPhoneNumber
        user.height = height
        user.weight = weight
        user.systolic = systolic

        user.save()
        return user

    