# project_name/urls.py
from django.urls import path, include

urlpatterns = [
    path('api/', include('api.urls')),
]
