from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.core.serializers import serialize

from bonebudget.models import Colors

def index(request):
    return HttpResponse("Counting them bones")

def colors(request):
    colors = Colors.objects.all()
    return JsonResponse(list(colors.values()), safe=False)

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
