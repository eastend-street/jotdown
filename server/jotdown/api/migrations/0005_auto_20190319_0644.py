# Generated by Django 2.1.7 on 2019-03-19 06:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_bookmark_title'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookmark',
            name='title',
            field=models.CharField(default='', max_length=300),
        ),
    ]
