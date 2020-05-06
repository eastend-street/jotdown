import os
loglevel = "debug"
# bind = "0.0.0.0:8000"
timeout = 60
workers = 1
worker_class = "gevent"
reload = os.environ.get("DEBUG", False)
proxy_protocol = True