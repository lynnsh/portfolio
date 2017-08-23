from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse("Hello, world. You're at the portfolio index.")

def about(request):
    return HttpResponse("You're looking at question")

def contact(request):
    response = "You're looking at the results of question"
    return HttpResponse(response)

def projects(request):
    return HttpResponse("You're voting on question .")

def resume(request):
    return HttpResponse("You're voting on question" )


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