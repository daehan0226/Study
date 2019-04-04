---
layout: post
title: Python_Crawling_Pymysql
categories:
- blog
---

< ##Python


# Crawling ( selenium, BeautifulSoup )
- - -

        from selenium import webdriver
        from bs4 import BeautifulSoup
        import pymysql

        driver = webdriver.Chrome('chromedriver_win32\chromedriver')
        driver.implicitly_wait(3)
        driver.get('https://www.google.com/?tbm=pts')
        driver.find_element_by_name('q').send_keys("자기부상")
        driver.find_element_by_xpath('//*[@id="lga"]').click()  #자동완성 없애기 위해 바탕 클릭
        driver.find_element_by_xpath('//*[@id="tsf"]/div[2]/div/div[3]/center/input[1]').click()
        # 일단 테스트로 하나만, range 변경 필요!
        t = []
        da = []
        for i in range(1, 2):
            driver.find_element_by_xpath('//*[@id="rso"]/div/div/div[{0}]/div/div/div[1]/a/h3'.format(i)).click()
            html = driver.page_source
            soup = BeautifulSoup(html, 'html.parser')
            title = soup.find('h1', {'id' : 'title'})
            x = title.text
            t.append(x)
            #abstract = soup.find('abstract')
            #abs = abstract.text
            date = soup.find('div', {'class' : 'publication style-scope application-timeline'})
            da.append(date.text)
            print(t)
            print(da)
# * EXTRACTING THE RIGHT INFORMATION, INSERTING DATA FROM INTERNET TO DATABASE(TABLE);
- - -
# Pymasql (sql.py)
- Using pymysql library / Collecting datas
        import pymysql

        t = ["ART1", "ART2", "ART3", "ART4", "ART5", "ART6", "ART7"]
        p_date = [20190401, 20190402, 20190403, 20190404, 20190405, 20190406, 20190407]
        db = pymysql.connect(host='localhost', user='root', password='50174397', db='patent', charset='utf8')
        cursor = db.cursor()
        sql = '''
                    CREATE TABLE IF NOT EXISTS TABLENAME_1 (
                           id INT UNSIGNED NOT NULL AUTO_INCREMENT,
                           art VARCHAR(20) NOT NULL,
                           publication_data INT NOT NULL,
                           etc VARCHAR(10) NOT NULL,
                           PRIMARY KEY(id)
                    );
                '''
        cursor.execute(sql)

        for i in range(8):
            sql = '''
                        INSERT INTO TABLENAME_1 (art, publication_data, etc) VALUES( '%s', '%s', 'None')
            ''' % (t[i-1], p_date[i-1])
            cursor.execute(sql)
            db.commit()
        db.close()

- - - 
> # ::: OUTPUT = SELECT?? - ERROR  pymysql.err.InterfaceError: (0, '')

- - -


