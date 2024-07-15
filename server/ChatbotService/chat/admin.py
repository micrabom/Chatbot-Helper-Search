from django.contrib import admin
from .models import *

class ChatBotMessagesAdmin(admin.ModelAdmin):
    list_display = ('content', 'message_type', 'is_response', 'is_system_message', 'is_active', 'timestamp')
    fields = ('content', 'message_type', 'is_response', 'is_system_message', 'is_active')
    list_filter = ('message_type', 'is_response', 'is_system_message', 'is_active', 'timestamp')

class ConversationsAdmin(admin.ModelAdmin):
    list_display = ('title', 'message_type', 'created_at')
    fields = ('title', 'message_type')
    list_filter = ('message_type', 'created_at')
    
class ConversationContentsAdmin(admin.ModelAdmin):
    list_display = ('conversation', 'content_message', 'created_at')
    fields = ('conversation', 'message')
    list_filter = ('conversation', 'content_message', 'created_at')

admin.site.register(ChatBotMessages, ChatBotMessagesAdmin)
admin.site.register(Conversations, ConversationsAdmin)
admin.site.register(ConversationContents, ConversationContentsAdmin)

