from ninja import ModelSchema
from .models import *


class ChatBotMessageSchema(ModelSchema):

    class Meta:
        model = ChatBotMessages
        fields = '__all__'
        
class InputMessageSchema(ModelSchema):
    class Meta:
        model = ChatBotMessages
        fields = ['content'] 
        
        
class ConversationSchema(ModelSchema):
    class Meta:
        model = Conversations
        fields = '__all__'

class ConversationContentSchema(ModelSchema):
    class Meta:
        model = ConversationContents
        fields = '__all__'
