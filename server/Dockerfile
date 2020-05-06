FROM python:3.6

ENV product_name="jotdown-server"
ENV product_version="1"

RUN mkdir /${product_name}/
COPY /jotdown /${product_name}/django
WORKDIR /${product_name}/django

RUN pip install --upgrade -q \
    pip \
    django==2.2.4 \
    django-debug-toolbar \
    djangorestframework \
    django-filter \
    django-cors-headers \
    beautifulsoup4 \
    django-rest-framework-social-oauth2 \
    gunicorn \
    gevent \
    whitenoise \
    django-heroku

# EXPOSE 8000

# CMD ["bash"]
# CMD ["gunicorn","-c","gunicorn_conf.py","jotdown.wsgi:application"]
# CMD ["gunicorn","-c","gunicorn_conf.py","jotdown.wsgi"]
CMD gunicorn --bind 0.0.0.0:$PORT jotdown.wsgi:application --log-level debug