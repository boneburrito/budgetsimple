from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import permissions  # authenticated users only
from .models import Transaction, Colors
from .serializers import TransactionSerializer
from datetime import datetime


def index(request):
    return HttpResponse("Counting them bones")


def colors(request):
    colors = Colors.objects.all()
    return JsonResponse(list(colors.values()), safe=False)


class TransactionView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        """
        List all the transaction items for a given requested user
        """
        transactions = Transaction.objects.filter(user_id=request.user.id)
        serializer = TransactionSerializer(transactions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request, *args, **kwargs):
        """
        Create the transactions with given transaction data
        """
        data = {
            'description': request.data.get('description'),
            'is_credit': request.data.get('is_credit'),
            'amount': request.data.get('amount'),
            'transaction_type': request.data.get('transaction_type'),
            'status': request.data.get('status'),
            'user_id': request.user.id,
            'posted_date': datetime.now().date()
        }
        serializer = TransactionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def index(request):
#     user_obj = User_entity.objects.all()
#     context = {'users': user_obj}
#     return render(request, 'home/index.html', context=context)


# def upload(request):
#     """
#     Get the sign, transaction timestamp, description, transaction type, and balance
#     from an uploaded CSV.
#     """
#     for transaction in csv:
#         """
# 		transaction_name = some_csv_attribute.name
# 		trans   action_category = some_csv_attribute.category
# 		transaction_type = some_csv_attribute.type
# 		if transaction_type == 'debit':
# 			transaction_amount = some_csv_attribute.amount * -1.0
# 		# write transactions to db
# 		return transaction
#         """"
#
#     return render(request, '/upload.html', {})
