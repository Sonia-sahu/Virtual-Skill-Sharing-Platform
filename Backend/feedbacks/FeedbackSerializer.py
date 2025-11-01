from rest_framework import serializers
from .models import Feedback
from skills.models import Skill

class FeedbackSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')
    skill = serializers.PrimaryKeyRelatedField(queryset=Skill.objects.all())

    class Meta:
        model = Feedback
        fields = ['id', 'user', 'skill', 'rating', 'comment', 'created_at']
        read_only_fields = ['id', 'created_at']