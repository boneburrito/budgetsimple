from django.urls import path
from . import views
from .views import (
    TransactionView,
)


urlpatterns = [
    path("", views.index, name="index"),
    path("colors/", views.colors, name="colors"),
    path('api/', TransactionView.as_view()),
    # path("", views.upload, name="upload"),
]
