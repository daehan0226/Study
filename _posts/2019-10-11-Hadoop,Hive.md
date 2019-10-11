---
layout: post
title: Hadoop,Hive
categories:
- blog
---


# Hadoop, HIVE 설치

* 환경변수
  * User에 대한 사용자 변수
    * HADOOP_HOME c:\hadoop-2.6.0
    * HADOOP_USER_CLASSPATH true
    * HIVE_BIN C:\hive\bin
    * HIVE_HOME C:\hive
    * HIVE_LIB C:\hive\lib

  * 시스템 변수
    * JAVA_HOME C:\java
    * PATH : C:\java\jdk-13\bin, %JAVA_HOME%\bin, C:\hive\bin





# Hadoop 실행

* hadoop-2.6.0/bin
  * /hadoop 명령  -> 첫 실행 시 /bin/hadoop namenode -format  (다시 하면 리셋됨)
 
* hadoop-2.6.0/etc/hadoop 환경설정 파일
  * /hadoop-env.cmd
    * set JAVA_HOME=C:\java
    * set HADOOP_PREFIX=C:\hadoop-2.6.0
    * set HADOOP_CONF_DIR=%HADOOP_PREFIX%\etc\hadoop
    * set YARN_CONF_DIR=%HADOOP_CONF_DIR%
    * set PATH=%PATH%;%HADOOP_PREFIX%\bin



 
