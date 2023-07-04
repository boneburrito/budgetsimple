from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

def index(request):
    return HttpResponse("Counting them bones")

def test(request):
    return JsonResponse({ 'test': 'testing' })
