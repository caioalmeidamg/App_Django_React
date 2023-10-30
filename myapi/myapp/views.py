from rest_framework import generics,status
from rest_framework.response import Response
from .models import Produto
from rest_framework.views import APIView
from .serializers import ProdutoSerializer

class ProdutoListCreateView(generics.ListCreateAPIView):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


#Classe de resposta da view
class resposta(APIView):
    
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
    
    def delete(self, request, id):
        try:
            produto = Produto.objects.get(ID = id)
            produto.delete()
            return Response("ok")
        
        except Produto.DoesNotExist:
            return Response("not ok")
        


        
        
        