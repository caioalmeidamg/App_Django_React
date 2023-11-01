from rest_framework import generics,status
from rest_framework.response import Response
from .models import Produto
from .models import Estoque
from rest_framework.views import APIView
from .serializers import ProdutoSerializer, EstoqueSerializer

class ProdutoListCreateView(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer
    

#Classe de resposta da view
class respostaProduto(APIView):
    
    #no get nos adicionamos um valor default do id == 0 para que possamos arrumar as rotas
    def get(self, request, id = 0):
        if id != 0:    
            produtos = Produto.objects.filter(ID = id)
            serializer = ProdutoSerializer(produtos, many=True)
            return Response(serializer.data)
            
        elif id == 0: 
            produtos = Produto.objects.all()
            serializer = ProdutoSerializer(produtos, many=True)
            return Response(serializer.data)

    def post(self, request, id = 0):       
        serializer = ProdutoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)     
    
    def delete(self, request, id=0):
        if id != 0:
            try:
                produto = Produto.objects.get(ID=id)
                produto.delete()
                return Response("ok")
            except Produto.DoesNotExist:
                return Response("not ok")
        else:
            produto = Produto.objects.all()
            produto.delete()
            return Response("deletados")
        

#Classe de resposta da view
class respostaEstoque(APIView):
    
    #no get nos adicionamos um valor default do id == 0 para que possamos arrumar as rotas
    def get(self, request, id = 0):
        if id != 0:    
            estoques = Estoque.objects.filter(ID = id)
            serializer = EstoqueSerializer(estoques, many=True)
            return Response(serializer.data)
            
        elif id == 0: 
            estoques = Estoque.objects.all()
            serializer = EstoqueSerializer(estoques, many=True)
            return Response(serializer.data)

    def post(self, request, id = 0):       
        serializer = EstoqueSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)   
            
    
    def delete(self, request, id=0):
        if id != 0:
            try:
                estoques = Estoque.objects.get(ID=id)
                estoques.delete()
                return Response("ok")
            except Estoque.DoesNotExist:
                return Response("not ok")
        else:
            estoques = Estoque.objects.all()
            estoques.delete()
            return Response("deletados")
