from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader


def index(request):
    context = {'classhome': "nav-current"}
    return render(request, 'portfolio/index.html', context)

def about(request):
    context = {'classabout': "nav-current"}
    return render(request, 'portfolio/about.html', context)

def contact(request):
    context = {'classcontact': "nav-current"}
    return render(request, 'portfolio/contact.html', context)

def projects(request):
    context = {'classprojects': "nav-current"}
    return render(request, 'portfolio/projects.html', context)

def resume(request):
    context = {'classresume': "nav-current"}
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