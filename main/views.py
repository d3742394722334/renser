from django.shortcuts import render, get_object_or_404
from .models import Post

def home(request):
    return render(request, 'main_app/home.html')

def about(request):
    return render(request, 'main_app/about.html')

def blog(request):
    posts = Post.objects.all()
    context = {'posts': posts}
    return render(request, 'main_app/blog.html', context)

def blog_detail(request, url):
    post = get_object_or_404(Post, slug=url)
    previous_post = Post.objects.filter(time__lt=post.time).order_by('-time').first()
    next_post = Post.objects.filter(time__gt=post.time).order_by('time').first()
    context = {
        'post': post,
        'previous_post': previous_post,
        'next_post': next_post,
    }
    return render(request, 'main_app/blog_detail.html', context)