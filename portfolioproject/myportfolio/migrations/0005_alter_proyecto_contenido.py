# Generated by Django 4.2 on 2024-06-30 05:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myportfolio', '0004_alter_proyecto_contenido'),
    ]

    operations = [
        migrations.AlterField(
            model_name='proyecto',
            name='contenido',
            field=models.TextField(),
        ),
    ]