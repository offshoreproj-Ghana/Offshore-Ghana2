from django.shortcuts import render
from rest_framework import viewsets
from .serializers import AboutUserSerializer
from .models import Person
from django.http import HttpResponse



# Create your views here.
class Aboutuserviewset(viewsets.ModelViewSet):
    serializer_class = AboutUserSerializer
    queryset = Person.objects.all()

