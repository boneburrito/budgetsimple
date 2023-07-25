from django.urls import path
from . import views
from .views import (
    TransactionView,
    TransactionDetailView,
)


urlpatterns = [
    path("", views.index, name="index"),
    path("colors/", views.colors, name="colors"),
    path('api/', TransactionView.as_view()),
    path('api/<str:transaction_id>/', TransactionDetailView.as_view()),
]