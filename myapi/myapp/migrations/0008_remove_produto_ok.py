# Generated by Django 4.2.8 on 2024-01-05 15:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0007_alter_produto_estoque'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='produto',
            name='ok',
        ),
    ]