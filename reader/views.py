from rest_framework import generics
from others.request_history import serializers
from others.request_history import models


class FacturaWebHookApiView(generics.CreateAPIView):
    queryset = models.Log.objects.all()
    serializer_class = serializers.RequestLogSerializer
