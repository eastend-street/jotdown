import django_filters
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
        print('届いた！')
        data = BookmarkSerializer(Bookmark.objects.all(), many=True).data
        return Response(status=200, data=data)
