from django.urls import path
from .views import OCRImageView

urlpatterns = [
    path('photo/', OCRImageView.as_view(), name='ocr-view'),
    # 여기서 'api/ocr/'는 원하는 엔드포인트에 따라 수정 가능합니다.
]
