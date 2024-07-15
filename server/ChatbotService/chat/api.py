from django.shortcuts import render
from django.db.models import Q
from ninja import Router
from .schemas import *
from .models import *
from .services import *
from rest_framework.response import Response

# Create your api here.
router = Router()

@router.get("/chatbot_messages", response=list[ChatBotMessageSchema])
def fetch_all_chatbot_messages(request):
    data = ChatBotMessages.objects.all()
    return list(data)

@router.get("/conversations_messages", response=list[ConversationSchema])
def fetch_all_conversations_messages(request):
    data = Conversations.objects.all()
    return list(data)

@router.get("/conversation_contents/{conversation_id}", response=list[ConversationContentSchema])
def get_conversation_contents(request, conversation_id: int):
    contents = ConversationContents.objects.filter(conversation__id=conversation_id)
    return contents

@router.get("/all_conversation_contents", response=list[ConversationContentSchema])
def get_conversation_contents(request):
    data = ConversationContents.objects.all()
    return list(data)

@router.post("/input")
def input_chatbot_messages(request, data: InputMessageSchema):
    input_message = ChatBotMessages(content=data.content, message_type="input", is_response=False)
    input_message.save()
    return ({"message": "Input saved successfully"})

@router.post("/input_search")
def input_internet_search(request, data: InputMessageSchema):
    
    input_message = Conversations(title=data.content, message_type="input")
    input_message.save()
    add_input_content = ConversationContents(conversation=input_message, content_message=data.content)
    add_input_content.save()
    
    response_content = internet_search_tool(data.content)
    
    if(response_content):
        response_message = Conversations(title=data.content, message_type="response")
        response_message.save()
        for response in response_content:
            add_content = ConversationContents(
                conversation=response_message, 
                content_message=response['body'], 
                title=response['title'], 
                link=response['href']
            )
            add_content.save()    

    return ({"message": "Input saved successfully", "response": response_content})