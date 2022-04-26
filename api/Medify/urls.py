from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('verifyMalariaDetection/', views.verifyMalariaDetection, name="verifyMalariaDetection")
]
