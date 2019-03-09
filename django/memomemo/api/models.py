from django.db import models


class User(models.Model):
    name = models.CharField(max_length=56)
    mail = models.EmailField()

    def __repr__(self):
        # 主キーとnameを表示させて見やすくする
        # ex) 1: Alice
        return "{}: {}".format(self.pk, self.name)

    __str__ = __repr__  # __str__にも同じ関数を適用


class Bookmark(models.Model):
    url = models.CharField(max_length=300)
    memo = models.TextField()
    created_at = models.DateTimeField(
        auto_now_add=True,
        blank=True,
    )
    updated_at = models.DateTimeField(
        auto_now=True,
        blank=True,
    )
    user = models.ForeignKey(
        User,
        related_name='bookmarks',
        on_delete=models.CASCADE,
        default=None
    )
