from rest_framework import routers
from .views import BookmarkViewSet
import api.views as api_views
from django.urls import include, path
from django.conf.urls import url


router = routers.DefaultRouter()
# router.register('users', UserViewSet)
router.register('bookmarks', BookmarkViewSet)

urlpatterns = [
    url(r'^ogp/(?P<pk>\d+)/$', api_views.getOgp),
]

urlpatterns += router.urls