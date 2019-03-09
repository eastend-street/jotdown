from rest_framework import routers
from .views import UserViewSet, BookmarkViewSet


router = routers.DefaultRouter()
router.register('users', UserViewSet)
router.register('bookmarks', BookmarkViewSet)
