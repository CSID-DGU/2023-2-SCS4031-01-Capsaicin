"""practice URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from accounts import urls
from django.contrib import admin
from django.urls import path
from django.urls import include
from main import urls
from  accounts.views import CustomLoginView


from rest_framework import routers
from accounts.views import *
router = routers.DefaultRouter()
router.register('user', UserViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('accounts/login/', CustomLoginView.as_view(), name='rest_login'),
    path('accounts/', include('dj_rest_auth.urls')),
    path('accounts/registration', include('dj_rest_auth.registration.urls')),
    #path('accounts/registration', UserAV.as_view(), name='user'),
    path('accounts/', include('allauth.urls')),
    path('accounts/', include('accounts.urls')),
    path('accounts/registration/guard/', include('dj_rest_auth.registration.urls')),
    path('accounts/', include('accounts.urls')),
    path('main/', include('main.urls')),
    path('guard/', include('guard.urls')),
    path('ocr/', include('ocr.urls')),
]
