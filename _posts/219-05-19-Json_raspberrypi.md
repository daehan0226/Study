---
layout: post
title: Json_raspberrypi
categories:
- blog
---

> # Add data

    def Get_meaning(verb):
        with open('static/meaning.json', 'r', encoding='utf-8') as f1:
            m_data = json.load(f1)  #기존 데이터에
            try:
                meaning = m_data[verb]                   # 단어가 이미 있으면 그 단어의 value 리턴
                return meaning
            except: # 크롤링 업데이트
                meaning = Get_dicionary_meaing(verb)     # 단어 가져옴( 없으면 None - json - null )
                data = {verb: meaning}
                m_data.update(data)    # 딕셔너리로 추가 후
        with open('static/meaning.json', 'w', encoding='utf-8') as f1:
            json.dump(m_data, f1) # 저장
            
            
            
PermissionError: [Errno 13] Permission denied: 'static/meaning.json'
----- 라즈베리 파이 에러 -> 작성 에러 sudo chmod 777 해당파일   ( Permission error)
