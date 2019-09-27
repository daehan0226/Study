---
layout: post
title: sys_http-auth
categories:
- PYTHON
---

* https://stackoverflow.com/questions/6999565/python-https-get-with-basic-authentication

        import requests        
        res = requests.get(app_config.API_TOKEN_URL, auth=(app_config.API_USERNAME, app_config.API_PASSWORD))
        data = res.json()
        return data['token']
        
        
* https://brownbears.tistory.com/296


        current_dir = os.path.dirname(__file__)[:-13] # 현재 dir /// [:-13] 내가 import 하고자하는 파일이 있는 dir까지 자르기 
        print(current_dir)
        sys.path.append(current_dir)      // config(__init__.py, app_config.py를 포함하는)폴더가 있는 디렉토리
        from config.app_config import app_config
