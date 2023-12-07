from django.urls import path
from .views import OCRImageView

urlpatterns = [
    path('photo/', OCRImageView.as_view(), name='ocr-view'),
]
