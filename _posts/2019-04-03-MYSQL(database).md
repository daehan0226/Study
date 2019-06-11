---
layout: post
title: MYSQL(database)
categories:
- blog
---
# MYSQL(database)

[link-Ubuntu-mysql-install]

- MySQL is an open source **relational database management system (RDBMS)**. Its name is a combination of "My", the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for **Structured Query Language.**

- - -
- *Query language* is primarily created for creating, accessing and modifying data in and out from a database management system (DBMS). Typically, **QL requires users to input a structured command** that is similar and close to the English language querying construct.
- For example, the SQL query: SELECT * FROM
- The customer will retrieve all data from the customer records/table. ( retrieve = to get stored information from a computer )

- *Database(db)*
A database is a collection of information that is organized so that it can be easily accessed, managed and updated.

- MySQL is free and open-source software under the terms of the GNU General Public License, and is also available under a variety of proprietary licenses. MySQL was owned and sponsored by the Swedish company MySQL AB, which was bought by Sun Microsystems (now Oracle Corporation). In 2010, when Oracle acquired Sun, Widenius forked the open-source MySQL project to create MariaDB.

- MySQL is a component of the LAMP web application software stack (and others), which is an acronym for Linux, Apache, MySQL, Perl/PHP/Python. MySQL is used by many database-driven web applications, including Drupal, Joomla, phpBB, and WordPress. MySQL is also used by many popular websites, including Google (though not for searches), Facebook, Twitter, Flickr, and YouTube.

## BITNAMI
- Bitnami is a library of installers or software packages for web applications and development stacks as well as virtual appliances. 
- Bitnami WAMP Stack provides a complete **PHP, MySQL and Apache development environment** for Windows that can be launched in one click

- - -
## Start MySQL with Bitnami
- - -
1. Find manager-windows.exe (directory - C:\Bitnami\wampstack-7.1.27-1)
2. Start it and go to Manage Servers section to see if MySQL is on. If its not, start it.
3. open cmd
4-1. cd C:\Bitnami\wampstack-7.1.27-1\mysql\bin
4-2. mysql -u root -p      **meaning you are trying to connect to MsSQL shell with parameters, -u parameter specified MySQL user name, -p = --password 
4-3. enter pawword: 

5. Once you enter the password, you have logged into mysql as the root user. 

- - -
## Databases in Mysql
- - -
## Commands
    1. CREATE DATABASE *NAMEOFDATABASE; # create database named *nameofdatabase
    2. SHOW DATABASES;                  # show the existing databases
    3. USE *NAMEOFDATABASE*;            # The following commands are for this database 

- - -
### Commands - Tables
    1. CREATE TABLE *NAMEOFTABLE(            # create tale named *nameoftable
        id INT(11) NOT NULL AUTO_INCREMENT, # nameofcol datatype not/ null, 
        col2 VARCHAR(100) NOT NULL,   # not null=if a user will try to create a record with a NULL value, then MySQL will raise an error.
        COL3 TEXT NULL,               # AUTO_INCREMENT tells MySQL to go ahead and add the next available number to the id field.
        COL4 DATETIME NOT NULL,
        COL5 VARCHAR(30) NULL,
        PRIMARY KEY(id));             
* A primary key is a column or a set of columns that uniquely identifies each row in the table. You must follow the rules below when you define a primary key for a table, A table has only one primary key.

   *[datatype]*
   
    2. SHOW TABLES; # show the list of tables
    3. DESC *TABLENAME; #  describe the structure of a table
    4. **INSERT INTO *TABLENAME* (COL2, COL3, COL4, COL5) VALUES('A','B','2018-01-02','D'); # UPDATE DATA;
    4-1. **INSERT INTO *TABLENAME* (COL2, COL3, COL4, COL5) VALUES('A','A','2019-04-04','D');
    4-2. **INSERT INTO *TABLENAME* (COL2, COL3, COL4, COL5) VALUES('D','B','2017-10-11','A');
    4-3. **INSERT INTO *TABLENAME* (COL2, COL3, COL4, COL5) VALUES('B','A','2019-01-01','C');
    4-4. **INSERT INTO *TABLENAME* (COL2, COL3, COL4, COL5) VALUES('A','B','2018-12-31','D');
- - -
### Commnds - CRUD - Create, Read, Update, Delete
    #### 1. SELECT * FROM *TABLENAME; # show *all(**) from tablename
    1-1. SELECT id, col2, col3 FROM *TABLENAME*; # show only id, col2 and col3 of the table
    1-2. SELECT id, col2 FROM *TABLENAME* WHERE COL5 ="D";  # show only id, col2 of the table where col5 is D
    1-3. SELECT id, col2 FROM *TABLENAME* WHERE COL5 ="D" ORDER BY id **DESC; higher numbers goes up** 
    1-4. SELECT id, col2 FROM *TABLENAME* WHERE COL5 ="D" ORDER BY id DESC **LIMIT 1; SHOW ONLY 1**
    #### 2.
    2-1. **UPDATE TABLENAME SET** COL2="x", COL3="x" WHERE id = 2; the values of col2 and col3 changes to x where id is 2   
    2-2. **DELETE FROM TABLENAME WHERE id = 3;** delete the 3rd row

    #### 3. Join
    3-1. SELECT **TABLENAME_A.id, name, profile** FROM TABLENAME_A LEFT JOIN **TANAME_B** ON TABLE_A.authour_id = TABLE_B.id;
         =Show **id, name, frofile** from TABLE_A and **TABLE_B** by joinning TABLE_A.authour_id(col) = TABLE_B.id(col); 
         (only when TABLE_A.author_id and TABLE_B.id are same) 
  
- 3-2. why do you use join in mysql?
    Using JOINS, you can *fetch exactly the data you want from any number of tables with **just one query***, using any search parameter you chose to filter the results. MySQL can also **utilize things such as Indexes to maximize performance**, which your API code can not.
    Also, by using joins instead of multiple queries, you **maximize the placement of the calculation burden on the database**. This means you can make better use of the database's abilities to search through, filter, sort, etc.
- 3-3. SELECT TABLENAME_A.id AS new_id = the name of the col(id) will change to new_id

* ALTER TABLE user_list add points int(11) NOT NULL;
* UPDATE user_list SET points=10000; 


  
[datatype]: https://www.techonthenet.com/mysql/tables/create_table.php 
[link-Ubuntu-mysql-install]: https://grd406.blog.me/221499786832
  
