---
layout: post
title: MYSQL_1
categories:
- blog
---




[참고1]:


* mysql 서버 설정
  1. sudo apt-get install mysql-server
  2. mysql port 허용 - sudo ufw 3306
  3. mysql 접속
    1. mysql -uroot -p
    2. use mysql
    3. 서버에 접속할 클라이언트단 정보 설정하기
    4. insert into user (host, user, password) values ('서버에 접속할 ip 주소', '서버 접속시 사용할 user 이름', password('*******'));
    5. insert into db values('서버에 접속할 ip 주소', '서버 mysql에서 db 선택','서버 접속시 사용할 user 이름' ,'y','y','y','y','y','y','y','y','y','y','y','y','y','y','y','y','y', 'y', 'y');  // 기타 사항 y 로 허용
    




[참고1]:http://faq.hostway.co.kr/Linux_DB/1286
