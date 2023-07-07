from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("colors/", views.colors, name="colors")
    # path("", views.upload, name="upload"),
]
