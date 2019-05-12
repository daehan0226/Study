---
layout: post
title: Subdomain
categories:
- blog
---
[set_port]

> #환경설정
1. virtualenv   
 다른 app 이 설치된 디렉토리에 가상환경 설정 - req.text , db 설정
2. nginx 
 서버 설정 (server_name, location, proxy)
3. gunicorn     
 포트 설정 gunicorn --bind 0.0.0.0:5000 run:app   ( 새로운 프로젝트의 앱 이름 run, 포트 5000에 올때 gunicorn 이 이 앱을 향함)
 포트 5000 일때 -> sudo ufw allow 5000 외부에서 접근 가능하도록 설정
4.. supervisor   
 서버가 켜져있으면 python run.py or flask run 같이 실행하지 않아도 자동으로 켜짐(단, 라즈베리파이가 전원이 나갔다가 다시 켜지면 시스템 다시 작동시켜야함 -> sudo systemctl start nginx, 안되면 sudo systemctl stop apache2 후 다시. (아파치가 실행중일수 있음)

> 1st App 
 - **/etc/nginx/sites-enabled/flaskblog
 server {
        server_name www.foxlee-p.ga;

        location /static {
                alias /home/pi/fdaehan/flaskblog/static;
        }

        location / {
                proxy_pass http://localhost:8000;
                include /etc/nginx/proxy_params;
                proxy_redirect off;
        }
 server {
	listen 80;
	server_name 121.169.130.211;
	
	location /static {
		alias /home/pi/fdaehan/flaskblog/static;
	}

	location / {
		proxy_pass http://localhost:8000;
		include /etc/nginx/proxy_params;
		proxy_redirect off;
	}    

 -   **/etc/supervisor/conf.d/flaskblog.conf**
 -  [program:flaskblog]
 -  directory=/home/pi/fdaehan
 -  command=/home/pi/fdaehan/venv/bin/gunicorn -w 3 run:app
 -  user=pi
 -  autostart=true
 -  autorestart=true
 -  stopasgroup=true
 -  killasgroup=true
 -  stderr_logfile=/var/log/flaskblog/flaskblog.err.log
 -  stdout_logfile=/var/log/flaskblog/flaskblog.out.log


> 2nd App
 - **/etc/nginx/sites-enabled/shopping
 server {
	listen 80;
	server_name 121.169.130.211:5000;                               # 서브도메인마다 포트 설정

	location /static {
		alias /home/pi/Shopping-website/shopping_website/static;
	} 

	location / {
		proxy_pass http://localhost:5000;
		include /etc/nginx/proxy_params;
		proxy_redirect off;
	}
}
 server {
	listen 80;
	server_name **shop.foxlee-p.ga;**                         Freenom 에서 subdomain 신청 -> shop 따라서 www.shop.fox~ 가 아닌 shop.foxlee~

	location /static {
		alias /home/pi/Shopping-website/shopping_website/static;
	} 

	location / {
		proxy_pass http://localhost:5000;
		include /etc/nginx/proxy_params;
		proxy_redirect off;
	}
}

 -   **/etc/supervisor/conf.d/shopping_website.conf**
 -  [program:shopping_website]
 -  directory=/home/pi/Shopping_website
 -  command=/home/pi/Shopping_website/bin/gunicorn -bind 0.0.0.0:5000 run:app
 -  user=pi
 -  autostart=true
 -  autorestart=true
 -  stopasgroup=true
 -  killasgroup=true
 -  stderr_logfile=/var/log/shopping_website/shopping_website.err.log
 -  stdout_logfile=/var/log/shopping_website/shopping_website.out.log
 
 
> SSL 인증서 발급 - 
1. sudo certbot --nginx 
2. 원하는 url 선택해서 (기존 도메인, 서브도메인) 발급
3. No redirect(접속자가 http 입력하면 http로 접속) / **redirect(https로만 접속가능)**
 
> 인증서 발급 후 추가되는 부분 **/etc/nginx/sites-enabled/shopping**
 
* listen 443 ssl; # managed by Certbot
* ssl_certificate /etc/letsencrypt/live/www.foxlee-p.ga/fullchain.pem; # managed by Certbot
* ssl_certificate_key /etc/letsencrypt/live/www.foxlee-p.ga/privkey.pem; # managed by Certbot
* include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
* ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

 * server {
 *   if ($host = shop.foxlee-p.ga) {                  -> 접속자가 shop.foxlee-p.ga 입력하면
 *       return 301 https://$host$request_uri;        -> https:// 로 redirect
 *   } # managed by Certbot


*	listen 80;                          -> 80 : http 에 접속되면
*	server_name shop.foxlee-p.ga;       -> https 인증된 곳으로
*    return 404; # managed by Certbot

 
 
 
 
 
 
 
 
 
 
 [set_port]: https://stackoverflow.com/questions/48205495/python-how-to-run-multiple-flask-apps-from-same-client-machine



