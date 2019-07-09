---
layout: post
title: Nodejs_mysql
categories: JS

---

 
  

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


