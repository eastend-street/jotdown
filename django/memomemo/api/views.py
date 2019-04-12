import os
import django_filters
import opengraph_py3
from rest_framework import viewsets, filters
from rest_framework.response import Response
from .models import User, Bookmark
from .serializers import UserSerializer, BookmarkSerializer


# 1つのブックマークのみ受け取る
def getOgpData(bookmark):
    ogp = opengraph_py3.OpenGraph(url=bookmark['url'])
    return ogp


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    filter_fields = ('user',)

    def list(self, request):
        data = BookmarkSerializer(Bookmark.objects.all(), many=True).data
        for bookmark in data:
            bookmark['image'] = os.environ.get('HOST') + bookmark['image']
        return Response(status=200, data=data)

    def create(self, validated_data):
        print('ccccreated!')
        return Response(status=204)
