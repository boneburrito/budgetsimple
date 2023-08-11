from django.urls import path
from .views import MerchantView

urlpatterns = [
    path('merchants', MerchantView.as_view()),
]
