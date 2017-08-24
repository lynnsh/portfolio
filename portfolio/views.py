from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def index(request):
    context = {}
    return render(request, 'portfolio/index.html', context)

def about(request):
    context = {}
    return render(request, 'portfolio/about.html', context)

def contact(request):
    context = {}
    return render(request, 'portfolio/contact.html', context)

def projects(request):
    context = {}
    return render(request, 'portfolio/projects.html', context)

def resume(request):
    context = {}
    return render(request, 'portfolio/resume.html', context)


def c_sharp(request):
    return HttpResponse("c_sharp" )

def java(request):
    return HttpResponse("java" )

def android(request):
    return HttpResponse("android" )

def php(request):
    return HttpResponse("php" )

def javascript(request):
    return HttpResponse("js" )