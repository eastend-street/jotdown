import os
import django_filters
from rest_framework import viewsets, filters
from rest_framework.response import Response
from .lib.opengraph import opengraph
from .models import User, Bookmark
from .serializers import UserSerializer, BookmarkSerializer


# 1つのブックマークのみ受け取る
def getOgpData(url):
    ogp = opengraph.OpenGraph(url=url)
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
        # for bookmark in data:
        #     bookmark['image'] = os.environ.get('HOST') + bookmark['image']
        return Response(status=200, data=data)

    def create(self, validated_data):
        print('reached create method!')
        url = self.request.data['url']
        ogp_data = getOgpData(url)
        # OGPが取得できなかった場合の通過処理
        obj = Bookmark.objects.create(
            url=url,
            title=ogp_data.title,
            description=ogp_data.description,
            memo=self.request.data['memo'],
            img_url=ogp_data.image,
            user=User.objects.get(id=1)
        )
        return Response(status=204)
