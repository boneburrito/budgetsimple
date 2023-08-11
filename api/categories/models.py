from django.db import models
import uuid

class Merchant(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    code = models.CharField(max_length=5, unique=True, default='0000')
    description = models.CharField(max_length=255, default='')
