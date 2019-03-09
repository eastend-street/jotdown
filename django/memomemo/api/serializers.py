from .models import User, Bookmark
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'mail')


class BookmarkSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only= True)
    class Meta:
        model = Bookmark
        fields = ('url', 'memo', 'created_at', 'updated_at', 'user')
