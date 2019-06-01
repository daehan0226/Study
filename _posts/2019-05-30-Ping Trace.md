---
layout: post
title: Ping Trace
categories:
- blog
---

> # Ping 

![ping](https://user-images.githubusercontent.com/47915302/58748645-f45a8c80-84b6-11e9-86d5-45b54a27a678.png)

* Ping is a basic Internet program that **allows a user to verify that a particular IP address exists and can accept requests**.

* Ping is used diagnostically to **ensure** that a host computer the user is trying to reach is **actually operating**. 
* Ping works by sending an Internet Control Message Protocol (ICMP) Echo Request to a specified interface on the network and waiting for a reply. 
* Ping can be used for troubleshooting to test connectivity and determine response time.

* cmd 

  1. ping 121.169.130.211
  
  2. [특정 포트] -> tcping.exe 설치 -> C:\windows\System32 에 저장
     tcping 121.169.130.211 5000 5000:포트번호


> # Trace

* cmd 
 - tracert foxlee-p.ga
 
![tracert](https://user-images.githubusercontent.com/47915302/58748644-f290c900-84b6-11e9-84fd-8577acd4c8bd.png)



* 홉수 = 현재 노트북과 foxlee-p.ga(121.169.130.211 -dns) 웹서버 사이에 13개의 호스트가 있었음
* RTT - 중간 시간은 각 호스트 도착지에 도착하는데 걸린 시간


- - -

* Ping은 먼저 보내는 호스트, S, 에서 자신의 시간(time-stamp)을 ICMP 메세지에 포함시켜서 받는 호스트, R, 에 보내게 됩니다. 받는 쪽, R은 이 메세지를 받자마자 그대로 받는 주소와 보내는 주소를 바꾸어 다시 보내는 쪽에 보내게 됩니다. 원래 Ping 메세지를 보냈던 S는 R이 보낸 메세지를 받는 시간을 기록하여, 원래 S 자신이 보냈던 시간과의 차이를 계산해 냄으로써, RTT(round trip time)를 계산하게 됩니다. 보통 ping 의 출력 결과에는 bytes, time, TTL 값이 나오는데요. bytes 에는 S에서 보낼 때, 거의 무의미하게 포함되는 데이터 크기를 말합니다. time 은 위에서 말한대로 계산한 RTT 값이구요. TTL 은 time-to-live 값을 말합니다. TTL은 크게 영향을 미치지 않지만, bytes 의 값은 보낸 데이터의 크기이기 때문에, RTT 계산시 오차가 생기게 될 수 있습니다.

* Traceroute 는 TTL 값을 하나씩 줄여서 R 에 메세지를 보내는 것입니다.
TCP/IP는 connection-less service 이기 때문에, 잘못된 IP 주소를 넣어서 데이터를 전송하게 될 경우, IP packet은 네트워크 상에서 Loop를 돌게 되는 수가 있습니다. 이 때문에, TTL 값이 필요하게 되는데요. TTL 은 라우터 하나를 지날 때마다 값이 하나씩 줄어들게 됩니다. 만약, 어떤 라우터에서 TTL 값이 0이 된 메세지를 받게 된다면, 에러 메세지를 원래 보낸 호스트에 보내주게 됩니다. traceroute는 이런 TCP/IP의 성질을 이용하여, TTL 값을 1에서부터 하나씩 늘려가면서 R 에게 ping 을 보내는 것이라고 생각하시면 되겠습니다. 이렇게 되면, S와 R 사이에 있는 라우터에서 에러 메세지를 보내주는 것을 보고, S와 R 사이의 bottle neck 이 무엇이 되는지를 알 수가 있습니다. 예를 들어, S--(1)--(2)--(3)--R 순으로 네트워크가 연결되어 있다면, 맨처음 S는 TTL 값을 1로하여 보내주면, (1)에서는 S에서 보낸 메세지가 잘못되었다고 판단하고, 에러 메세지를 S에 보내게 됩니다. 이렇게 되면, S는 본래 처음 자신이 보냈던 시간값과 받은 시간을 가지고 S와 (1)사이의 RTT를 구하게 됩니다. 이런 식으로 TTL 값을 하나씩 늘려가다가 맨 마지막에는 R까지 도달하게 되면, S와 R사이의 라우터 혹은 노드 간의 링크에서 걸리는 시간들을 모두 측정할 수 있는 것이지요.
[출처] Ping 과 Traceroute 동작원리|작성자 신정훈







[특정 포트]:https://tctt.tistory.com/143
