from rest_framework.generics import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from .serializers import ItemSerializer, ProductSerializer
from base.models import Item
from django.http import HttpResponse
from django.shortcuts import redirect
from django.urls import reverse

from products.models import Products


# @api_view(['GET', 'POST', 'DELETE'])
# def getData(request):
#     if request.method == 'GET':
#         items = Item.objects.all()
#         serializer = ItemSerializer(items, many=True)
#         return Response(serializer.data)
#     elif request.method == 'POST':
#         serializer = ItemSerializer(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#         return Response(serializer.data)


class ProductListAPIView(APIView):
    def get(self, request):
        products = Products.objects.all()
        serializer = ProductSerializer(products, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ProductDetailAPIView(APIView):

    def get_object(self, pk):
        product = get_object_or_404(Products, pk=pk)
        return product

    # get product according to its id
    def get(self, request, pk):
        product = self.get_object(pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    def put(self, request, pk):
        product = self.get_object(pk=pk)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # delete product
    def delete(self, request, pk):
        product = self.get_object(pk=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
