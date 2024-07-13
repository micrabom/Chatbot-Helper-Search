from django.shortcuts import render
from django.db.models import Q
from ninja import Router
from .schemas import *
from .models import *
from rest_framework.response import Response

# Create your api here.
router = Router()

@router.get("/chatbot_messages", response=list[ChatBotMessageSchema])
def fetch_all_chatbot_messages(request):
    data = ChatBotMessages.objects.all()
    return data
