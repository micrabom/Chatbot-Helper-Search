from django.db import models

MESSAGE_TYPE_OPTIONS = [
    ('input', 'Input'),
    ('response', 'Response'),
    ('system', 'System'),
]

class ChatBotMessages(models.Model):
    content = models.TextField(blank=False) 
    message_type = models.CharField(choices=MESSAGE_TYPE_OPTIONS, max_length=100, blank=False) 
    is_response = models.BooleanField(default=False)
    is_system_message = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "chat_messages"
        indexes = [
            models.Index(fields=['timestamp']),
            models.Index(fields=['is_active']),
        ]
        ordering = ['timestamp']

    def __str__(self):
        return f"ChatBotMessage ({self.message_type}) at {self.timestamp}"
