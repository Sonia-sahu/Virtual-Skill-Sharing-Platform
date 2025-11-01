from rest_framework import serializers
from .models import Skill
from users.models import User

class SkillSerializer(serializers.ModelSerializer):
    created_by = serializers.ReadOnlyField(source='created_by.username')

    class Meta:
        model = Skill
        fields = ['id', 'title', 'description', 'created_by', 'created_at']
        read_only_fields = ['id', 'created_by', 'created_at']