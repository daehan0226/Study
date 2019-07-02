---
layout: post
title: ELK-Kibana
categories: ELASTICSEARCH

---

2019-06-01-ELK-K.md

![kibana1](https://user-images.githubusercontent.com/47915302/58748567-c759aa00-84b5-11e9-9f98-7a04eeb9d3b8.png)

1. 데이터 입력 = 엘라스틱 서치에 입력하기(파이썬,insomnia, Console 활용) 또는 파일 자체를 올리기

![kibana2](https://user-images.githubusercontent.com/47915302/58748581-0556ce00-84b6-11e9-8398-c7535b14e94b.png)


2. Index 패턴 생성 = 저장된 데이터로부터 키바나에서 활용할 데이터 설정 - index(=myaql DB) 와 동일  

![kibana3](https://user-images.githubusercontent.com/47915302/58748582-07b92800-84b6-11e9-955c-22baf11e4ef9.png)

3. index = log_local 이라면 log* 로 찾아줌

![kibana4](https://user-images.githubusercontent.com/47915302/58748583-0982eb80-84b6-11e9-9ad9-7ab6c8d5c013.png)

4. 필터중에 시간 관련 필터 설정

![kibana5](https://user-images.githubusercontent.com/47915302/58748584-0ab41880-84b6-11e9-89c5-65e0da9a937c.png)

5. Search 설정 = Discover 에서 인덱스 패턴 선택(log_local) / 원하는 필터 선택하여 add 하고 시간(Toady) 부분 설정 가능

![kibana6](https://user-images.githubusercontent.com/47915302/58748587-0d167280-84b6-11e9-9e5e-e4995843ffdd.png)

6. Visualize 추가하기 // 차트 유형 선택

![kibana7](https://user-images.githubusercontent.com/47915302/58748590-0e479f80-84b6-11e9-8ee5-af010adda6f7.png)

7. log_local 이라는 인덱스 패턴에서 기준(필터) 설정/ 날짜/  Aggregation -> term 설정 - field 에서 column(clientip) 선택 / size 는 갯수 10개의 ip를 보여줌
