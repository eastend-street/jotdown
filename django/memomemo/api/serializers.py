from .models import User, Bookmark
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'mail')


class BookmarkSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Bookmark
        fields = ('id', 'url','title', 'img_url', 'description', 'memo', 'created_at', 'updated_at', 'user')
