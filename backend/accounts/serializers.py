from rest_framework import serializers
from dj_rest_auth.registration.serializers import RegisterSerializer
from django.db import IntegrityError
from .models import *


class CustomRegisterSerializer(RegisterSerializer):
    phone_number = serializers.CharField()
    fullname = serializers.CharField()
    birth = serializers.IntegerField()
    gender = serializers.CharField()
    userType = serializers.CharField()
    userPhoneNumber = serializers.CharField(required=False, allow_blank=True)
    height = serializers.FloatField()
    weight = serializers.FloatField()
    systolic = serializers.IntegerField()
    center = serializers.CharField(required=False, allow_blank=True)
    #diastolic = serializers.IntegerField()

    def create(self, validated_data):
        user_phone_number = validated_data.pop('userPhoneNumber', None)
        
        if user_phone_number:
            # 전화번호로 유저를 찾아서 연결
            try:
                user = User.objects.get(phone_number=user_phone_number)
                validated_data['user_id'] = user.id
            except User.DoesNotExist:
                raise serializers.ValidationError({'userPhoneNumber': '일치하는 유저가 없습니다.'})
            
        try:
            return super().create(validated_data)
        except IntegrityError as e:
            print("IntegrityError:", e)
            if 'unique constraint' in str(e).lower() and 'phone_number' in str(e).lower():
                raise serializers.ValidationError({'phone_number': '이미 가입된 번호입니다.'})
            raise

    def get_cleaned_data(self):
        data = super().get_cleaned_data()
        data['phone_number'] = self.validated_data.get("phone_number", "")
        data['fullname'] = self.validated_data.get("fullname", "")
        data['birth'] = self.validated_data.get("birth", "")
        data['gender'] = self.validated_data.get("gender", "")
        data['userType'] = self.validated_data.get("userType", "")
        data['userPhoneNumber'] = self.validated_data.get("userPhoneNumber", "")
        data['height'] = self.validated_data.get("height", "")
        data['weight'] = self.validated_data.get("weight", "")
        data['systolic'] = self.validated_data.get("systolic", "")
        data['center'] = self.validated_data.get("center", "")
        #data['diastolic'] = self.validated_data.get("diastolic", "")

        return data