---
layout: post
title: Python_time
categories:
- blog
---
2019-06-19-Python_time.md



    from pytz import timezone
    from datetime import datetime

    fmt = "%Y-%m-%d %H:%M:%S"
    KST = datetime.now(timezone('Asia/Seoul'))  // Local time in Korea
    x = KST.strftime(fmt)
    
    # local computer time
    #now = datetime.now()  
    #x = '%s-%s-%s'%(now.year, now.month, now.day)
