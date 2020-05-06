from django.db import models
from django.contrib.auth.models import User


class Bookmark(models.Model):
    url = models.CharField(max_length=300)
    title = models.CharField(max_length=300, blank=True)
    description = models.CharField(max_length=500, blank=True)
    # image = models.ImageField(upload_to='bookmark-images/', blank=True, null=True)
    img_url = models.CharField(max_length=300, blank=True)
    note = models.TextField(blank=True)
    created_at = models.DateTimeField(
        auto_now_add=True,
        blank=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        blank=True,
    )
    user = models.ForeignKey(User, on_delete=models.CASCADE)
