# Generated by Django 4.2 on 2023-11-23 22:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0004_rename_status_transaction_memo_transaction_mcc'),
    ]

    operations = [
        migrations.AlterField(
            model_name='transaction',
            name='mcc',
            field=models.IntegerField(blank=True, null=True),
        ),
    ]