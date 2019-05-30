---
layout: post
title: Blueprint_nginx(error)
categories:
- blog
---

2019-05-30-Blueprint_nginx(error).md


* Blueprint 설정 후 nginx 에서 static 위치 변경 필요. -> html 에서 static 파일 찾지 못했음(error)

      sudo nano /etc/nginx/sites-enabled/english    *오류 있었던 app - english
       location /static {
      #               alias /home/pi/english/english/static;   # 기존 pi/english/static
      #       }
      
      (ip주소, hostname 둘다 수정)
      sudo systemctl restart nginx
      sudo supervisorctl reload
      sudo supervisorctl restart english    -(nginx 에서 static 찾음 -> main.css , audio file 나옴)
      
* 에러 : net::ERR_ABORTED 404 (Not Found) main.css // test1.mp3
