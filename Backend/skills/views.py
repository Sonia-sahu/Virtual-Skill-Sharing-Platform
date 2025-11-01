from rest_framework import viewsets, permissions
from .models import Skill
from .serializers import SkillSerializer

class SkillViewSet(viewsets.ModelViewSet):
    """
    ViewSet for managing skills.
    Allows authenticated users to create, update, and delete skills.
    Unauthenticated users can only view.
    """
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        # Automatically assign the logged-in user as the creator of the skill
        serializer.save(created_by=self.request.user)