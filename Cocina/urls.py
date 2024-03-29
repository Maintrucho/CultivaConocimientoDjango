from django.urls import path
from . import views
from django.contrib.auth.views import LoginView

urlpatterns = [
    path('', views.index, name='index'),
    path('redireccion', views.redireccion, name='redireccion'),
    path('post/list', views.post_list, name='post_list'),
    path('login', LoginView.as_view(), name='login'),
    path('registro', views.registro, name='registro'),
    path('terminos', views.Terminos, name='Terminos'),
    path('post/<int:pk>/', views.post_detail, name='post_detail'),
    path('post/new', views.post_new, name='post_new'),
    path('post/<int:pk>/edit/', views.post_edit, name='post_edit'),
]