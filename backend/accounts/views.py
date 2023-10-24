from rest_framework import viewsets
from rest_framework import serializers
from accounts.models import User, BloodPressure


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BloodPressure(serializers.ModelSerializer):
    class Meta:
        model = BloodPressure
        fields = ('systolic', 'diastolic')