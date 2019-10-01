---
layout: post
title: django_settings
categories:
- PYTHON
---



* python manage.py runserver --setting=dh_django_app.settings.dev(선택)  ###




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
