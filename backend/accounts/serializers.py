from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer


class CustomRegisterSerializer(RegisterSerializer):
    phone_number = serializers.CharField()
    fullname = serializers.CharField()
    birth = serializers.IntegerField()
    gender = serializers.CharField()
    userType = serializers.CharField()
    guardPhoneNumber = serializers.CharField(required=False)
    systolic = serializers.IntegerField()
    diastolic = serializers.IntegerField()

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['phone_number'] = self.validated_data.get("phone_number", "")
        data['fullname'] = self.validated_data.get("fullname", "")
        data['birth'] = self.validated_data.get("birth", "")
        data['gender'] = self.validated_data.get("gender", "")
        data['userType'] = self.validated_data.get("userType", "")
        data['guardPhoneNumber'] = self.validated_data.get("guardPhoneNumber", "")
        data['systolic'] = self.validated_data.get("systolic", "")
        data['diastolic'] = self.validated_data.get("diastolic", "")

        return data