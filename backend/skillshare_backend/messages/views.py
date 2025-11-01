from rest_framework import generics, permissions
from .models import Message
from .serializers import MessageSerializer

class MessageListView(generics.ListAPIView):
    serializer_class = MessageSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Message.objects.filter(receiver=user).order_by('-timestamp')