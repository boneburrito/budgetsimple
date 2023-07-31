from django.urls import path
from rest_framework.authtoken import views

from .views import MeView, RegisterView

urlpatterns = [
    path('api-token-auth/', views.obtain_auth_token),
    path('register/', RegisterView.as_view(), name='register'),
    path('me/', MeView.as_view(), name='me'),
]
