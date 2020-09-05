from django.urls import path, include
from . import views

urlpatterns = [
    # path('setting/', views.SettingFormView.as_view(), name='settings'),
    path('setting/<int:pk>', views.SettingUpdateFormView.as_view(), name='settingss'),
]
