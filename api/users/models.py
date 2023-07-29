from django.db import models

# Create your models here.
from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    updated_at = models.DateTimeField(auto_now=True)

    def dict(self):
        model_dict = {
            "id": str(self.id),
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "date_joined": self.created_at.isoformat(),
            "updated_at": self.updated_at.isoformat()
        }
        return model_dict
