from django.urls import path,include
from . import views

urlpatterns = [
	path('newsapi/',views.newsapi.as_view(),name='newsapi'),
]