import os
import json
from django.shortcuts import render, get_object_or_404
from django.conf import settings
from django.views.decorators.csrf import csrf_exempt
from .models import *

