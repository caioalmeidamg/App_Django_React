from ..models import Produto

class apiFuncs():

 
    def retornaProdutosEstoques(self):
        produtos_com_estoque = Produto.objects.select_related('estoque')

        for produto in produtos_com_estoque:
            print(f"Produto: {produto.nome}, Estoque: {produto.estoque.nome}")
