---
layout: post
title: django_settings
categories:
- PYTHON
---



* python manage.py runserver --setting=dh_django_app.settings.dev(선택)  ###



* manage.py


        #!/usr/bin/env python
        """Django's command-line utility for administrative tasks."""
        import os
        import sys


        def main():
            os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'dh_django_app.settings.default')   # 실행에서 --setting= 의 default
            try:
                from django.core.management import execute_from_command_line
            except ImportError as exc:
                raise ImportError(
                    "Couldn't import Django. Are you sure it's installed and "
                    "available on your PYTHONPATH environment variable? Did you "
                    "forget to activate a virtual environment?"
                ) from exc
            execute_from_command_line(sys.argv)


        if __name__ == '__main__':
            main()



        dh_djnago_app
        │  db.sqlite3
        │  manage.py
        ├─blog
        │  │  admin.py
        │  │  apps.py
        │  │  models.py
        │  │  tests.py
        │  │  views.py
        │  │  __init__.py
        │  │
        │  └─migrations
        │
        └─dh_django_app
            │  db.sqlite3
            │  urls.py
            │  wsgi.py
            │  __init__.py
            │
            ├─settings                ### setting files
               │  defaults.py
               │  dev.py
               │  production.py
               │  settings.py
               │  __init__.py
               │
               └─__pycache__
                      defaults.cpython-37.pyc
                      dev.cpython-37.pyc
                      production.cpython-37.pyc
                      __init__.cpython-37.pyc

            
            
d
