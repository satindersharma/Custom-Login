from django.contrib import admin
from django.urls import path
from .views import SignUpView, UserLoginView, UserLogoutView, LogintTemp1, LogintTemp2, LogintTemp3
urlpatterns = [
    path('signup/', SignUpView.as_view(), name='signup'),
    path('login/', UserLoginView.as_view(), name='login'),
    path('dashboard/', LogintTemp1.as_view(), name='dashboard'),
    path('logout/', UserLogoutView.as_view(), name='logout'),
]
