from django.db import models

# Create your models here.

class Colors(models.Model):
    name = models.CharField(max_length=100, default='')
    hex = models.CharField(max_length=6, default='')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['name']
    
    def __str__(self):
        return self.name
