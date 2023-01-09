
from rest_framework import serializers
from base.models import Item
from products.models import Products


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        fields = ['title', 'price', 'id', 'description',
                  'pub_date', 'category', 'image']
