from rest_framework import serializers

from .models import Person

# Lead Serializer


class AboutUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = '__all__'
