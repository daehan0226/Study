---
layout: post
title: Raspberrypi(3)
categories:
- blog
---

etc/mysql/mariadb.conf.d/500server.cnf -> bind-address

> # bind address
- The address you specify in bind tells MySQL where to listen. 0.0.0.0 is a special address, which means "bind to every available network".
- Only client software which is able to open a connection to the server using the same address that is in specified in the 'bind' option will be allowed to connect.

* Some examples:
- If MySQL binds to 127.0.0.1, then only software on the same computer will be able to connect (because 127.0.0.1 is always the local computer).
- If MySQL binds to 192.168.0.2 (and the server computer's IP address is 192.168.0.2 and it's on a /24 subnet), then any computers on the same subnet (anything that starts with 192.168.0) will be able to connect.
- If MySQL binds to 0.0.0.0, then any computer which is able to reach the server computer over the network will be able to connect.
These are all transport-level connections. Remote computers still need to qualify for application-level, which is to say they will still require the correct login credentials and host parameters from mysql.user.


* https://blog.naver.com/foswmine/221461893333 -/ https://fishpoint.tistory.com/2230 -/ installing APM (APACHE2 PHP7.0 MYSQL)

* http://swriterit.kr/221053291700  MYSQL db 아디,비번 설정

* https://m.blog.naver.com/PostView.nhn?blogId=hyungjun212&logNo=221218211094&proxyReferer=https%3A%2F%2Fwww.google.com%2F phpmyadmin 로그인 오류 - MYSQL DB - Change password.

* www.whatismyip.com


* https://installvirtual.com/install-python-3-on-raspberry-pi-raspbian/ - python 3.6.8 on raspberry

* https://blog.naver.com/ghdry2563/221173232774  - iptime - portfowarding
