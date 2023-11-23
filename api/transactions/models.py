from django.db import models
import uuid
from users.models import User


class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    is_credit = models.BooleanField(default=False)  # I think this can go.
    transaction_type = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    posted_date = models.DateField()
    memo = models.CharField(max_length=50)
    description = models.TextField()
    mcc = models.IntegerField(null=True, blank=True)
    # category_id = models.ForeignKey()  # TODO
    # institution_id = models.ForeignKey()  # TODO
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
