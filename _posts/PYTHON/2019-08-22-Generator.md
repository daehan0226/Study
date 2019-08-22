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
            
            
        sleep...
        sleep...
        sleep...
        sleep...
        sleep...
        0
        1
        2
        3
        4
        ====================
        sleep...
        0
        sleep...
        1
        sleep...
        2
        sleep...
        3
        sleep...
        4
