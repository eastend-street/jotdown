docker run -it -p 8000:8000 \
    -v ~/projects/memomemo/django/memomemo:/memomemo/django \
    django:latest \
    python manage.py runserver 0.0.0.0:8000