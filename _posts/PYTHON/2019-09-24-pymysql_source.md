---
layout: post
title: pymysql_source
categories:
- PYTHON
---



        import pymysql


        class db_handler():

            def __init__(self):
                self.conn = pymysql.connect(host='127.0.0.1', user='root', password='',
                                          db='db_test', charset='utf8')

                # connect = Connection = Connect

                # def Connect(*args, **kwargs):
                #     """
                #     Connect to the database; see connections.Connection.__init__() for
                #     more information.
                #     """
                #     from .connections import Connection
                #     return Connection(*args, **kwargs)

                # class Connection(object):
                #     _sock = None
                #     _auth_plugin_name = ''
                #     _closed = False
                #     _secure = False
                # 
                #     def __init__(self, host=None, user=None, password="",
                #                  database=None, port=0, unix_socket=None,
                #                  charset='', sql_mode=None,
                #                  read_default_file=None, conv=None, use_unicode=None,
                #                  client_flag=0, cursorclass=Cursor, init_command=None,
                #                  connect_timeout=10, ssl=None, read_default_group=None,
                #                  compress=None, named_pipe=None,
                #                  autocommit=False, db=None, passwd=None, local_infile=False,
                #                  max_allowed_packet=16*1024*1024, defer_connect=False,
                #                  auth_plugin_map=None, read_timeout=None, write_timeout=None,
                #                  bind_address=None, binary_prefix=False, program_name=None,
                #                  server_public_key=None):
                #         if use_unicode is None and sys.version_info[0] > 2:
                #             use_unicode = True

                        # def _config(key, arg):
                        #     if arg:
                        #         return arg
                        #     try:
                        #         return cfg.get(read_default_group, key)
                        #     except Exception:
                        #         return arg
                        # 
                        # user = _config("user", user)
                        # password = _config("password", password)
                        # host = _config("host", host)
                        # database = _config("database", database)
                        # unix_socket = _config("socket", unix_socket)
                        # port = int(_config("port", port))
                        # bind_address = _config("bind-address", bind_address)
                        # charset = _config("default-character-set", charset)

                self.cursor = self.conn.cursor()

                # def cursor(self, cursor=None):
                #     """
                #     Create a new cursor to execute queries with.
                #
                #     :param cursor: The type of cursor to create; one of :py:class:`Cursor`,
                #         :py:class:`SSCursor`, :py:class:`DictCursor`, or :py:class:`SSDictCursor`.
                #         None means use Cursor.
                #     """
                #     if cursor:
                #         return cursor(self)
                #     return self.cursorclass(self)

                # def __init__(self, cursorclass=Cursor):

                # class Cursor(object):

                    # def execute(self, query, args=None):
                    #     """Execute a query
                    #
                    #     :param str query: Query to execute.
                    #
                    #     :param args: parameters used with query. (optional)
                    #     :type args: tuple, list or dict
                    #
                    #     :return: Number of affected rows
                    #     :rtype: int
                    #
                    #     If args is a list or tuple, %s can be used as a placeholder in the query.
                    #     If args is a dict, %(name)s can be used as a placeholder in the query.
                    #     """
                    #     while self.nextset():
                    #         pass
                    #
                    #     query = self.mogrify(query, args)   ( mogrify = query 인코딩 )
                    #
                    #     result = self._query(query)
                    #     self._executed = query
                    #     return result

                    # def _query(self, q):
                    #     conn = self._get_db()   # connection
                    #     self._last_executed = q
                    #     self._clear_result()
                    #     conn.query(q)
                    #     self._do_get_result()
                    #     return self.rowcount

                self.dictcursor = self.conn.cursor(pymysql.cursors.DictCursor)
                self.test = "test"


            #def close(self):
            #    self.db.close()

                # def close(self):
                #     """
                #     Send the quit message and close the socket.
                #
                #     See `Connection.close() <https://www.python.org/dev/peps/pep-0249/#Connection.close>`_
                #     in the specification.
                #
                #     :raise Error: If the connection is already closed.
                #     """
                #     if self._closed:
                #         raise err.Error("Already closed")
                #     self._closed = True
                #     if self._sock is None:
                #         return
                #     send_data = struct.pack('<iB', 1, COMMAND.COM_QUIT)
                #     try:
                #         self._write_bytes(send_data)
                #     except Exception:
                #         pass
                #     finally:
                #         self._force_close()




        db = db_handler()
        print("db :", db)

        print(db.conn.ping())

        # attr = vars(db)
        # print("attr :", attr)

        #attr_db = vars(db.conn)
        #for i in attr_db:
        #    print( i, attr_db[i])

        #attr_cursor = vars(db.cursor)
        #for i in attr_cursor:
        #   print( i, attr_cursor[i])

        # create_query = "CREATE TABLE test1 ( id int, name varchar(32) )"
        # db.cursor._query(create_query)

        test_query = "Select * from test1"
        insert_query = "Insert into test1 set id=3, name='fox'"
        select_query = "Select * from test1 where name='fox'"
        # db.conn.autocommit(True) # ->  db.conn.commit()  필요 없음

        db.cursor._query(test_query)
        count = db.cursor._query(select_query)
        db.cursor._query(insert_query)

        if count >= 1:
            print("rollback!!!")
            db.conn.rollback()

        # Commit
        print("executed_query : ", db.cursor._executed)
        print("last_query :", db.cursor._last_executed)

        db.conn.commit()  # or db.conn.autocommit(True) before actual commits

        # Close
        print("connection status : ", db.conn._closed)
        db.conn.close()
        print("connection status : ", db.conn._closed)
