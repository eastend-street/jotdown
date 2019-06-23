from rest_framework import routers
from .views import UserViewSet, BookmarkViewSet
from django.conf.urls import url


router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('bookmarks', BookmarkViewSet)

