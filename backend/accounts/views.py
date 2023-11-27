from rest_framework import viewsets
from rest_framework import serializers
from accounts.models import *
from main.serializers import BloodPressureSerializer, WeightSerializer
from rest_framework import generics



#추가
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from dj_rest_auth.registration.views import RegisterView
from rest_framework.authtoken.models import Token


class UserSerializer(serializers.ModelSerializer):
    bloodpressure = BloodPressureSerializer()
    weights = WeightSerializer()

    class Meta:
        model = User
        fields = "__all__"


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
