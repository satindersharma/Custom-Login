from django.contrib import admin
from django.urls import path, include
from .views import SignUpView, UserLoginView, UserLogoutView, DashboardView
urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('dashboard/', DashboardView.as_view(), name='dashboard'),
    path('logout/', UserLogoutView.as_view(), name='logout'),
    path('', include('django.contrib.auth.urls')),
]
