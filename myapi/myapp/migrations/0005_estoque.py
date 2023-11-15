# Generated by Django 4.2.6 on 2023-11-01 13:15

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0004_alter_produto_id_alter_produto_nome'),
    ]

    operations = [
        migrations.CreateModel(
            name='Estoque',
            fields=[
                ('ID', models.AutoField(auto_created=True, editable=False, primary_key=True, serialize=False)),
                ('nome', models.CharField(max_length=200)),
                ('ID_Produto', models.OneToOneField(on_delete=django.db.models.deletion.PROTECT, to='myapp.produto')),
            ],
        ),
    ]