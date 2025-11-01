
# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    # Additional fields
    bio = models.TextField(blank=True, null=True)
    profile_picture = models.ImageField(upload_to='profile_pics/', blank=True, null=True)
    expertise = models.CharField(max_length=255, blank=True, null=True)
    is_mentor = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)  # For admin panel access

    def __str__(self):
        return self.username


class UserSettings(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='settings')
    receive_notifications = models.BooleanField(default=True)
    privacy_public_profile = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.username}'s Settings"