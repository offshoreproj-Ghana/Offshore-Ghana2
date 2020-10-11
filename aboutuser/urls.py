from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from .views import Aboutuserviewset
from . import views 


router = routers.DefaultRouter()
router.register('Person', Aboutuserviewset)

urlpatterns = [
    #path('', views.first),
    path('',  include(router.urls)),
]
