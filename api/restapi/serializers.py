
from rest_framework import serializers
from products.models import Products


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Products
        # fields = ['title', 'price', 'id', 'description',
        #           'pub_date', 'category', 'image']
        fields = '__all__'
