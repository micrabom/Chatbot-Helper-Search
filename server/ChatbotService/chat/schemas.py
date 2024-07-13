from ninja import ModelSchema
from .models import *


class ChatBotMessageSchema(ModelSchema):

    class Meta:
        model = ChatBotMessages
        fields = '__all__'
