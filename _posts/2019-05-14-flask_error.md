---
layout: post
title: flask_error
categories:
- blog
---


* 프로젝트 수정 후 에러 뜨는 경우 가상환경에서 gunicorn --bind 0.0.0.0:포트번호 run:app  -실행 후 에러 확인
* 모듈이 없는 경우
* Dev 에서 모듈 추가되는 경우 -> 해당 프로젝트의 가상환경에서 pip install [모듈이름]
