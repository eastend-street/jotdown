# Generated by Django 2.1.7 on 2019-06-23 07:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0017_auto_20190425_0203'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bookmark',
            old_name='memo',
            new_name='note',
        ),
    ]