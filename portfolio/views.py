from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404


def index(request):
    context = {'classhome': "nav-current"}
    return render(request, 'portfolio/index.html', context)

def about(request):
    context = {'classabout': "nav-current"}
    return render(request, 'portfolio/about.html', context)

'''def contact(request):
    context = {'classcontact': "nav-current"}
    return render(request, 'portfolio/contact.html', context)'''

def projects(request):
    context = {'classprojects': "nav-current"}
    return render(request, 'portfolio/projects.html', context)

def resume(request):
    context = {'classresume': "nav-current"}
    return render(request, 'portfolio/resume.html', context)

def memory_game(request):
    context = {}
    return render(request, 'memorygame/index.html', context)


def download_zip(request, filename):
    zip_path = "/home/lynnsh/mysite/portfolio/static/portfolio/zip/"+filename+".zip"
    try:
        zip_file =  open(zip_path, 'rb')
        response = HttpResponse(zip_file, content_type='application/zip')
        response['Content-Disposition'] = "attachment; filename="+filename+".zip"
        zip_file.close()
        return response
    except FileNotFoundError:
        raise Http404
