FROM python:3.6

ENV product_name="memomemo"
ENV product_version="0.1"

RUN mkdir /${product_name}/
# COPY ~/projects/memomemo/django /${product_name}/django
WORKDIR /${product_name}/django

RUN pip install --upgrade -q \
pip \
django==2.1.7 \
django-debug-toolbar \
djangorestframework \
django-filter

EXPOSE 8000

CMD ["bash"]
# CMD ["gunicorn","-c","gunicorn_conf.py","main.wsgi:application"]