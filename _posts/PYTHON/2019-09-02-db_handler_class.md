---
layout: post
title: db_handler_class
categories: PYTHON

---


# 고려사항 : update, insert 파라미터 docstring 참고하도록 작성. 다른 테이블에도 용이하게 사용할 수 있도록 호환성 높게 작성하기.

        import pymysql

        class db_handler:

            def __init__(self):
                self.db = pymysql.connect(host='localhost', user='root', password='50174397',
                                db='users', charset='utf8')
                self.cursor = self.db.cursor()

            def commit(self):
                self.db.commit()

            def close(self):
                self.db.close()


            def make_insert_sql(self, table_name, values):
                insert_sql = "insert into "+table_name+" values("

                for value in values:
                    insert_sql += value+","

                # change , -> )
                insert_sql = insert_sql.rstrip(",") + ")"

                return insert_sql

            def make_delete_sql(self, table_name, where):
                return "delete from "+table_name+" where "+where

            def make_select_sql(self, table_name, where):
                return "select * from "+table_name+" where "+where


            def insert_sql(self, table_name, values):
                self.sql_execute(self.make_insert_sql(table_name, values))
                self.commit()
                self.close()

            def delete_sql(self, table_name, where):
                self.cursor.execute(self.make_delete_sql(table_name, where))
                self.commit()
                self.close()

            def select_sql(self, table_name, where):
                self.cursor.execute(self.make_select_sql(table_name, where))
                seleted_data = self.cursor.fetchone()
                self.close()
                return seleted_data


        """
        =======================
        TEST
        =======================
        """

        db = db_handler()
        print(db.select_sql("user_list", "uid=61"))

        db = db_handler()
        db.delete_sql("user_list", "uid=61")

        db = db_handler()
        print(db.select_sql("board", "board_n=11"))

        db = db_handler()
        db.delete_sql("board", "board_n=11")
