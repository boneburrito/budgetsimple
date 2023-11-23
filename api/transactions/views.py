from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.views.generic import TemplateView
from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions  # authenticated users only
from rest_framework.response import Response
from .models import Transaction
from .serializers import TransactionSerializer
from datetime import datetime
from ofxparse import OfxParser


def index(request):
    return HttpResponse("Counting them bones")


def colors(request):
    colors = Colors.objects.all()
    return JsonResponse(list(colors.values()), safe=False)


class TransactionView(APIView):
    # add permission to check if user is authenticated
    authentication_classes = [BasicAuthentication, TokenAuthentication]
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
            'memo': request.data.get('memo'),
            'user_id': request.user.id,
            'posted_date': datetime.now().date(),
            'mcc': request.data.get('mcc')
        }
        serializer = TransactionSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class TransactionDetailView(APIView):
    # add permission to check if user is authenticated
    authentication_classes = [BasicAuthentication, TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, transaction_id, user_id):
        """
        Helper method to get the object with given transaction.id and user_id
        """
        try:
            return Transaction.objects.get(id=transaction_id, user_id=user_id)
        except Transaction.DoesNotExist:
            return None

    def get(self, request, transaction_id, *args, **kwargs):
        """
        Retrieves the transaction with given transaction.id
        """
        transaction_instance = self.get_object(transaction_id, request.user.id)
        if not transaction_instance:
            return Response(
                {"res": "Object with transaction.id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )

        serializer = TransactionSerializer(transaction_instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, transaction_id, *args, **kwargs):
        """
        Updates the transaction item with given transaction.id if exists
        """
        transaction_instance = self.get_object(transaction_id, request.user.id)
        if not transaction_instance:
            return Response(
                {"res": "Object with transaction.id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        data = {
            'description': request.data.get('description'),
            'is_credit': request.data.get('is_credit'),
            'amount': request.data.get('amount'),
            'transaction_type': request.data.get('transaction_type'),
            'memo': request.data.get('memo'),
            'user_id': request.user.id,
            'posted_date': request.data.get('posted_date'),
            'mcc': request.data.get('mcc')
        }
        serializer = TransactionSerializer(instance=transaction_instance, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, transaction_id, *args, **kwargs):
        """
        Deletes the transaction with given transaction.id if exists
        """
        transaction_instance = self.get_object(transaction_id, request.user.id)
        if not transaction_instance:
            return Response(
                {"res": "Object with transaction.id does not exist"},
                status=status.HTTP_400_BAD_REQUEST
            )
        transaction_instance.delete()
        return Response(
            {"res": "Transaction deleted!"},
            status=status.HTTP_200_OK
        )


class OfxTransactionUpload(TemplateView):
    template_name = 'ofx_transaction_upload.html'

    def post(self, request):
        context = {
            'message': []
        }

        ofx_file = request.FILES['ofx_file']
        with open(ofx_file) as f:
            ofx = OfxParser.parse(f)

        account = ofx.account
        statement = account.statement

        for transaction in statement.transaction:
            try:
                Transaction.objects.create(
                    transaction_type=transaction.type,
                    description=transaction.payee,
                    amount=transaction.amount,
                    posted_date=transaction.date,
                    memo=transaction.memo,
                    mcc=transaction.mcc
                )

            except Exception as e:
                context['exceptions_raised'] = e

        return render(request, self.template_name, context)
