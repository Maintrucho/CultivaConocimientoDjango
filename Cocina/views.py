from django.shortcuts import render
from django.utils import timezone
from .models import Post
from django.shortcuts import render, get_object_or_404
from .forms import PostForm
from django.shortcuts import redirect
from django.db.models import Q
from django.contrib.auth.forms import UserCreationForm

def index(request):
    return render(request, 'Cocina/index.html', {})


def Terminos(request):
    return render(request, 'Cocina/Terminos.html', {})

def redireccion(request):
    return render(request, 'Cocina/redireccion.html', {})


def login(request):
    return render(request, 'registration/login.html', {})

def registro(request):
    return render(request, 'Cocina/registro.html', {})

def post_list(request):
    queryset = request.GET.get("buscar")
    posts = Post.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    if queryset:
        posts = Post.objects.filter(
            Q(title__icontains = queryset) |
            Q(text__icontains = queryset) 
        ).distinct()
    return render(request, 'Cocina/post_list.html', {'posts':posts})

    
def post_detail(request, pk):
    post = get_object_or_404(Post, pk=pk)
    return render(request, 'Cocina/post_detail.html', {'post': post})
def post_new(request):
    if request.method == "POST":
        form = PostForm(request.POST)
        if form.is_valid():
            post = form.save(commit=False)
            post.author = request.user
            post.published_date = timezone.now()
            post.save()
            return redirect('post_detail', pk=post.pk)
    else:
        form = PostForm()
    return render(request, 'Cocina/post_edit.html', {'form': form})

def post_edit(request, pk):
    user = request.user
    if user.has_perm('Cocina.administrador'):
        post = get_object_or_404(Post, pk=pk)
        if request.method == "POST":
            form = PostForm(request.POST, instance=post)
            if form.is_valid():
                post = form.save(commit=False)
                post.author = request.user
                post.published_date = timezone.now()
                post.save()
                return redirect('post_detail', pk=post.pk)
        else:
            form = PostForm(instance=post)
        return render(request, 'Cocina/post_edit.html', {'form': form})
    else:
        return render(request,'Cocina/redireccion.html')



