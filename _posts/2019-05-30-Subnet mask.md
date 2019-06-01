---
layout: post
title: Subnet mask
categories:
- blog
---

> # Subnet mask

* A subnet mask is a number that defines **a range of IP addresses available within a network**. 
* A single subnet mask **limits the number of valid IPs for a specific network**. 
* **Multiple subnet masks can organize a single network into smaller networks** (called subnetworks or subnets). 
* Systems within **the same subnet can communicate directly with each other**, **while systems on different subnets must communicate through a router**.

* A subnet mask **hides (or masks) the network part of a system's IP address and leaves only the host part as the machine identifier**. It uses the same format as an IPv4 address — four sections of one to three numbers, separated by dots. Each section of the subnet mask can contain a number from 0 to 255, just like an IP address. For example, a typical subnet mask for a Class C IP address is: **255.255.255.0**

* In the example above, the first three sections are full (255 out of 255), meaning the IP addresses of devices within the subnet mask must be identical in the first three sections. The last section of each computer's IP address can be anything from 0 to 255. If the subnet mask is defined as 255.255.255.0, the IP addresses 10.0.1.**99** and 10.0.1.**100** are in the same subnet, but 10.0.2.100 is not.

* A subnet mask of 255.255.255.0 allows for close to 256 unique hosts within the network (since not all 256 IP addresses can be used).
If your computer is connected to a network, you can view the network's subnet mask number in the Network control panel (Windows) or System Preference (macOS). Most home networks use the default subnet mask of 255.255.255.0. However, an office network may be configured with a different subnet mask such as 255.255.255.192, which limits the number of IP addresses to 64.

* Large networks with several thousand machines may use a subnet mask of 255.255.0.0. This is the default subnet mask used by Class B networks and provides up to 65,536 IP addresses (256 x 256). The largest Class A networks use a subnet mask of 255.0.0.0, allowing for up to 16,777,216 IP addresses (256 x 256 x 256).



* 이진수 8자리마다 점을 찍고 이 8개(8비트)를 묶어 옥텟이라 함. 즉, ip 주소는 총 4개의 옥텟으로 이루어짐 = 4옥텟 = 32비트( 255. 255. 255. 2555)  = 1111 1111. 1111 1111. 1111 1111. 1111 1111    // 1111 1111 = 2의 8승 // 전체 2의 32승

* 라우터 = 내부로 가는 이더넷 이터페이스, 외부 인터넷으로 가는 시리얼 인터페이스(ISP업체에 의해 결정), ip 주소 2개가 됨 

* 한 네트워크 = 하나의 브로드캐스트 영역 = 라우터를 거치지 않고 통신이 가능한 영역 (IP의 네트워크 부분은 동일함)

* 서브넷마스크 = 주어진 IP 주소를 네트워크 환경에 맞게 나누어 주기 위해 씌워주는 이진수의 조합

