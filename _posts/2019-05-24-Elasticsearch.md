---
layout: post
title: Elasticsearch
categories:
- blog
---
[참고]: 

* 엘라스틱서치 설치 https://www.elastic.co/kr/downloads/elasticsearch  / 
* **에러** 버전 7.0(에러) --> 6.3 
* run bin/elasticsearch.bat 

* go to http://localhost:9200/
* 클러스터 이름과 버전 정보를 확인할 수 있다. cluster_name은 config/elasticsearch.yml 에서 변경 가능

      {
        "name" : "DAEHANLEE",
        "cluster_name" : "elasticsearch",
        "cluster_uuid" : "JK62IpiwT6eHF6rN0FZ4Vw",
        "version" : {
          "number" : "7.1.0",
          "build_flavor" : "default",
          "build_type" : "zip",
          "build_hash" : "606a173",
          "build_date" : "2019-05-16T00:43:15.323135Z",
          "build_snapshot" : false,
          "lucene_version" : "8.0.0",
          "minimum_wire_compatibility_version" : "6.8.0",
          "minimum_index_compatibility_version" : "6.0.0-beta1"
        },
        "tagline" : "You Know, for Search"
      }

Index란?
RDB의 데이타베이스와 유사하다.
 
Type이란?
RDB의 테이블과 유사하다.
 
Document란?
테이블의 Row와 유사하다.
JSON 문서로 되어 있다. (key, value)
 
Field란?
엘라스틱 서치의 문서는 JSON이다. JSON의 프로퍼티를 엘라스틱 서치에서는 필드라고 부른다.
RDB 테이블의 컬럼과 유사하다.
 
Mapping이란?
RDB의 스키마와 유사하다.
Mapping은 이해하기 어려우니 아래 이미지 한장 첨부한다.
http://localhost:9200/nklee/phone/1 POST 요청과 함께 아래 JSON데이터를 전송하면 Elasticsearch에서 mapping을 자동 생성해 준다.
{
  "number": "010-1111-1111",
  "author":"nklee"
}



 - - -

      from elasticsearch import Elasticsearch
      from flask import Flask, jsonify, render_template, request
      from wtforms import Form, PasswordField, validators, StringField, SubmitField, TextAreaField, FileField, BooleanField, SelectField
      from datetime import datetime
      app = Flask(__name__)

      es = Elasticsearch('http://localhost:9200')

      class dataForm(Form):
          da1 = TextAreaField('Topic', [validators.data_required(), validators.Length(min=1, max=50)])
          da2 = TextAreaField('Quiz', [validators.data_required(), validators.Length(min=1, max=50)])
          submit = SubmitField('ok')

      #데이터 추가
      @app.route('/data/add', methods=['GET', 'POST'])
      def data_add():
          form = dataForm(request.form)
          if request.method == "POST":
              author, text = form.da1.data, form.da2.data                # html 데이터 입력
              doc = {}
              doc['author'] = author
              doc['text']= text
              doc['timestamp']= datetime.now()
              res = es.index(index="test-index", doc_type='tweet', id=100, body=doc)   # 해당 id에 데이터 저장
              return render_template('es_home.html', form=form, result=res['result'])
          else:
              return render_template('es_home.html', form=form, result="")

      # 데이터 확인
      @app.route('/data/check/id', methods=['GET', 'POST'])
      def data_check(id):
          res = es.get(index="test-index", doc_type='tweet', id=id)
          print(res['_source'])
          return render_template('es_home.html', result=res['_source'])

      @app.route('/data/search', methods=['GET', 'POST'])
      def data_search():
          print('abc')
          es.indices.refresh(index="test-index")

          res = es.search(index="test-index", body={
                                                  "query":
                                                      {"match_all":
                                                           {

                                                           }
                                                       }
          }
          )
          result = []
          for hit in res['hits']['hits']:
              result.append("%(timestamp)s %(author)s: %(text)s" % hit["_source"])
          return render_template('es_all.html', result=result)


      if __name__ == '__main__':
          app.run(debug=True)


//
엘라스틱서치 실행 후 

* http://localhost:9200/**index_name**/**    test-index = index_name
* http://localhost:9200/test-index?pretty  
* http://localhost:9200/test-index/_search 

* http://localhost:9200/test-index/**doc_type_name**/id
* http://localhost:9200/test-index/tweet/100   id= 100, doc_type = tweet, index_name = test_index 



[참고]: https://lng1982.tistory.com/283
