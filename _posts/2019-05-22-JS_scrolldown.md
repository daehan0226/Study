---
layout: post
title: JS_scrolldown
categories:
- blog
---
* 참고 : https://developer.mozilla.org/ko/docs/Web/API/Element/scrollIntoView

      <head>
        <meta charset="utf-8">
        <title>Foxlee-shopping</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='main.css') }}">
        <script type="text/javascript">                     # head 에 함수 추가
        function bottom_new(ID) {                           # 
          var elmnt = document.getElementById(ID);
          elmnt.scrollIntoView(true);
        };
        </script>
      </head>
        {% if tag_num: %}
        <body onload="bottom_new('bottom');">
        {% else %}
        <body>
        {% endif %}
                    # 원하는 곳에 함수 호출  ID = bottom
      
      <div id="bottom"><p></p></div>                    # 이부분으로 scrolldown 
      
