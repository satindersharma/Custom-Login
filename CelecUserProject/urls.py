"""CelecUserProject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from .views import Home, PrivaryPage, TermsandConditionPage

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", Home.as_view(), name='home'),
    path("privacy-policy/", PrivaryPage.as_view(), name='privacy-page'),
    path("terms-and-conditions/", TermsandConditionPage.as_view(),
         name='terms-and-condition-page'),
    path('', include('users.urls')),
    path('', include('ermapp.urls')),
    path('', include('profiles.urls')),
]
