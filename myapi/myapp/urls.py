from django.urls import path
from .views import  resposta

#urls.py é o arquivo que detecta as rotas da aplicação

#Esse arquivo para rotas serve como uma  espécie de handler da aplicação
urlpatterns = [
     
    #Esse path aqui serve como rota para um post de Produtos
    path('produtos', resposta.as_view()),
    #path('produto/<int:produto_id>/', views.obter_produto, name='obter_produto'),
    
]