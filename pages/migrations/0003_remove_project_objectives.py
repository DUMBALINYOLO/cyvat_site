# Generated by Django 3.1 on 2020-09-17 19:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pages', '0002_auto_20200909_1750'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='project',
            name='objectives',
        ),
    ]