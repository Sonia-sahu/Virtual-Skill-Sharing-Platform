from django.urls import path
from .views import (
    RegisterUserView,
    UserProfileView,
    UserSettingsView,
    CustomTokenObtainPairView
)

urlpatterns = [
    path('register/', RegisterUserView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('profile/', UserProfileView.as_view(), name='user_profile'),
    path('settings/', UserSettingsView.as_view(), name='user_settings'),
]