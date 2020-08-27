from django.urls import path, include
from . import views

urlpatterns = [
    path('all/', views.ProductLilstAPIView.as_view(), name='all'),
    path('alljson/', views.ProductLilstJsonAPIView.as_view(), name='alljson'),
    path('last/', views.ProductLastAPIView.as_view(), name='last'),
    # path('<int:pk>/', views.ProductRetriveAPIView.as_view(), name='single'),
    # path('<int:pk>', views.ProductLatestAPIView.as_view(), name='latest'),
]
