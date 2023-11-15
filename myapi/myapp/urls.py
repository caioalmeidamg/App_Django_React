from django.urls import path
from .views import respostaProduto, respostaEstoque
#urls.py é o arquivo que detecta as rotas da aplicação

#Esse arquivo para rotas serve como uma  espécie de handler da aplicação
urlpatterns = [
     
    #Esse path aqui serve como rota para um post de Produtos

    path('produtos/', respostaProduto.as_view()),
    path('produtos/<int:id>', respostaProduto.as_view()),   
    path('estoques/',respostaEstoque.as_view()),
    path('estoques/<int:id>',respostaEstoque.as_view())

    #path('produto/<int:produto_id>/', views.obter_produto, name='obter_produto'),
    
]