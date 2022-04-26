from rest_framework import serializers
from .models import Malaria


class MalariaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Malaria
        fields = ['filename','image']