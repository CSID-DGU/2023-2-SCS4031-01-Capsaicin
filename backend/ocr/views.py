import json
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from google.cloud import vision
import re
from main.models import BloodPressure
from main.serializers import BloodPressureSerializer
from django.utils import timezone
from django.shortcuts import get_object_or_404
from accounts.models import User
from rest_framework.authentication import BaseAuthentication
from rest_framework.permissions import BasePermission
import pytz
import backend.settings
from google.oauth2 import service_account
import base64

class NoAuthentication(BaseAuthentication):
    def authenticate(self, request):
        return None  # 인증을 수행하지 않음

class NoPermission(BasePermission):
    def has_permission(self, request, view):
        return True  # 항상 허용


def save_blood_pressure_data(phone_number, sys_value, dia_value):
    # 사용자 확인 (실제로는 보안을 강화하기 위한 추가적인 절차 필요)
    # user = get_object_or_404(User, phone_number=phone_number)
    user = User.objects.get(phone_number=phone_number)

    # 서버의 기본 시간대 (settings.py의 TIME_ZONE에 설정된 값)
    server_timezone = timezone.get_current_timezone()

    # 한국 시간대
    korea_timezone = pytz.timezone('Asia/Seoul')

    # 현재 서버 기준 시간
    current_server_time = timezone.now()

    # UTC에서 서버 기준 시간대로 변환
    current_server_time_with_timezone = current_server_time.astimezone(server_timezone)

    # 서버 시간을 한국 시간대로 변환
    korea_time = current_server_time_with_timezone.astimezone(korea_timezone)

    # 혈압 데이터 저장
    blood_pressure_data = BloodPressure.objects.create(
        user=user,
        systolic=sys_value,
        diastolic=dia_value,
        measurement_date=korea_time.date(),
        measurement_time=korea_time.time(),
    )

    serializer = BloodPressureSerializer(blood_pressure_data)
    return serializer.data


# JSON 파일에서 API 키 읽어오기
# with open('ocr/config.json') as config_file:
#     config = json.load(config_file)
#     google_cloud_api_key = config['private_key']

google_api_key = backend.settings.GOOGLE_API_KEY
project_id = backend.settings.PROJECT_ID
private_key_id = backend.settings.PRIVATE_KEY_ID
client_email = backend.settings.CLIENT_EMAIL
client_id = backend.settings.CLIENT_ID
client_x509_cert_url = backend.settings.CLIENT_X509_ERT_URL

# Google Cloud Vision API 클라이언트 생성
# client = vision.ImageAnnotatorClient.from_service_account_info(config)
# Google Cloud Vision API 클라이언트 생성
credentials = service_account.Credentials.from_service_account_info(
    {
        "type": "service_account",
        "project_id": project_id,
        "private_key_id": private_key_id,
        "private_key": google_api_key.replace('\\n', '\n'),
        "client_email": client_email,
        "client_id": client_id,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://accounts.google.com/o/oauth2/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": client_x509_cert_url
    }
)

# 클라이언트 생성
client = vision.ImageAnnotatorClient(credentials=credentials)

class OCRImageView(APIView):
    authentication_classes = [NoAuthentication]  # 인증 무시
    permission_classes = [NoPermission]  # 허용
    sys_value = None
    dia_value = None
    phone_number = None

    def post(self, request, *args, **kwargs):
        if 'image' not in request.data:
            return Response({'error': 'No image provided'}, status=status.HTTP_400_BAD_REQUEST)

        # 이미지 파일을 열어서 데이터를 읽음
        image_file = request.data['image']
        image_data = image_file.read()
        # 이미지 데이터를 base64로 디코딩
        # image_data = base64.b64decode(image_file.read())

        # 클라이언트로부터 전화번호를 받아옴
        OCRImageView.phone_number = request.data.get('phone_number', '')

        if not OCRImageView.phone_number:
            return Response({'error': 'No phone number provided'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
        # 전화번호로 사용자 조회
            user = User.objects.get(phone_number=OCRImageView.phone_number)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        # 이미지 데이터를 Vision API에 전송
        image = vision.Image(content=image_data)
        response = client.text_detection(image=image)

        # API 응답에서 텍스트 추출
        texts = response.text_annotations

        #숫자 배치로 구분 (good)
        if texts:
            # 추출된 숫자만 남기기
            numbers_only = re.findall(r'\d+', texts[0].description)
            print(numbers_only)
            if len(numbers_only) >= 3:
                model, sys_value, dia_value, pul_value = map(int, numbers_only[:4])
                result_text = f"{model}, {sys_value}, {dia_value}, {pul_value}"
                OCRImageView.sys_value = sys_value
                OCRImageView.dia_value = dia_value
                print(result_text)
                print("2", OCRImageView.phone_number, OCRImageView.sys_value, OCRImageView.dia_value)
                # result_text = f"{OCRImageView.sys_value}, {OCRImageView.dia_value}"
                data = save_blood_pressure_data(OCRImageView.phone_number, OCRImageView.sys_value, OCRImageView.dia_value)

                return Response(data, status=status.HTTP_200_OK)

        return Response({'error': 'No valid blood pressure values detected in the image'}, status=status.HTTP_400_BAD_REQUEST)
            
            # 숫자 추출 결과 확인
            # if len(numbers_only) >= 3:
            #     model, sys_value, dia_value, pul_value = map(int, numbers_only[:4])
            #     result_text = f"{model}, {sys_value}, {dia_value}, {pul_value}"
            #     print(result_text)
            #     data = {'sys_value': sys_value, 'dia_value': dia_value, 'phone_number': phone_number}
            #     print(data)
            #     # response = SaveBloodPressureData.as_view()(request, **data)

            #     # SaveBloodPressureData 클래스 인스턴스화
            #     save_bp_view = SaveBloodPressureData()
                
            #     # dispatch 메서드 호출
            #     response = save_bp_view.dispatch(request._request, **data)


            #     # 혈압 데이터 저장 결과 확인
            #     if response.status_code == 200:
            #         return Response({'message': 'Blood pressure data saved successfully'}, status=status.HTTP_200_OK)
            #     else:
            #         return Response({'error': 'Failed to save blood pressure data'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # return Response({'error': 'No valid blood pressure values detected in the image'}, status=status.HTTP_400_BAD_REQUEST)
        #         return Response({'sys': sys_value, 'dia' : dia_value}, status=status.HTTP_200_OK)

        # return Response({'error': 'No valid blood pressure values detected in the image'}, status=status.HTTP_400_BAD_REQUEST)
    
        #모델명 없이
        # if texts:
        #     # 추출된 숫자만 남기기
        #     numbers_only = re.findall(r'\d+', texts[0].description)
        #     print(numbers_only)
            
        #     # 숫자 추출 결과 확인
        #     if len(numbers_only) >= 3:
        #         sys_value, dia_value, pul_value = map(int, numbers_only[:3])
        #         result_text = f"{sys_value}, {dia_value}, {pul_value}"
        #         print(result_text)
        #         return Response({'sys': sys_value, 'dia' : dia_value}, status=status.HTTP_200_OK)

        # return Response({'error': 'No valid blood pressure values detected in the image'}, status=status.HTTP_400_BAD_REQUEST)
        




        #모델명 따로 출력
        # if texts:
        #     extracted_text = texts[0].description
        #     print(extracted_text)
        #     # 수치와 모델명을 구분하기 위한 정규표현식
        #     # pattern = re.compile(r'(\d+)\s*(SYS)\.\s*(\d+)\s*(DIA)\.\s*(\d+)\s*(PUL)\.', re.IGNORECASE)
        #     pattern = re.compile(r'(\d+)\n?\s\.', re.IGNORECASE)

        #     match = pattern.match(texts[0].description)
        #     print(match)
        #     if match:
        #         sys_value = int(match.group(1))
        #         dia_value = int(match.group(3))
        #         pul_value = int(match.group(5))
        #         model_name = match.group(0).split('\n')[0]  # 첫 번째 줄을 모델명으로 가정

        #         result_text = {
        #             "model_name": model_name,
        #             "sys_value": sys_value,
        #             "dia_value": dia_value,
        #             "pul_value": pul_value
        #         }
                

        #         return Response(result_text, status=status.HTTP_200_OK)
        #     else:
        #         return Response({'error': 'No match found'}, status=status.HTTP_400_BAD_REQUEST)
        # else:
        #     return Response({'error': 'No text detected in the image'}, status=status.HTTP_400_BAD_REQUEST)

        


        #뒤에 이름으로 구분
        # if texts:
        #     # 첫 번째 텍스트 추출 (전체 텍스트 또는 특정 부분 추출 가능)
        #     extracted_text = texts[0].description
        #     # 각 수치와 영어 레이블을 포함한 패턴 추출
        #     matches = re.findall(r'(\d+)*(SYS|DIA|PUL)', extracted_text)

        #     # SYS, DIA, PUL 값 추출
        #     sys_value, dia_value, pul_value = None, None, None
        #     for value, label in matches:
        #         value = int(value)
        #         if label == 'SYS':
        #             sys_value = value
        #         elif label == 'DIA':
        #             dia_value = value
        #         elif label == 'PUL':
        #             pul_value = value
        #     print(sys_value)
        #     print(dia_value)
        #     print(pul_value)

        #     # SYS, DIA, PUL 중 하나라도 값이 없으면 에러 응답
        #     if sys_value is not None and dia_value is not None and pul_value is not None:
        #         result_text = f"SYS: {sys_value} mmHg\nDIA: {dia_value} mmHg\nPulse: {pul_value} PUL/min"
        #         return Response({'result_text': result_text}, status=status.HTTP_200_OK)
        #     else:
        #         return Response({'error': 'Not enough numbers with labels detected in the image'}, status=status.HTTP_400_BAD_REQUEST)

        # return Response({'error': 'No text detected in the image'}, status=status.HTTP_400_BAD_REQUEST)

