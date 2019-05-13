---
layout: post
title: Flask_review
categories:
- blog
---


1. Subdomain 설정
 - NAME : ENGLISH, TYPE: A, TTL: 300, TARGET: IP address
 - NAME : ENGLISH, TYPE: CNAME, TTL: 300, TARGET: foxlee-p.ga
 
 
2. 프로젝트 파일 만들기
 - 1. run.py
 - **파일 위치 확인 필요!** run.py 에서 바로 templates에 있는 html을 불러오려면 run.py와 같은 디렉토리에 templates가 위치하고 그안이 html 저장
 - run.py -> 모듈로 ex__init__.py 에서 가져올때는 init.py가 있는 디렉토리에 templates 있어야함 결론: render 하는 py 파일의 디렉토리에 templates 있어야함 
 
 
 3. 배포 (라즈베리파이로 프로젝트 옮긴 후)
 - port 열기 sudo nano ufw allow 5001 (run.py -> app.run(debug=True, host='0.0.0.0', port:5001)
 - 가상환경 구축  // run.py를 포함하는 디렉토리 english에 가상환경 구축 = english 디렉토리 안에서 sudo virtualenv **env숫자**
 - 가상환경 실행 // source bin/activate
 - nginx - sudo nano /etc/nginx/engish  -> sever_name / location / proxy 수정
 - gunicorn 설치 - 가상환경안 - sudo pip install gunicorn -> gunicorn --bin 0.0.0:5001 run.app
 - supervisor - sudo nano /etc/supervisor/conf.d/english.conf -> 디렉토리, 커맨드, 로그정보파일 위치 수정 후 로그정보 파일 생성
 - cd /var/log -> sudo mkdir english -> cd english -> sudo touch english.err.log, sudo touch english.out.log
 - 모든 설정 끝 -> sudo systemctl restart nginx - > sudo supervisorctl restart all 
 
