---
layout: post
title: Decorator
categories: PYTHON

---

# Class decorator


        class Worker():
                @crawler_log(name="New worker", msg="run")        # 호출 시 __init__ 에서 받는 인자를 보내줌 
                def run(self):
                        run something


        class crawler_log():

            def __init__(self, name, msg):
                self.name = name
                self.logger = logging.getLogger(name)
                self.msg = msg

            def __call__(self, f):                        # 데코레이터에서 호출하는 부분
                self.logging_wirte(self.name, self.msg)   # Worker 의 run이 실행되기 전 실행됨
                # @functools.wraps(f)
                def decorated(*args, **kwargs):
                    f(*args, **kwargs)                    # run 실행해라
                return decorated                          # run 을 실행하는 부분을 리턴하여 실제 데코레이터가 호출될때 f 즉 run 을 실행

            def logging_wirte(self, worker, msg):
                mylogger = self.logger
                mylogger.setLevel(logging.INFO)
                formatter = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')

                stream_hander = logging.StreamHandler()
                stream_hander.setFormatter(formatter)
                mylogger.addHandler(stream_hander)
                file_handler = logging.FileHandler('{}.log'.format(self.name))
                mylogger.addHandler(file_handler)

                mylogger.info("{}'s crawling {}!!!".format(worker, msg))


            def logging_error(self, worker, msg):
                mylogger = self.logger
                mylogger.error("crawling error!!! {}-{}".format(worker, msg))




        import datetime

        def logger_login():
            print (datetime.datetime.now())
            print ("Dave login")
            print (datetime.datetime.now())

        logger_login()

        2019-08-21 22:41:33.174246
        Dave login
        2019-08-21 22:41:33.174246
        ==================================================


        print("="*50)

        def logger_login1(func):
            def wrapper():
                print (datetime.datetime.now())
                print ("Dave login")
                func()
                print (datetime.datetime.now())
            return wrapper

        @logger_login1
        def logger_login2():
            print("with decorator")

        logger_login2()

        print("="*50)

        2019-08-21 22:41:33.174246
        Dave login
        with decorator
        2019-08-21 22:41:33.174246
        ==================================================

        def logger_login3(function):
            def wrapper(*args, **kwargs):
                print (datetime.datetime.now())
                print ("Dave login")
                function(*args, **kwargs)
                print (datetime.datetime.now())
            return wrapper

        @logger_login3
        def logger_login4(id):
            print(id)
            print("Check your id")

        logger_login4('daehan')

        print("="*50)

        ==================================================
        2019-08-21 22:41:33.174246
        Dave login
        daehan
        Check your id
        2019-08-21 22:41:33.174246
        ==================================================


        def deco_order1(function):
            def wrapper(*args, **kwargs):
                print ("1")
                return function(*args, **kwargs).upper()
                print ("2")
            return wrapper


        def deco_order2(function):
            def wrapper(*args, **kwargs):
                print ("3")
                return function(*args, **kwargs).upper()
                print ("4")
            return wrapper

        @deco_order1
        @deco_order2
        def deco_order3(str):
            print('5')
            return str


        print(deco_order3('asdf')) == > ASDF   // 순서 @deco_order1 -> print('1') -> funtion -> @deco_order2 -> print('3') -> funtion(str).upper() -> print('5') return str => print(str) // print('2'), print('4') 는 return 이후라서 

        def h1_tag(function):
            def x(self, *args, **kwargs):
                return function(self, *args, **kwargs).upper()
            return x

        class Person:
            def __init__(self, name):
                self.name = name

            @h1_tag
            def get_name(self):
                return self.name

        y = Person('daehan')
        print(y.get_name())
