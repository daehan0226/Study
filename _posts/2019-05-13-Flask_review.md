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
 
 3. 배포 
 - port 열기 sudo nano ufw allow 5001 (run.py -> app.run(debug=True, host='0.0.0.0', port:5001)
 - nginx, unicorn, supervisor,  수정하기 
