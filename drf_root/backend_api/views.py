from django.shortcuts import render
from rest_framework.views import APIView
from .models import Product
from .serializer import ProductSerializer
from rest_framework.response import Response

class ProductView(APIView):
    def get(self, request):
        output  = [
            {
            "id": output.id,
            "name": output.name,
            "description": output.description,
            "price": output.price
            } for output in Product.objects.all()
        ]
        return Response(output)

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

    def patch(self, request, pk):
        obj = self.get_object(pk)
        serializer = ProductSerializer(obj, data=request.data, partial=True)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

