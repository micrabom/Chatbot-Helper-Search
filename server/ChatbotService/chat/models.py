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


class Conversations(models.Model):
    title = models.CharField(max_length=255, blank=False)
    message_type = models.CharField(choices=MESSAGE_TYPE_OPTIONS, max_length=100, blank=False, default="input") 
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = "conversations"
        ordering = ['created_at']

    def __str__(self):
        return f"Conversation ({self.title})"

class Contents(models.Model):
    conversation = models.ForeignKey(Conversations, related_name='contents', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "contents"
        ordering = ['created_at']

    def __str__(self):
        return f"Content in Conversation ({self.conversation.title})"
class ConversationContents(models.Model):
    conversation = models.ForeignKey(Conversations, on_delete=models.CASCADE)
    content_message = models.TextField(blank=False)
    title = models.CharField(max_length=255, blank=False, default="")
    link = models.CharField(max_length=500, blank=False, default="") 
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = "conversation_contents"
        ordering = ['created_at']

    def __str__(self):
        return f"Content: ({self.title})"