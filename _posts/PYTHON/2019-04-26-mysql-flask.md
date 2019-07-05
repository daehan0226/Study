---
layout: post
title: mysql-flask
categories: PYTHON

---

1. 설치
2. 비번 설정  mysqladmin -u root password 
3. mysql -u root -p mysql 로 접속
4. SHOW DATABASE; CREATE DATABASE foxleeshop; USE foxleeshop; CREATE TABLE users ( uid INT(11) AUTO_INCREMENT PRIMARY KEY, email VARCHAR(40), password VARCHAR(40) 이름 특징, 이름 특징, 이름 특징) // SHOW TABLES; // DESCRIBE usrs;

<우분투>
5. sudo apt-get install libmysqlclient-dev
6. pip install mysqlclient 



(host : localhost -> 127.0.0.1)

https://stackoverflow.com/questions/17975120/access-denied-for-user-rootlocalhost-using-password-yes-no-privileges


https://stackoverflow.com/questions/18150858/operationalerror-2002-cant-connect-to-local-mysql-server-through-socket-v
