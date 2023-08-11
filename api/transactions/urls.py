from django.urls import path
from . import views
from .views import (
    TransactionView,
    TransactionDetailView,
)


urlpatterns = [
    path('', TransactionView.as_view(), name='index'),
    path('<str:transaction_id>/', TransactionDetailView.as_view())
]
