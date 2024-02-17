from django.urls import path
from .views import (
    TransactionsView,
    TransactionDetailView,
    OfxTransactionUpload,
)


urlpatterns = [
    path('', TransactionsView.as_view(), name='index'),
    path('upload/', OfxTransactionUpload.as_view(), name='upload'),
    path('<str:transaction_id>/', TransactionDetailView.as_view()),
]
