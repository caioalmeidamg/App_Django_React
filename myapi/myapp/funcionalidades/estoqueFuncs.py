from ..serializers import ProdutoSerializer, EstoqueSerializer
from ..models import Produto
from ..models import Estoque
from rest_framework import status
from rest_framework.response import Response

def retornaEstoque(id=0):
    if id != 0:    
        estoques = Estoque.objects.filter(ID = id)
        serializer = EstoqueSerializer(estoques, many=True)
        return Response(serializer.data)
            
    elif id == 0: 
        estoques = Estoque.objects.all()
        serializer = EstoqueSerializer(estoques, many=True)
        return Response(serializer.data)

def salvaEstoque(dataParam):
    serializer = EstoqueSerializer(data=dataParam)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def deletaEstoque():
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
    





    