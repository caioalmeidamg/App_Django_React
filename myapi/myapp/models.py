from django.db import models

# Create your models here.



class Estoque(models.Model):
    ID = models.AutoField(primary_key=True, auto_created=True, editable=False)
    nome = models.CharField(max_length=200, null=False)
    
    def __str__(self):
        return self.nome  
    
#por padrão o django defini um id para cada modelo especificado
class Produto(models.Model):
    ID = models.AutoField(primary_key=True, auto_created=True, editable=False)
    nome = models.CharField(max_length=100, null=False)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    ok = models.TextField(null=False)
    estoque = models.OneToOneField(Estoque, null=False, on_delete=models.PROTECT )

    #representa a instancia de uma classe em string - ou seja 
    #a sobrescrita desse método serve como uma boa maneira para trabalhar com ele
    def __str__(self):
        return self.nome
        