from django.db import models

# Create your models here.
from django.db import models
from users.models import User

class Skill(models.Model):
    """
    Represents a skill that a user can offer to teach or share.
    """
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_skills')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title