import django_filters
import opengraph_py3
from rest_framework import viewsets, filters
from rest_framework.response import Response
from .models import User, Bookmark
from .serializers import UserSerializer, BookmarkSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class BookmarkViewSet(viewsets.ModelViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    filter_fields = ('user',)

    def list(self, request):
        data = BookmarkSerializer(Bookmark.objects.all(), many=True).data
        # get OGP data
        for bookmark in data:
            ogp = opengraph_py3.OpenGraph(url=bookmark['url'])
            bookmark['ogp'] = ogp
        return Response(status=200, data=data)

    def getOgpData(self, request):
        data = BookmarkSerializer(Bookmark.objects.all(), many=True).data
        for bookmark in data:
            ogp = opengraph_py3.OpenGraph(url=bookmark['url'])
            bookmark['ogp'] = ogp
        return Response(status=200, data=data)
