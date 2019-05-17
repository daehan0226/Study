---
layout: post
title: Architecture
categories:
- blog
---
> Software architecture

* Software architecture refers to the **fundamental structures** of a software system and the **discipline** of creating such structures and systems. 
* Each structure comprises **software elements**, **relations** among them, and **properties** of both elements and relations.
* It functions as a blueprint for the system and the developing project, laying out the tasks necessary to be executed by the design teams.

* Software architecture is about **making fundamental structural choices which are costly to change once implemented**. 
* Software architecture choices include **specific structural options from possibilities in the design of software**. 
* For example, the systems that controlled the space shuttle launch vehicle had the requirement of being very fast and very reliable. 
* Therefore, an appropriate real-time computing language would need to be chosen. Additionally, to satisfy the need for reliability the choice could be made to have multiple redundant(back-up devices or lines) and independently produced copies of the program, and to run these copies on independent hardware while cross-checking results.
* Documenting software architecture facilitates communication between stakeholders, captures early decisions about the high-level design, and allows reuse of design components between projects.


①     애플리케이션 아키텍쳐 (Application Architecture) : 개발해야하는 애플리케이션 소프트웨어에 대한 아키텍쳐를 설계한다. 여기에는 컴포넌트의 정의, 컴포넌트 간의 관계, 특정 기능에 대한 컴포넌트간의 호출 흐름, 그리고 컴포넌트간의 통신을 위한 메세지에 대한 규격 정의를 포함한다.

②     테크니컬 아키텍쳐 (Technical Architecture) : 애플리케이션의 배포 구조를 정의한다. 애플리케이션을 배포할 하드웨어의 구조와, 애플리케이션 개발에 사용하는 미들웨어 (DBMS, 웹서버등)등의 배포 구조를 함께 정의한다.

③     데이타 아키텍쳐 (Data Architecture) : 마지막으로, 애플리케이션에서 다루는 정보(데이타)의 구조와 관계를 정의한다.

이 아키텍쳐의 설계는 기반 지식이 없는 상태에서는 설계가 어렵다. 물론 경험을 가지고 할 수 있겠지만, 참고할 수 있는 레퍼런스가 있다면 실수나 실패를 줄이고, 시간 또한 단축 시킬 수 있다. 참고자료는 CBD,SOA,EAI와 같은 일반적인 애플리케이션을 개발하기 위해서 패턴화된 아키텍쳐 스타일을 응용하거나, 유사한 도메인의 CASE STUDY (선행 사례) 기반의 아키텍쳐, 그리고 솔루션을 사용할 경우, 솔루션 제공사의 컨설팅 서비스를 이용하면, 매우 효율적으로 아키텍쳐 설계를 할 수 있다.
