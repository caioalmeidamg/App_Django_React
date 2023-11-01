from ..models import Produto
from ..serializers import ProdutoSerializer
from rest_framework import status
from rest_framework.response import Response

def retornaProduto(id=0):
    if id != 0:    
        produtos = Produto.objects.filter(ID = id)
        serializer = ProdutoSerializer(produtos, many=True)
        return Response(serializer.data)
            
    elif id == 0:

        produtos = Produto.objects.all()
        serializer = ProdutoSerializer(produtos, many=True)
        return Response(serializer.data)
    
def salvaProduto(dataParam):
    serializer = ProdutoSerializer(data=dataParam)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

def deletarProduto(id):
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
