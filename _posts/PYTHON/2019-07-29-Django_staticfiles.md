---
layout: post
title: Django_staticfiles
categories: PYTHON

---

1. project/settings.py

        STATIC_URL = '/static/'
        STATIC_ROOT = os.path.join(BASE_DIR, 'static/')
        STATICFILES_DIRS = [os.path.join(BASE_DIR, '[추가된 app 이름', 'static')]  
        
        * 앱이 복수개일 시 
        STATICFILES_DIRS = [os.path.join(BASE_DIR, '[app1', 'static'), os.path.join(BASE_DIR, '[app2', 'static'), os.path.join(BASE_DIR, '[app3', 'static')] 



2. app1/static/main css, img, js 저장


3. app1/templates/xx.html

          {% load static %}   # 해당 html 에서 가장 위에 있는 링크보다 위에
          <link rel="stylesheet" type ="text/css" href="{% static 'main/***.css' %}">
