from rest_framework import serializers
from .models import Produto

#Essa classe de serializers faz um papel muito parecido ao de uma JPA
class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'