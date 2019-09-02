---
layout: post
title: db_handler_class
categories: PYTHON

---


# 고려사항 : update, insert 파라미터 docstring 참고하도록 작성. 다른 테이블에도 용이하게 사용할 수 있도록 호환성 높게 작성하기.
# 모든 values 값을 넣지 않고 일부 데이터(일부 칼럼)만 넣을 시 사전으로 보내기

        
        import pymysql

        class db_handler:

            def __init__(self):
                self.db = pymysql.connect(host='localhost', user='root', password='50174397',
                                db='users', charset='utf8')
                self.cursor = self.db.cursor()
                #self.table_name = table_name

            def commit(self):
                self.db.commit()

            def close(self):
                self.db.close()

            def make_insert_sql(self, table_name : str, values : list):
                '''
                :param values: same as columns
                '''
                insert_sql = "insert into "+table_name+" values("

                for value in values:
                    insert_sql += value+","

                # change , -> )
                insert_sql = insert_sql.rstrip(",") + ")"

                return insert_sql

            def make_delete_sql(self, table_name : str, where : str):
                return "delete from "+table_name+" where "+where

            def make_select_sql(self, table_name : str, where : str):
                return "select * from "+table_name+" where "+where

            def make_update_sql(self, table_name : str, values : list, where : str):
                update_sql = "update "+table_name+" set "

                for value in values:
                    for key, value in value.items():
                        update_sql += key+"="+value+","
                        print(key, value)

                update_sql = update_sql.rstrip(",")+" where "+where
                print(update_sql)
                return update_sql

            def update_sql(self, table_name, values, where):
                self.cursor.execute(self.make_update_sql(table_name, values, where))
                self.commit()

            def insert_sql(self, table_name : str, values : str):
                self.cursor.execute(self.make_insert_sql(table_name, values))
                self.commit()
                #self.close()

            def delete_sql(self, table_name : str , where : str):
                self.cursor.execute(self.make_delete_sql(table_name, where))
                self.commit()
                #self.close()

            def select_sql(self, table_name : str, where : str):
                self.cursor.execute(self.make_select_sql(table_name, where))
                seleted_data = self.cursor.fetchone()
                #self.close()
                return seleted_data


        """
        =======================
        TEST
        =======================
        """

        db = db_handler()

        # print(db.select_sql("user_list", "uid=60"))
        # db.delete_sql("user_list", "uid=61")
        # print(db.select_sql("board", "board_n=12"))
        # db.delete_sql("board", "board_n=12")

        data = [ "101","6"]
        db.insert_sql("test", data)

        db.update_sql("test", [ {'number' : '9119'}], 'test_id=2')

        db.close()



