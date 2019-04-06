docker run -it -p 8000:8000 \
    --env-file `pwd`/.env_local.sh \
    -v ~/projects/memomemo/django/memomemo:/memomemo/django \
    django:latest \
    python manage.py runserver 0.0.0.0:8000