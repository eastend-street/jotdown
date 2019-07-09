from django.contrib import admin

from .models import Bookmark


# @admin.register(User)
# class UserAdmin(admin.ModelAdmin):
#     pass


@admin.register(Bookmark)
class Bookmark(admin.ModelAdmin):
    pass
