from django.shortcuts import render

def post_list(request):
    return render(request, 'Cocina/post_list.html', {})

