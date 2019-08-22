---
layout: post
title: Generator
categories: PYTHON

---


        import time

        def sleep_func(x):
            print("sleep...")
            time.sleep(1)
            return x


        list = [sleep_func(x) for x in range(5)]
        for i in list:
            print(i)

        print("="*20)

        gen = (sleep_func(x) for x in range(5))
        for i in gen:
            print(i)
            
            
        sleep...    list = [sleep_func(x) for x in range(5)]  으로 list에 하나씩 append 되면서 sleep 이 호출됨
        sleep...
        sleep...
        sleep...
        sleep...
        0         print(i) for i in list 
        1
        2
        3
        4
        ====================
        sleep...    print(i) for i in gen //  print(0)
        0
        sleep...    print(1)
        1
        sleep...   print(2)
        2
        sleep...   print(3)
        3
        sleep...   print(4)
        4
        
        
        
        list = [sleep_func(x) for x in range(5)]
        gen = (sleep_func(x) for x in range(5))
        
        sleep...
        sleep...
        sleep...
        sleep...
        sleep...
        ====================

        list 에서만 sleep 이루어짐 // gen 은 for loop 에서 생성될때 sleep 이 같이 이루어짐 즉, 호출할때까지 **대기상태**
