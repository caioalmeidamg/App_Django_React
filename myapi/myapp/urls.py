from django.urls import path
from .views import ProdutoListCreateView

#urls.py é o arquivo que detecta as rotas da aplicação

urlpatterns = [
    path('produtos/', ProdutoListCreateView.as_view(), name='produto-list-create'),
]