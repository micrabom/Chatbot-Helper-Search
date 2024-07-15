# Generated by Django 5.0.7 on 2024-07-15 02:19

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0003_rename_content_contents_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='contents',
            name='content_message',
        ),
        migrations.CreateModel(
            name='ConversationContents',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content_message', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('conversation', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='chat.conversations')),
            ],
            options={
                'db_table': 'conversation_contents',
                'ordering': ['created_at'],
            },
        ),
    ]
