from django.urls import path
from .views import (
    TransactionView,
    TransactionDetailView,
    OfxTransactionUpload,
)


urlpatterns = [
    path('', TransactionView.as_view(), name='index'),
    path('<str:transaction_id>/', TransactionDetailView.as_view()),
    path('uploads/', OfxTransactionUpload.as_view(), name='uploads'),
]
