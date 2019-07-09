from .models import Bookmark
from rest_framework import serializers


class BookmarkSerializer(serializers.ModelSerializer):

    class Meta:
        model = Bookmark
        fields = ('id', 'url','title', 'img_url', 'description', 'note', 'created_at', 'updated_at', 'user')
