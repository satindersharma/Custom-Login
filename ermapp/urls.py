from django.urls import path, include
from . import views

urlpatterns = [
    path('all/', views.ProductLilstAPIView.as_view(), name='all'),
    path('json/', views.ProductLilstJsonAPIView.as_view(), name='alljson'),
    path('last/', views.ProductLastAPIView.as_view(), name='last'),
    path('l/', views.ExProductLastAPIView.as_view(), name='last'),
    #  path('api/data/', views.get_data, name='api-data'),
    # path('api/chart/data/', views.ChartData.as_view()),
    path('chart/', views.HomeView.as_view(), name='chart'),
    path('separate-chart/', views.SeparateChartView.as_view(), name='chart'),
    path('realtime/', views.RealtimeChartView.as_view(), name='chart'),
   
    # path('<int:pk>/', views.ProductRetriveAPIView.as_view(), name='single'),
    # path('<int:pk>', views.ProductLatestAPIView.as_view(), name='latest'),
]
