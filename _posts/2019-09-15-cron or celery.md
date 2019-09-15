---
layout: post
title: cron or celery
categories:
- blog
---

https://blog.miguelgrinberg.com/post/using-celery-with-flask
https://blog.miguelgrinberg.com/post/celery-and-the-flask-application-factory-pattern
https://stackoverflow.com/questions/16232572/distributed-task-queues-ex-celery-vs-crontab-scripts
https://github.com/leafney/flask_celery_demo/blob/master/jobs/celeryconfig.py

* celery 설치
* pip install celery

* redis 설치, 실행
* sudo apt-get update
* sudo apt-get upgrade
* sudo apt-get install redis-server
* screen -S redis 
* screen/ source bin/activate
* screen/ celery worker -A celery_worker.celery --loglevel=info


* Setting




* celery_worker.py // 이 디렉토리에서 screen/ celery worker -A celery_worker.celery --loglevel=info


        import os
        from shopping_website import celery, create_app

        app = create_app()
        app.app_context().push()



* shopping_website/__init__.py


        from celery import Celery
        celery = Celery(__name__, broker=Config.CELERY_BROKER_URL)     # Config 파일에 아래 환경설정 
        
        def create_app():
            app = Flask(__name__)
            app.config['CELERY_BROKER_URL'] = 'redis://localhost:6379/0'
            app.config['CELERY_RESULT_BACKEND'] = 'redis://localhost:6379/0'   // 
            celery.conf.update(app.config)

* main/mail.py

        @celery.task
        def send_reset_email(email):
            msg = Message('Password reset request', sender='noreply@foxlee-shop.com', recipients=[email])
            msg.body = f''' To reset your pass, visit the following link:
        http://127.0.0.1:5000/reset_pass/
        If you did not make this request then simply ignore this email and no changes will be made.
        '''
            mail.send(msg)
            
* main/routes.py

        def reset()
            #send_reset_email.delay(email)
            send_reset_email.apply_async(args=[email], countdown=60)
