from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, "home.html")

def gunduz(request):
    return render(request, "gunduz.html")

def anaokulu(request):
    return render(request, "anaokulu.html")