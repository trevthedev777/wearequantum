from django.shortcuts import render
from requests import request 

# Create your views here.
def index(request):
    return render(request, 'landing_page/index.html')