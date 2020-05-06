from django.contrib import admin
from .models import Bookmark

@admin.register(Bookmark)
class Bookmark(admin.ModelAdmin):
    pass
