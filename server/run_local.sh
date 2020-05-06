docker run -it -p 8000:8000 \
    --env-file `pwd`/.env_local.sh \
    -v ~/projects/jotdown/server/jotdown:/jotdown/server \
    jotdown-server:latest \
    python manage.py runserver 0.0.0.0:8000