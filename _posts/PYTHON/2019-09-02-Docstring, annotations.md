---
layout: post
title: Docstring, annotations
categories: PYTHON

---

# Docstring

* 문서화 클래스, 함수 바로 아래애 """ """ / ''' ''' 로 해당 클래스 또는 함수에 대한 설명

ex)


         class newclass:
             """
             zzz
             """
             def zz(self):
                 '''

                 :return:
                 '''
                 return '123'


         >>> x = newclass
         >>> x.__doc__
         '\n    zzz\n    '
         >>> x.zz.__doc__
         '\n\n        :return:\n        '



# Annotations

* 특정 함수가 받는 인자에 대한 설명(주석일뿐 코드에 영향을 주지 않음) 

ex)

         def test(par : int ) -> str:
        ...     return 'test'
        ...
        >>> test
        <function test at 0x0000014FA705C1E0>
        >>> test()
        Traceback (most recent call last):
          File "<stdin>", line 1, in <module>
        TypeError: test() missing 1 required positional argument: 'par'
        >>> test(10)
        'test'
        >>> test.__annotations__
        {'par': <class 'int'>, 'return': <class 'str'>}

        




