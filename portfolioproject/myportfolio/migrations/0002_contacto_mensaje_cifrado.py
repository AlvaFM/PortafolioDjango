# Generated by Django 4.2 on 2024-06-30 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='contacto',
            name='mensaje_cifrado',
            field=models.TextField(default='default'),
            preserve_default=False,
        ),
    ]
