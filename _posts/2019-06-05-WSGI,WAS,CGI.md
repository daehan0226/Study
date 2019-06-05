---
layout: post
title: Gunicorn
categories:
- blog
---

2019-06-05-WSGI,WAS,CGI.md


# Web server  - Nginx, Apache
* 인터넷을 통해 요청된 웹 컨텐츠의 자료를 도와주는 하드웨어 및 소프트웨어
* 웹서버는 기본적으로 정적, 클라이언트가 리퀘스트를 통해 리소스를 요청하면 해당 리소스를 보내줌

# CGI - Common Gateway Interface
* 웹서버에서 어플리케이션을 동작시키는 인터페이스 동작시킨다. 
* 서버 프로그램과 외부 프로그램간의 인터페이스
* **요청->웹서버(Nginx,Apache)->웹서버가 직접실행하는 프로그램(C,C++ 등)

# WAS - Web Application Server
* Web Server + CGI
* 웹 서버에 서버 어플리케이션을 얹은 것
* **요청->웹서버(Nginx,Apache)->웹 어플리케이션 서버(톰캣, JBoos)->웹어플리케이션 서버가 직접실행하는 프로그램

# WSGI - Web Server Gateway Interface
* 파이썬 스크립트가 웹 서버와 통신하기 위한 인터페이스
* **요청->웹서버(Nginx)->WSGI Server(Gunicorn)->WSGI를지원하는 웹어플리케이션(Django, flask)**


> Gunicorn = WSGI Server
* Gunicorn은 Python WSGI HTTP Server이다.
* Gunicorn팀은 HTTP proxy server로 Nginx를 쓰길 권장한다. Gunicorn은 localhost 8000번을 사용하는데 Nginx는 전형적으로 reverse proxy server를 이용한다. Gunicorn은 의존성이 없으며, 아래와 같은 장점을 포함한다.

# How Many Workers?
* DO NOT scale the number of workers to the number of clients you expect to have. 
* Gunicorn should only need 4-12 worker processes to handle hundreds or thousands of requests per second.

* Gunicorn relies on the operating system to provide all of the load balancing when handling requests. Generally we recommend (2 x $num_cores) + 1 as the number of workers to start off with. While not overly scientific, the formula is based on the assumption that for a given core, one worker will be reading or writing from the socket while the other worker is processing a request.

* Obviously, your particular hardware and application are going to affect the optimal number of workers.

* Always remember, there is such a thing as too many workers. After a point your worker processes will start thrashing system resources decreasing the throughput of the entire system. 

* (throughput: how much data can be transferred from the source to its destination within a given timeframe)
* (Bandwidth: the maximum transfer capacity of a network.)
