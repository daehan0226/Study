---
layout: post
title: Nodejs+mysql+Raspberry
categories: JS

---


* sudo apt-get update
* sudo apt-get install nodejs
* sudo apt-get install npm ( node package manager)

* sudo npm init 각각 설정 가능 ( sudo npm init -y )
![20190710_010021](https://user-images.githubusercontent.com/47915302/60904590-4066d100-a2ae-11e9-9523-4c0428338d71.png)
![20190710_010105](https://user-images.githubusercontent.com/47915302/60904660-5bd1dc00-a2ae-11e9-8ed7-7a7a933a5a60.png)


* sudo npm install mysql 
* sudo npm install express

# npm start 




# 수정사항 자동 업데이트 - supervisor
* sudo npm supervisor --g (전역에 설치하여 다른 디렉토리에서도 사용 가능)
* sudo nano package.json 의 start 값 변경 = node  00.js -> supervisor 00.js
* 실행 = supervisor 00.js 



# nodejs 백그라운드 실행 
- https://tom7930.tistory.com/26
- http://son10001.blogspot.com/2016/01/nodejs.html
- https://kamang-it.tistory.com/entry/Packageforever%EA%B3%BC-nodejs-%EB%8D%B0%EB%AA%AC%EB%B0%B1%EA%B7%B8%EB%9D%BC%EC%9A%B4%EB%93%9C%EC%9C%BC%EB%A1%9C-%EC%8B%A4%ED%96%89

![20190710_020928](https://user-images.githubusercontent.com/47915302/60908894-e5d27280-a2b7-11e9-8090-90eba025f5d1.png)
