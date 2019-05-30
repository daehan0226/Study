---
layout: post
title: Ping Trace
categories:
- blog
---

> # Ping 

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
 ![Alt text](/images/tracert.png)


[특정 포트]:https://tctt.tistory.com/143
