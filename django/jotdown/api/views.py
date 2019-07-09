import os
import django_filters
from rest_framework import viewsets, filters
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from .lib.opengraph import opengraph
from .models import Bookmark
from .serializers import BookmarkSerializer

# 1つのブックマークのみ受け取る


def getOgpData(url):
    ogp = opengraph.OpenGraph(url=url)
    return ogp


# class UserViewSet(viewsets.ModelViewSet):
#     permission_classes = (IsAuthenticated,)
#     # queryset = User.objects.all()
#     serializer_class = UserSerializer


class BookmarkViewSet(viewsets.ViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    filter_fields = ('user',)

    @permission_classes((IsAuthenticated, ))
    def list(self, request):
        data = BookmarkSerializer(Bookmark.objects.all(), many=True).data
        # for bookmark in data:
        #     bookmark['image'] = os.environ.get('HOST') + bookmark['image']
        return Response(status=200, data=data)

    @permission_classes((IsAuthenticated, ))
    def create(self, validated_data):
        # check there is note or not
        print('--------------------------------------')
        print(self.request.user)
        print('--------------------------------------')
        try:
            note = self.request.data['note']
        except KeyError:
            note = ""
        url = self.request.data['url']

        try:
            ogp_data = getOgpData(url)
        except:
            print('Could not get OGP')
            obj = Bookmark.objects.create(
                url=url,
                title=url,
                note=note,
                user=self.request.user
            )
        else:
            obj = Bookmark.objects.create(
                url=url,
                title=ogp_data.title,
                description=ogp_data.description,
                note=note,
                img_url=ogp_data.image,
                user=self.request.user
            )
        return Response(status=204)

    @permission_classes((IsAuthenticated, ))
    def retrieve(self, request, pk=None):
        data = BookmarkSerializer(Bookmark.objects.get(id=pk)).data
        return Response(status=200, data=data)


    @permission_classes((IsAuthenticated, ))
    def update(self, request, pk):
        bookmark = Bookmark.objects.get(id=pk)
        bookmark.note = request.data.get("note")
        bookmark.save()
        # data = BookmarkSerializer(bookmark).data
        return Response(status=200)
