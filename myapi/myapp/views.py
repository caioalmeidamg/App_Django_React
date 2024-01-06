from rest_framework import generics,status
from rest_framework.response import Response
from .models import Produto
from .models import Estoque
from rest_framework.views import APIView
from .serializers import ProdutoSerializer, EstoqueSerializer
from .funcionalidades.estoqueFuncs import retornaEstoque,salvaEstoque,deletaEstoque
from .funcionalidades.produtoFuncs import salvaProduto,retornaProduto,deletarProduto

#Classe de resposta da view
class respostaProduto(APIView):
    
    #no get nos adicionamos um valor default do id == 0 para que possamos arrumar as rotas
    def get(self, request, id=0):
        return retornaProduto(id)
                
    def post(self, request, id = 0):      
        return salvaProduto(request.data)     
    
    def delete(self, request, id=0):
        return deletarProduto(id)
        
#Classe de resposta da view
class respostaEstoque(APIView):
    
    #no get nos adicionamos um valor default do id == 0 para que possamos arrumar as rotas
    def get(self, request, id = 0):
        return retornaEstoque(id)

    def post(self, request, id = 0):
        return salvaEstoque(request.data)
       
    def delete(self, request, id=0):
        return deletaEstoque(id)

