from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Produto
from django.http import JsonResponse
from .serializers import ProdutoSerializer
from django.views.decorators.csrf import csrf_exempt

class ProdutoListCreateView(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


class resposta:

    @api_view(['POST'])
    def criar_produto(request):
        if request.method == 'POST':
            serializer = ProdutoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     

    