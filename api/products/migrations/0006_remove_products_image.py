# Generated by Django 4.1.5 on 2023-01-06 21:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_products_image_alter_products_price_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='products',
            name='image',
        ),
    ]
