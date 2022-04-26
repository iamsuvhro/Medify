from django.db import models


class Malaria(models.Model):

    filename = models.CharField(max_length=50)
    image = models.ImageField(upload_to='static/images/')

    def __str__(self):
        return self.filename