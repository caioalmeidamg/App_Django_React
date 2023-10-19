from django.shortcuts import render
from rest_framework import generics,status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Produto
from django.http import JsonResponse
from .serializers import ProdutoSerializer

#Essa classe aqui funciona como um retorno de uma view dos dados de uma Api
class ProdutoListCreateView(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer

#Essa vai ser a classe padrão de resposta http para o crud
class resposta:
        
    #Esse pelo visto é um método post padrão para um produto sem um serializer bem trabalhado
    @api_view(['POST'])
    def criar_produto(request):
        if request.method == 'POST':
            #Essa função verifica se os dados passados para p serializers são validos para o banco de dados
            serializer = ProdutoSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
            #caso não seja possivel essa função retorna os erros que os serializer encontrou/gerou
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    
        
   