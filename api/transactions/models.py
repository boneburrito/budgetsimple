from django.db import models
import uuid
from categories.models import Merchant
from users.models import User


class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    is_credit = models.BooleanField(default=False)
    transaction_type = models.CharField(max_length=50)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    posted_date = models.DateField()
    status = models.CharField(max_length=50)
    description = models.TextField()
    merchant_category_id = models.ForeignKey(Merchant, null=True, on_delete=models.DO_NOTHING)
    # institution_id = models.ForeignKey()  # TODO
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
