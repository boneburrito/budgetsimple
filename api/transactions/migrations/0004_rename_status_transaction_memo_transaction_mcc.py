# Generated by Django 4.2 on 2023-11-23 22:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('transactions', '0003_delete_colors'),
    ]

    operations = [
        migrations.RenameField(
            model_name='transaction',
            old_name='status',
            new_name='memo',
        ),
        migrations.AddField(
            model_name='transaction',
            name='mcc',
            field=models.IntegerField(null=True),
        ),
    ]
