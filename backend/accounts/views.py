from rest_framework import viewsets
from rest_framework import serializers
from accounts.models import *
from main.serializers import BloodPressureSerializer, WeightSerializer
from rest_framework import generics
from dj_rest_auth.views import LoginView
from .serializers import CustomLoginSerializer
from django.conf import settings
from django.utils import timezone


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


class CustomLoginView(LoginView):
    serializer_class = CustomLoginSerializer

    def get_response(self):
        serializer_class = self.get_response_serializer()

        access_token_expiration = None
        refresh_token_expiration = None
        if getattr(settings, 'REST_USE_JWT', False):
            from rest_framework_simplejwt.settings import api_settings as jwt_settings
            access_token_expiration = (timezone.now() + jwt_settings.ACCESS_TOKEN_LIFETIME)
            refresh_token_expiration = (timezone.now() + jwt_settings.REFRESH_TOKEN_LIFETIME)
            return_expiration_times = getattr(settings, 'JWT_AUTH_RETURN_EXPIRATION', False)

            find_user = self.user
            data = {
                'user': find_user,
                'access_token': self.access_token,
                'refresh_token': self.refresh_token
            }

            if return_expiration_times:
                data['access_token_expiration'] = access_token_expiration
                data['refresh_token_expiration'] = refresh_token_expiration

            serializer = serializer_class(instance=data,
                                          context=self.get_serializer_context())
        else:
            serializer = serializer_class(instance=self.token,
                                          context=self.get_serializer_context())

        response = Response(serializer.data, status=status.HTTP_200_OK)
        if getattr(settings, 'REST_USE_JWT', False):
            cookie_name = getattr(settings, 'JWT_AUTH_COOKIE', None)
            refresh_cookie_name = getattr(settings, 'JWT_AUTH_REFRESH_COOKIE', None)
            refresh_cookie_path = getattr(settings, 'JWT_AUTH_REFRESH_COOKIE_PATH', '/')
            cookie_secure = getattr(settings, 'JWT_AUTH_SECURE', False)
            cookie_httponly = getattr(settings, 'JWT_AUTH_HTTPONLY', True)
            cookie_samesite = getattr(settings, 'JWT_AUTH_SAMESITE', 'Lax')

            if cookie_name:
                response.set_cookie(
                    cookie_name,
                    self.access_token,
                    expires=access_token_expiration,
                    secure=cookie_secure,
                    httponly=cookie_httponly,
                    samesite=cookie_samesite
                )

            if refresh_cookie_name:
                response.set_cookie(
                    refresh_cookie_name,
                    self.refresh_token,
                    expires=refresh_token_expiration,
                    secure=cookie_secure,
                    httponly=cookie_httponly,
                    samesite=cookie_samesite,
                    path=refresh_cookie_path
                )
        return response