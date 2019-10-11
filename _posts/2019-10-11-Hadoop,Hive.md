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





# Hadoop - config

* hadoop-2.6.0/bin
  * /hadoop 명령  -> 첫 실행 시 /bin/hadoop namenode -format  (다시 하면 리셋됨)
 
* hadoop-2.6.0/etc/hadoop 환경설정 파일
  * /hadoop-env.cmd
    * set JAVA_HOME=C:\java
    * set HADOOP_PREFIX=C:\hadoop-2.6.0
    * set HADOOP_CONF_DIR=%HADOOP_PREFIX%\etc\hadoop
    * set YARN_CONF_DIR=%HADOOP_CONF_DIR%
    * set PATH=%PATH%;%HADOOP_PREFIX%\bin

  * /core-site.xml
  
        <configuration>
          <property>
            <name>fs.default.name</name>
            <value>hdfs://localhost:9000</value>       # 하둡이 다른 서버들과 통신하는 포트 9000
          </property>
        </configuration>


  * master
    * SERVER02   (보조네임노드)
    
  * slaves       ( 데이터노드 )
    * 127.0.0.3 SERVER03
    * 127.0.0.4 SERVER04
    * 127.0.0.5 SERVER05

  * /yarn-site.xml
    
        <property>
          <name>yarn.web-proxy.address</name>
          <value>http://localhost:8089</value>
        </property>
 
 
 # Run Hadoop 
 
 * C:\hadoop-2.6.0\sbin\start-all.sh  -> 더블 클릭 실행  또는
 * C:\hadoop-2.6.0\sbin\start-dfs.sh 실행 후 start-yarn.sh 실행
 
 
 
 # Hive - config
 
 * hadoop 설치 및 실행한 후
 * mysql 설정 필요 
 * mysql 서버 실행하기 ( cmd - net start mysql80 (mysql80,mysql 등 설치 이름 )
 
 
 
 * Hive 2.1.0 설치
 * https://archive.apache.org/dist/hive/hive-2.1.0/
 * 설치 후 폴더명 hive로 바꾼 후 C:\에 이동
 * hive/lib/mysql-connector-java-5.1.48, mysql-connector-java-5.1.48-bin 넣기 ( mysql - hive 연동 )
 * hive/bin/hive-config.sh
   * export HADOOP_HOME=C:\hadoop-2.6.0 추가
 * hive/conf/hive_site.xml
 

        <configuration>
                <property>
            <name>hive.metastore.local</name>
            <value>false</value>
          </property>
          <property>
            <name>javax.jdo.option.ConnectionDriverName</name>   // mysql 과 연동한다.
            <value>com.mysql.jdbc.Driver</value>
            <description>MySQL JDBC driver class</description>
          </property>
          <property>
            <name>javax.jdo.option.ConnectionURL</name>          // mysql 접속
            <value>jdbc:mysql://localhost:3306/hive?createDatabaseifNotExist=true</value>   <!-- &amp;useSSL=false -->
          </property>
          <property>
            <name>javax.jdo.option.ConnectionUserName</name>      // mysql user 아이디 만든 후  - mysql -u hive -p 로 접속하여 데이터 확인
            <value>hive</value>
          </property>
          <property>
            <name>javax.jdo.option.ConnectionPassword</name>       // msyql user 비밀번호(현재 hive)
            <value>hive</value>
          </property>
          <property>
            <name>hive.metastore.schema.verification</name>        // hive 유저의 스키마 버전 달라고 에러 발생안함 
            <value>false</value>
          </property>
        </configuration>
 
 
 
 
 
 
