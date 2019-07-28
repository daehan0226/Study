---
layout: post
title: Deploy_Django
categories: PYTHON

---


[참고 링크1]
[참고 링크2]


* 프로젝트명 : deploy_test

* 퍼블릭 ip 주소 확인 ( 도매인 구매 )
* 파이썬3, 가상환경, nginx, gunicorn 설치 sudo apt-get install python3-dev python3-pip python3-venv nginx 
* 가상환경 - 장고 프로젝트 생성 
* deploy_test/setting.pyy
* ALLOWED_HOSTS = [ ' * ' ]


* config(deploy_test.soket, deploy_test.conf(nginx), gunicorn.service ) log(access, error) 디렉토리 생성  
* 생성후 /etc/nginx/sites-enable/   , /etc/systemd/sytem/ 각각 이동 
*

* deploy_test.conf


* gunicorn.service

 

* sudo nginx -t 
* sudo systemctl start nginx

* 
*
*

* 실수 1. ip 주소 - nginx conf 아이피 주소는 **공인 IP 주소** 로 (서버 접속용 IP와 다름)
* Nginx - gunicorn / sock 파일 필요 
*








[참고 링크1]: https://aweekj.github.io/django-nginx-gunicorn-ubuntu/
[참고 링크2]: http://devopspy.com/python/deploy-django-with-nginx-gunicorn-postgresql-virtualenv/
