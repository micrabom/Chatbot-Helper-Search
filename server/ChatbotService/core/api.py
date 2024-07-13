from chat.api import router as chat_router
from rest_framework.response import Response
from ninja import NinjaAPI


class BaseResponse(Response):
    def __init__(self, data=None, message=None, **kwargs):
        response_data = {"message": message, "data": data}
        super().__init__(response_data, **kwargs)


api = NinjaAPI()
api.add_router("/chatbot", chat_router)

