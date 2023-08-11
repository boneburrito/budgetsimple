from rest_framework.authentication import BasicAuthentication, TokenAuthentication
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import permissions
from rest_framework.response import Response
from .models import Merchant
from .serializers import MerchantSerializer

class MerchantView(APIView):
    authentication_classes = [BasicAuthentication, TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request):
        categories = Merchant.objects.all()
        serializer = MerchantSerializer(categories, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
