from django.db import models

class Product (models.Model):
    name = models.CharField(null=False, max_length=200, verbose_name='Название')
    description = models.TextField(null=False, verbose_name='Описание')
    price = models.IntegerField(null=False, verbose_name="Цена")

