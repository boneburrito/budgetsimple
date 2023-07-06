from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize

from bonebudget.models import Colors

def index(request):
    return HttpResponse("Counting them bones")

def colors(request):
    colors = Colors.objects.all()
    return JsonResponse(list(colors.values()), safe=False)
