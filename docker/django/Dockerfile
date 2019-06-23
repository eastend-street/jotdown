FROM python:3.6

ENV product_name="jotdown"
ENV product_version="0.1"

RUN mkdir /${product_name}/
# COPY ~/projects/jotdown/django /${product_name}/django
WORKDIR /${product_name}/django

RUN pip install --upgrade -q \
pip \
django==2.1.7 \
django-debug-toolbar \
djangorestframework \
django-filter \
django-cors-headers \
beautifulsoup4

EXPOSE 8000

CMD ["bash"]
# CMD ["gunicorn","-c","gunicorn_conf.py","main.wsgi:application"]