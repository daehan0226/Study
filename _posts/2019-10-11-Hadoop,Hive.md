---
layout: post
title: Hadoop,Hive
categories:
- blog
---

* Version
  * hadoop 2.6.0
  * java -version  1.8.0_221   ( jdk-8u221-windows-x64 )
  * hive ( apache-hive-2.1.0-bin.tar.gz )
  * mysql-java connector ( mysql-connector-java-5.1.48)



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

  * hive 설치 유튜브 참고  https://www.youtube.com/watch?v=Bs5HJFIEA2o



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
    
  * slaves       ( 데이터노드 - 밑에는 예시) // /etc/hosts, /etc/sysconfig/network 확인 필요 )
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
 
 
 * hive 데이터
 
        $HADOOP_HOME/bin/hadoop fs -mkdir /tmp
        $HADOOP_HOME/bin/hadoop fs -mkdir /home /home/hive /home/hive/warehouse
        $HADOOP_HOME/bin/hadoop fs -chmod g+w   /tmp
        $HADOOP_HOME/bin/hadoop fs -chmod g+w   /home /home/hive /home/hive/warehouse

 
# Hive - config
 
* hadoop 설치 및 실행한 후
* mysql 설정 필요 
* mysql 서버 실행하기 ( cmd - net start mysql80 (mysql80,mysql 등 설치 이름 )
* mysql hive 유저 추가하고 권한 부여
  * mysql -u root -p
  * mysql> create database hive;
  * mysql> create user 'hiveuser'@'%' IDENTIFIED BY 'hivepass';
  * mysql> GRANT all on *.* to 'hiveuser'@localhost identified by 'hivepass';
  * mysql>  flush privileges;  
  
* mysql -u hive -p
* mysql> create database hive;
* Query OK, 1 row affected (0.00 sec)
* mysql> use hive;
* Database changed


 
* mysql 스키마 설정 
  * cmd 관리자 권한 실행
  * C:\hive\scripts\metastore\upgrade\mysql
  * mysql -uroot -p
  * use hive;
  * source hive-schema-2.1.0.mysql.sql -> 스키마
* cmd   
  * $HIVE_HOME/bin/schematool -initSchema -dbType mysql ??? -> 필요한 건가? 확인 필요
   
 
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
 
 
 
 * hadoop - start-all.sh // hive --service metastore 실행 후에 밑에 데이터 넣기 실행
 
 
 * hive 데이터 넣기
   * hive> create table hive01(seq int, crt_dt date);
   * hive> tables;
   * hive> select * from hive01;
   
 
 * hive 데이터 확인
   * mysql -u hive -p
   * use hive;
   * select * from tbls;
 
 ![캡처](https://user-images.githubusercontent.com/47915302/66632794-3b664480-ec44-11e9-89a4-3adc8fd24c3e.PNG)


* Hadoop 에서 데이터 확인 
  * C:\hadoop-2.6.0\bin\hadoop fs -ls -R \


* hive 데이터 올리기 연습
  * https://corock.tistory.com/347
  * https://m.blog.naver.com/estern/220825017765
