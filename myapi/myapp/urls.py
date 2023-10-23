from django.urls import path
from .views import ProdutoListCreateView, resposta

#urls.py é o arquivo que detecta as rotas da aplicação

#Esse arquivo para rotas serve como uma  espécie de handler da aplicação
urlpatterns = [
    #Esse path aqui serve como rota para um post de Produtos
    path('produtos/', resposta.criar_produto),
    #path('produto/<int:produto_id>/', views.obter_produto, name='obter_produto'),
    path('', ProdutoListCreateView.as_view(), name='produto-list-create'),
]