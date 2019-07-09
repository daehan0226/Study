---
layout: post
title: Nodejs_mysql
categories: JS

---

 참고링크1 : https://poiemaweb.com/nodejs-mysql
 참고링크2 : https://www.opentutorials.org/course/3347/21185
 참고링크3 : https://m.blog.naver.com/PostView.nhn?blogId=wlsdml1103&logNo=221160152394&proxyReferer=https%3A%2F%2Fwww.google.com%2F
 에러(npm start) : https://techoverflow.net/2019/04/01/how-to-fix-npm-err-missing-script-start/
 
 

* cmd 
 1. npm init -y  // npm 설치
 2. npm install express
 3. npm install -S mysql  // mysql 설치 

 
 * package.json 수정
   {
    "name": "nodejs",
    "version": "1.0.0",
    "description": "",
    **"main": "express_dh.js"**,
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      **"start": "node express_dh.js"**
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "dependencies": {
      "express": "^4.17.1",
      "mysql": "^2.17.1"
    }
  }
  

        var express = require('express');
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host :'localhost',                     // ip address
            port : '3306',
            user : 'root',
            password : '50174397',
            database : 'users'
        });


        var app = express();

        app.set('port', process.env.PORT || 3000);

        app.get('/', function(req, res){
          res.send('Root');
        });

        app.get('/board', function(req, res){

          connection.query('SELECT * from board', function(err, rows) {
            if(err) throw err;

            console.log('board information : ', rows);
            res.send(rows);
          });
        });

        app.listen(app.get('port'), function () {
          console.log('Express server listening on port ' + app.get('port'));
        });



    
> run 'npm start' in the directory 
