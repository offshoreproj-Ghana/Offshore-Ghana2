from .models import Person
from rest_framework import viewsets, permissions

from .serializers import AboutUserSerializer


# perosn viewset

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()

    serializer_class = AboutUserSerializer
