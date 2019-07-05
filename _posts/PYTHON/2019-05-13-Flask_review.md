---
layout: post
title: Flask_review
categories: PYTHON

---


1. Subdomain 설정
 - NAME : ENGLISH, TYPE: A, TTL: 300, TARGET: IP address
 - NAME : ENGLISH, TYPE: CNAME, TTL: 300, TARGET: foxlee-p.ga
 
 
2. 프로젝트 파일 만들기
 - 1. run.py
 - **파일 위치 확인 필요!** run.py 에서 바로 templates에 있는 html을 불러오려면 run.py와 같은 디렉토리에 templates가 위치하고 그안이 html 저장
 - run.py -> 모듈로 ex__init__.py 에서 가져올때는 init.py가 있는 디렉토리에 templates 있어야함 결론: render 하는 py 파일의 디렉토리에 templates 있어야함 
 
 
 3. 배포 (라즈베리파이로 프로젝트 옮긴 후)
 - port 열기 sudo nano ufw allow **5001** (run.py -> app.run(debug=True, host='0.0.0.0', **port:5001**)
 - 가상환경 구축  // run.py를 포함하는 디렉토리 english에 가상환경 구축 = english 디렉토리 안에서 sudo virtualenv **env**
 - 가상환경 실행 // source bin/activate
 - nginx - sudo nano /etc/nginx/engish  -> sever_name / location / proxy 수정
 - gunicorn 설치 - 가상환경안 - sudo pip install gunicorn -> **gunicorn --bind 0.0.0.0:5001 run:app**  5001 대신 다른 포트번호 / 오타주의
 - supervisor - sudo nano /etc/supervisor/conf.d/english.conf -> 디렉토리, 커맨드, 로그정보파일 위치 수정 후 로그정보 파일 생성
 - cd /var/log -> sudo mkdir english -> cd english -> sudo touch english.err.log, sudo touch english.out.log
 - 모든 설정 끝 -> sudo systemctl restart nginx - > sudo supervisorctl **reload** 먼저 하고 안되면 -> // sudo supervisorctl restart all   
 
* 가상환경에 python3 설치 실패시 virtualenv -p python3 (envname)
* sudo **pip** install gunicorn flask - 설치 /// pip3 install ~ 실패 pip3 가 **아닌 pip** 

---
SSL 인증서 발급
1. sudo certbot --nginx  -> nignx 에 돌아가는 사이트 발급
2. 원하는 URL 선택
3. Redirect
4. etc/nginx/sites-enabled/english 폴더

- - -
   * listen 443 ssl; # managed by Certbot
   * ssl_certificate /etc/letsencrypt/live/english.foxlee-p.ga/fullchain.pem; # managed by Certbot
   * ssl_certificate_key /etc/letsencrypt/live/english.foxlee-p.ga/privkey.pem; # managed by Certbot
   * include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
   * ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

> Redirect
*	server {
	    if ($host = english.foxlee-p.ga) {
            return 301 https://$host$request_uri;
        } # managed by Certbot

	server_name english.foxlee-p.ga;
    listen 80;
    return 404; # managed by Certbot
---
