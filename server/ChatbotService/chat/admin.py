from django.contrib import admin
from .models import ChatBotMessages

class ChatBotMessagesAdmin(admin.ModelAdmin):
    list_display = ('content', 'message_type', 'is_response', 'is_system_message', 'is_active', 'timestamp')
    fields = ('content', 'message_type', 'is_response', 'is_system_message', 'is_active')
    list_filter = ('message_type', 'is_response', 'is_system_message', 'is_active', 'timestamp')

admin.site.register(ChatBotMessages, ChatBotMessagesAdmin)
