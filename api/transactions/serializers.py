from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            "id", "user_id", "is_credit", "transaction_type", "amount",
            "posted_date", "status", "description", "created_at", "updated_at"
            ]
