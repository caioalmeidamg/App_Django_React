from rest_framework import serializers
from .models import Produto, Estoque

#Essa classe de serializers faz um papel muito parecido ao de uma JPA
class ProdutoSerializer(serializers.ModelSerializer):
    estoque_nome = serializers.CharField(source='estoque.nome', read_only=True)

    class Meta:
        model = Produto
        fields = ['ID', 'nome', 'descricao', 'preco', 'ok', 'estoque_nome']


#Essa classe de serializers faz um papel muito parecido ao de uma JPA
class EstoqueSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estoque
        fields = '__all__'        