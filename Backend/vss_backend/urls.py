from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # API routes
    path('api/users/', include('users.urls')),
    path('api/skills/', include('skills.urls')),
    path('api/feedbacks/', include('feedbacks.urls')),
    path('api/messages/', include('messages.urls')),
]