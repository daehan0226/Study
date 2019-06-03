---
layout: post
title: AWS_ubuntu
categories:
- blog
---


2019-06-03-AWS_ubuntu.md


* Elasticsearch query 참고 - https://blog.jonnung.com/elasticsearch/2018/05/08/elasticsearch-search-api-query-dsl-summary/

- - -

0. 파이썬 버전 확인

1. 개발환경 설정, 가상환경 (pip, venv 설치)
 - 1-1) sudo apt install python3-venv  가상환경 //
 - 1-2) sudo python3 -m venv flask/venv
 - 1-3) source venv/bin/activate
 - 1-4) pip install -r requirements.txt    ( sudo 없이)


2. 파일 옮기기 
 - 2-1). Winscp 호스트 이름: 퍼블릭 ip , 사용자이름 ubuntu,  고급 설정 ssh 인증 - 개인키 설정(확장자 ppk)
 - 2-2) 해당 파일, 디렉토리 허가 - sudo chmod 777 data  (data 라는 대상을 모든 사람이 사용 가능)


3. nginx / gunicorn / supervisor 
