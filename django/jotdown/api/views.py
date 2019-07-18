import os
import json
import django_filters
from rest_framework import viewsets, filters
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated, AllowAny
from .lib.opengraph import opengraph
from .models import Bookmark
from .serializers import BookmarkSerializer
from oauth2_provider.contrib.rest_framework import OAuth2Authentication
from rest_framework_social_oauth2.authentication import SocialAuthentication


def getOgpData(url):
    # 1つのブックマークのみ受け取る
    ogp = opengraph.OpenGraph(url=url)
    return ogp


class BookmarkViewSet(viewsets.ViewSet):
    queryset = Bookmark.objects.all()
    serializer_class = BookmarkSerializer
    filter_fields = ('user',)
    authentication_classes = [OAuth2Authentication, SocialAuthentication]

    @permission_classes((IsAuthenticated, ))
    def list(self, request):
        data = BookmarkSerializer(Bookmark.objects.filter(
            user=request.user), many=True).data
        return Response(status=200, data=data)

    @permission_classes((IsAuthenticated, ))
    def create(self, validated_data):
        bookmarks = self.request.data
        for bookmark in bookmarks.values():
            note = bookmark.get('note', '')
            url = bookmark.get('url', '')
            ogp_data = {}
            try:
                ogp_data = getOgpData(url)
            except:
                print('Could not get OGP')
                obj = Bookmark.objects.create(
                    url=url,
                    title=ogp_data.get('title', url),
                    description=ogp_data.get('description', ''),
                    note=note,
                    img_url=ogp_data.get('image', ''),
                    user=self.request.user
                )
            else:
                obj = Bookmark.objects.create(
                    url=url,
                    title=ogp_data.get('title', url),
                    description=ogp_data.get('description', ''),
                    note=note,
                    img_url=ogp_data.get('image', ''),
                    user=self.request.user
                )
        return Response(status=204)

    @permission_classes((IsAuthenticated, ))
    def retrieve(self, request, pk=None):
        data = BookmarkSerializer(
            Bookmark.objects.get(id=pk, user=request.user)).data
        return Response(status=200, data=data)

    @permission_classes((IsAuthenticated, ))
    def update(self, request, pk):
        bookmark = Bookmark.objects.get(id=pk, user=request.user)
        bookmark.note = request.data.get("note", '')
        bookmark.save()
        # data = BookmarkSerializer(bookmark).data
        return Response(status=200)


@authentication_classes([AllowAny, ])
@permission_classes([AllowAny, ])
@api_view(['POST'])
def getBookmarkForLocal(request, **kwargs):
    id = kwargs.get('pk')
    note = request.data.get('note', '')
    url = request.data.get('url', '')
    ogp_data = {}
    try:
        ogp_data = getOgpData(url)
    except:
        print('Could not get OGP')
        bookmark = Bookmark(
            id=id,
            url=url,
            title=ogp_data.get('title', url),
            description=ogp_data.get('description', ''),
            note=note,
            img_url=ogp_data.get('image', ''),
        )
    else:
        bookmark = Bookmark(
            id=id,
            url=url,
            title=ogp_data.get('title', url),
            description=ogp_data.get('description', ''),
            note=note,
            img_url=ogp_data.get('image', ''),
        )

    data = BookmarkSerializer(bookmark).data
    return Response(status=200, data=data)
