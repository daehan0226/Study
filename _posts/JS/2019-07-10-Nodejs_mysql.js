---
layout: post
title: Nodejs_mysql
categories: JS

---


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
