---
layout: post
title: flask_error
categories:
- blog
---


* 프로젝트 수정 후 에러 뜨는 경우 가상환경에서 gunicorn --bind 0.0.0.0:포트번호 run:app  -실행 후 에러 확인
* 모듈이 없는 경우
* Dev 에서 모듈 추가되는 경우 -> 해당 프로젝트의 가상환경에서 pip install [모듈이름]

      # 수정 후
      answer=[]

      @app.route("/")
      @app.route("/home", methods=["GET", "POST"])
      def home():
          form = input_sentent_Form(request.form)
          sen1 = get_sentence()                  # answer 이 없는 경우 Home 호출 -> sen1 -> 문장 1번 -> html
          answer.append(sen1)                    # Get 으로 home 한번 더 호출 -> sen1 = 문장 2번
          rd_sen = disorder_sentence(sen1)       # 사용자는 문장 1번을 입력하여 결국 기존 짠 코드인 if sen1(문장 2번) == sentence_in(문장 1번): 은 참이 될수 없는 구조
          n = len(rd_sen)
          if request.method == "POST" and form.validate():
              sentence_in = form.sentence_input.data
              if answer[0] == sentence_in:
                  flash('Okay')
                  answer.pop(0)
                  return render_template('home.html', form=form, rd_sen=rd_sen, n=n)
              else:
                  answer.pop(0)
                  flash('Wrong')
                  return render_template('home.html', form=form, rd_sen=rd_sen, n=n)
          else:
              flash('Hello')
              return render_template('home.html', form=form, rd_sen=rd_sen, n=n)
              
      # 수정 전                                      숫자 과정 참고
      @app.route("/")
      @app.route("/home", methods=["GET", "POST"])                                   1    9  
      def home():                                                                     
          form = input_sentent_Form(request.form)                                    2    10
          sen1 = get_sentence()                                                      3    11  문장 바뀜                  
          rd_sen = disorder_sentence(sen1)                                           4    12
          n = len(rd_sen)                                                            5    13
          if request.method == "POST" and form.validate():                                14
              sentence_in = form.sentence_input.data                                      15 사용자가 본 문장은 8번 rd_sen(4번의 re_sen)
              if sen1 == sentence_in:                                                     16 11번의 sen1 
                  flash('Okay')
                  return render_template('home.html', form=form, rd_sen=rd_sen, n=n)
              else:
                  flash('Wrong')
                  return render_template('home.html', form=form, rd_sen=rd_sen, n=n)
          else:                                                                       6(text 넣고 submit 한 경우를 제외 여기 이동)
              flash('Hello')                                                          7
              return render_template('home.html', form=form, rd_sen=rd_sen, n=n)      8  - 4,5번이 html 사용자에게 노출됨
              
