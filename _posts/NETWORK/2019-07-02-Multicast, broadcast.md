---
layout: post
title: Multicast, broadcast
categories: NETWORK

---

![20190702_143427](https://user-images.githubusercontent.com/47915302/60485033-8a601d80-9cd6-11e9-9bc3-883cffaf3365.png)


> # Unicast

* Unicast is defined as the connection that only between a server and a client, which means it’s a one to one transmission. In computing world, it’s the most common kind of traffic in TCP/IP networks. For example, when you send or receive the email, you have to connect to the email server. And here you use the unicast transmission. In this case, a unicast frame contains the unique unicast MAC address of the destination receiver. Therefore, only the specified destination can receive the unicast traffic, and all other destinations will ignore or can’t receive unicast traffic. Using this transfer method, the server can send personalized and accurate information to each client with different requests. However, when the same information needs to be sent to a large audience, multicast and broadcast methods will be more efficient.

* 1:1통신 
* 데이터를 보내고자 하는 주소 (맥어드레스)를 프레임에 포함시켜 보내는 방식
* 맥 어드레스를 찾아 통신, 같은 네트워크에 있는 노드들은 해당 맥 어드레스가 아닌 경우엔 패킷이 CPU 까지 전송되지 않고 LAN카드에서 버림
* CPU까지 영향을 미치지 않고 원하는 노드랑 통신이 가능 한 방식

> # Multicast

* Multicast is a one to many technology that efficiently sends data from one source to many destinations simultaneously, generally within a Local Area Network. A multicast frame contains the unique multicast MAC address of an application, protocol or data stream. To implement IP multicast communication, equipment like data switch, router between the source and receivers is required to support IP multicast function. In multicast model, the network traffic will not increase since the data packet can be sent to different destinations of one multicast group by sending one copy of the data, which means the overall network load can be reduced. However, as we mentioned above, the operation of multicast requires the assistance of switches with IP multicast function, so no matter you choose a 10gb ethernet switch or Gigabit PoE switch, please make sure the switch has that function.


* UDP 기반으로 하나 이상의 송신자들이 **특정한 그룹**에 속해있는 하나 이상의 수신자들에게 데이터를 전송하는 방식. 특정한 그룹을 선택하는 기준은 D클래스의 IP 주소를 이용함.(즉, 수신자들이 참여하고 있는 그룹주소를 표시하여 패킷 전송) 
* D클래스는 32bit 주소체계에서 상위 4개의 비트가 "1110 (10진수 224)" 으로 고정되어 있으며 하위 28bit 가 그룹의 ID 로 사용되는 특별한 주소형식을 가지는데 리를 10진수로 표현하여 보면 224.000.000.000 ~ 239.255.255.255 로 표현할 수 있음.
* 약 150여명의 사용자가 있는 한 네트워크에서 100명 에게 데이터를 전송 하기 위한 상황이라면 100명에게 일일이 유니캐스트로 보낼 수도 없고 100명을 위해 50명은 무시하고 브로트캐스트로 보낼 수도 없을 때 사용
* 그러나 현재 인터넷상의 라우터들이 대부분 유니캐스트만을 지원하기 때문에 멀티캐스트 패킷을 전송하기 위해서는 멀태캐스트 라우터 사이에 터널링(tunneling)이라는 개념을 사용하여 캡슐화(encapsulation)된 패킷 전송 합니다. 즉 멀티캐스트 주소를 가진 데이터 패킷 헤더 앞에 멀티캐스트를 지원하지 않는 일반라우터들을 거칠 때 기존의 유니캐스트 패킷과 같은 방법으로 라우팅되어 최종적으로 터널의 종착지로 전송


> # Broadcast

* Broadcast is a one to all technology. When a device sends a packet to the broadcast MAC address (FF:FF:FF:FF:FF:FF), it will be delivered to all receivers that connected on the LAN no matter the receiver needs it or not. Cable television network is the typical broadcast network example. However, broadcast is not the suitable choice for the public Internet, because it will generate unnecessary interference and tons of unwanted data.

* 같은 네트워크에 포함된 장비들에게 거부권은 없고 일단 무조건 수신하고 봐야하는 통신방법 
* 유니캐스트 와는 다르게 무조건 받아들어야 하기 때문에 CPU까지 패킷이 올라가게 되고, 컴퓨터 자체에 부담이 증가하게
* 브로드캐스트의 대표적인 사용 예는 ARP입니다. ARP 란 자신과 데이터 통신을 하기위한 다른 노드의 맥어드레스를 알아내기 위한 프로토콜입니다. 쉽게 말해 실직적인 통신은 IP주소가 아닌 맥어드레스로 이루어지는데, IP주소는 알고 잇지만 맥어드레스를 모를 때 사용하는 방법


> 통  신

* 일대일 통신 : 유니캐스트
* 일대다 통신 : IP에서는 UDP만 가능 => 브로드 캐스트 : TTL 1, => 멀티 캐스트 : TTL 2 이상

> Multicast vs Unicast
* The basic difference is that, in unicast, there is only one sender and one receiver, while there is a single sender but multiple receivers in multicast. When we want to send the message to a number of people, we’d better choose **multicast transmission since it can utilize the bandwidth more efficiently**. (bandwidth describes the maximum data transfer rate of a network or Internet connection.)


> Multicast vs Broadcast
* In broadcast, the packet transmission is one to all, but in multicast the transmission is one to many. Besides, **multicast requires group management, in order to ensure the message can be sent to those hosts which are interested in receiving the message**. And the traffic on the multicast network is under control.

> Unicast vs Broadcast
* The process of data transmission is different. Unicast only sends the data to one receiver, but broadcast sends the same data to all receivers connected in one LAN. Moreover, if you want to share some **private or unique information with another person, you must use unicast network** but not the broadcast.
