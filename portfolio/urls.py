from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^about/$', views.about, name='about'),
    url(r'^contact/$', views.contact, name='contact'),
    url(r'^projects/$', views.projects, name='projects'),
    url(r'^resume/$', views.resume, name='resume'),
    url(r'^projects/c_sharp/$', views.c_sharp, name='c_sharp'),
    url(r'^projects/java/$', views.java, name='java'),
    url(r'^projects/android/$', views.android, name='android'),
    url(r'^projects/php/$', views.php, name='php'),
    url(r'^projects/javascript/$', views.javascript, name='javascript'),
    url(r'^memory_game/$', views.memory_game, name='memory_game'),
]
