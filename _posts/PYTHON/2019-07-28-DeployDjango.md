---
layout: post
title: Deploy_Django
categories: PYTHON

---


* [참고 링크1]
* [참고 링크2]


* 환경 : python3 nginx 이 깔린 상태

* 프로젝트명 : home/daehan/test/ 디렉토리에 deploy_test

* 퍼블릭 ip 주소 확인 ( 도매인 구매 )

# 프로젝트 설정 

* /test python3 -m venv env
* /test mkdir config
* /test mkdir log 
* /test cd log 
* /test/log touch access.log error.log
* /test/log cd ..
* /test source env/bin/activate
* (env) pip install django gunicorn
* (env) django-admin startproject deploy_test
* (env) sudo nano deploy_test/deploy_test/seeting.py

            ALLOWED_HOSTS = ['*']
            STATIC_ROOT = os.path.join(BASE_DIR, 'static/')

* python manage.py makemigrations 
* python manage.py migrate
* python manage.py collectstatic  ( static 디렉토리 생성 )
* python manage.py runserver  (로컬)


# gunicorn, nginx 설정    ( 이미 gunicorn 있으므로 gunicorn1 로 작성 )

* gunicron 연동
  * gunicorn --bind 0.0.0.0:8000 (or 8001 ~) deploy_test.wsgi:application
  * 다른 ssh 창에서 curl -i http:localhost:8001 로 연결 확인 가능 


  * **gunicorn1**.service   ( ln -s /etc/systemd/system/gunicorn1.service /home/daehan/test/config/gunicorn1.service )
        
        [Unit]
        Description=gunicorn daemon
        After=network.target

        [Service]
        User=daehan   # 커널창 사용자
        Group=www-data
        WorkingDirectory=/home/daehan/test/deploy_test  # 프로젝트 디렉토리 (현재 내부에 deploy_test manage.py static db.sqlite3 있음)
        ExecStart=/home/daehan/test/env/bin/gunicorn --workers 3 --bind unix:/home/daehan/test/config/deploy_test.sock deploy_test.wsgi:application

        [Install]
        WantedBy=multi-user.target


  * sudo systemctl status **gunicorn1**    
  * sudo systemctl daemon-reload 
  * sudo systemctl restart **gunicorn1**
  * sudo systemctl enable **gunicorn1**   -> .sock 생성 =  **Created symlink from /etc/systemd/system/multi-user.target.wants/gunicorn1.service to /etc/systemd/system/gunicorn1.service.**

* nginx
  * deploy_test.conf  ( ln -s /etc/nginx/sites-enabled/deploy_test.conf /home/daehan/test/config/deploy_test.conf)


        server {
                # the port your site will be served on
                listen 80;

                # the domain name it will serve for
                server_name     test.patenttrends.ga; # 여기에 도메인 주소를 적는다
                charset         utf-8;

                access_log      /home/daehan/test/log/access.log;
                error_log       /home/daehan/test/log/error.log;

                location /static/ { # STATIC_URL
                    alias /home/daehan/test/deploy_test/static/; # STATIC_ROOT
                    expires 30d;
                }

                location / {
                    include proxy_params;
                    proxy_pass http://unix:/home/daehan/test/config/deploy_test.sock;
                }
        }


  * sudo nginx -t 
  * sudo systemctl restart nginx
  * sudo systemctl enable nginx

- 배포 성공!


* 실수 1. ip 주소 - nginx conf 아이피 주소는 **공인 IP 주소** 로 (서버 접속용 IP와 다름)
* Nginx - gunicorn / sock 파일 필요 



[참고 링크1]: https://aweekj.github.io/django-nginx-gunicorn-ubuntu/
[참고 링크2]: http://devopspy.com/python/deploy-django-with-nginx-gunicorn-postgresql-virtualenv/
