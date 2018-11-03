from django.db import models

# Create your models here.

class Bill(models.Model):

    name_company = models.CharField(max_length = 50)
    name_client = models.CharField(max_length = 50)
    product = models.CharField(max_length = 255)
    total = models.IntegerField()
