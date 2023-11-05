from allauth.account.adapter import DefaultAccountAdapter
#from accounts.views import BloodPressureSerializer
# from main.serializers import BloodPressureSerializer
# from rest_framework.response import Response
from main.models import Weight, BloodPressure

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

        # serializer = BloodPressureSerializer(data=systolic)
        # if serializer.is_valid():
        #     serializer.save()
        user.save()
        newUser = user

        weightvalue = Weight()
        weightvalue.weight_figure = weight
        weightvalue.user = newUser
        weightvalue.measurement_date = "2023-11-05"
        weightvalue.save()


        bloodPressure = BloodPressure()
        bloodPressure.systolic = systolic
        bloodPressure.diastolic = 0
        bloodPressure.measurement_date = "2023-11-05"
        bloodPressure.measurement_time = "12:12"
        bloodPressure.user = newUser
        bloodPressure.save()

        return user
    
    # def save_bloodpressure(self, request, form, bloodpressure):
    #     data = form.cleaned_data
    #     bloodpressure = super().save_bloodpressure(request, bloodpressure)
        
    #     systolic = data.get("systolic")
    #     bloodpressure.systolic = systolic

    #     serializer = BloodPressureSerializer(data=request.data)
    #     # if serializer.is_valid():
    #     #     serializer.save()
    #     #     return Response(serializer.data)
    #     # else:
    #     #     return Response(serializer.errors)

    #     bloodpressure.save()
    #     serializer.save()
    #     return bloodpressure