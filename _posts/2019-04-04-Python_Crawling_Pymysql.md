---
layout: post
title: Python_Crawling_Pymysql
categories:
- blog
---

< ##Python

---
# Crawling ( selenium, BeautifulSoup )




# Pymasql
    import pymysql

    t = "자동부상의 기술"
    p_date = 20190402
    db = pymysql.connect(host='localhost', user='root', password='50174397', db='patent', charset='utf8')
    cursor = db.cursor()
    sql = '''
                CREATE TABLE IF NOT EXISTS patent_list0404 (
                       id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                       title VARCHAR(20) NOT NULL,
                       publication_data VARCHAR(10) NOT NULL,
                       etc VARCHAR(10) NOT NULL,
                       PRIMARY KEY(id)
                );
            '''
    cursor.execute(sql)
    db.commit()

    for i in range(10):
        cursor = db.cursor()
        sql = '''
                    INSERT INTO patent_list0404 (title, publication_data, etc) VALUES( '%s', '%s', 'None')
        ''' % (t, p_date)
        cursor.execute(sql)
        db.commit()
    #sql = "SELECT * FROM patent_list"

    #rows = cursor.fetchall()
    #for i in rows:
    #    print(i)
    db.close()
