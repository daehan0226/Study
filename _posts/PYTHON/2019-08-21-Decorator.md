---
layout: post
title: Decorator
categories: PYTHON

---



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
