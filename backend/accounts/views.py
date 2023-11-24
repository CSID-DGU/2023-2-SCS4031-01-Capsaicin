from rest_framework import viewsets
from rest_framework import serializers
from accounts.models import *
from main.serializers import BloodPressureSerializer, WeightSerializer
from rest_framework import generics


#추가
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

class UserSerializer(serializers.ModelSerializer):
    bloodpressure = BloodPressureSerializer()
    weights = WeightSerializer()

    class Meta:
        model = User
        fields = "__all__"


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

# class GuardianUserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = GuardianUser
#         fields = ['phone_number', 'password', 'user_phone_number']

# class GuardianUserCreateView(generics.CreateAPIView):
#     queryset = GuardianUser.objects.all()
#     serializer_class = GuardianUserSerializer

# class UserAV(APIView):
#     def post(self, request, format='json'):
#         serializer = UserSerializer(data=request.data)
#         if serializer.is_valid():
#             phone_number = serializer.validated_data['phone_numer']
#             if User.objects.filter(phone_number=phone_number).exists():
#                 return Response({'error': '중복된 전화번호입니다.'}, status=status.HTTP_400_BAD_REQUEST)
#             user = serializer.save()
#             if user:
#                 return Response(serializer.data, status=status.HTTP_201_CREATED)
#         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# @api_view(['POST'])
# def register(request):
#     user_data = request.data.get('user')  # 사용자 데이터
#     blood_pressure_data = request.data.get('systolic')  # 혈압 데이터

#     # 사용자 데이터를 저장
#     user_serializer = UserSerializer(data=user_data)
#     if user_serializer.is_valid():
#         user_serializer.save()

#         # 사용자의 ID를 가져와서 BloodPressure 모델에 저장
#         user_id = user_serializer.instance.id
#         blood_pressure_data['user'] = user_id
#         blood_pressure_serializer = BloodPressure(data=blood_pressure_data)
#         if blood_pressure_serializer.is_valid():
#             blood_pressure_serializer.save()
#             return Response({'message': '회원가입이 완료되었습니다.'}, status=status.HTTP_201_CREATED)
#         return Response(blood_pressure_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#     return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)