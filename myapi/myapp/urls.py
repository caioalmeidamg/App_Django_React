from django.urls import path
from .views import ProdutoListCreateView, criar_produto

#urls.py é o arquivo que detecta as rotas da aplicação

#Esse arquivo para rotas serve como uma  espécie de handler da aplicação
urlpatterns = [
    #Esse path aqui serve como rota para um post de Produtos
    path('produtos/', criar_produto),
    path('produtos/', ProdutoListCreateView.as_view(), name='produto-list-create'),
]