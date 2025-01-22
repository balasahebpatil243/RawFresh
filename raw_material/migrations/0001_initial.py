# Generated by Django 3.0.5 on 2021-05-08 14:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AdminMaster',
            fields=[
                ('ad_id', models.AutoField(primary_key=True, serialize=False, unique=True)),
                ('ad_name', models.CharField(max_length=100)),
                ('ad_mobile', models.CharField(max_length=100)),
                ('ad_email', models.CharField(max_length=100)),
                ('ad_password', models.CharField(max_length=100)),
                ('ad_role', models.CharField(max_length=100)),
                ('ad_status', models.CharField(max_length=100)),
                ('ad_created_by', models.CharField(max_length=100)),
            ],
        ),
    ]
