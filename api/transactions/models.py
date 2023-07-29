from django.db import models
import uuid
from users.models import User

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
class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    is_credit = models.BooleanField(default=False)
    transaction_type = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    posted_date = models.DateField()
    status = models.CharField(max_length=50)
    description = models.TextField()
    # category_id = models.ForeignKey()  # TODO
    # institution_id = models.ForeignKey()  # TODO
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
