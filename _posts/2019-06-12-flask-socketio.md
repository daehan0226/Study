---
layout: post
title: flask-socketio
categories:
- blog
---

2019-06-12-flask-socketio.md



* https://flask-socketio.readthedocs.io/en/latest/#deployment

* Gunicorn Web Server
* An alternative to socketio.run(app) is to use gunicorn as web server, using the **eventlet or gevent** workers. For this option, eventlet or gevent need to be installed( **pip install gevent** in virtualenv ) , in addition to gunicorn. The command line that starts the eventlet server via gunicorn is:

* **gunicorn --worker-class eventlet -w 1 module:app**
* If you prefer to use gevent, the command to start the server is:

* **gunicorn -k gevent -w 1 module:app**
* When using gunicorn with the gevent worker and the WebSocket support provided by gevent-websocket, the command that starts the server must be changed to select a custom gevent web server that supports the WebSocket protocol. The modified command is:

* gunicorn -k geventwebsocket.gunicorn.workers.GeventWebSocketWorker -w 1 module:app
* In all these commands, module is the Python module or package that defines the application instance, and app is the application instance itself.

* Due to the limited load balancing algorithm used by gunicorn, it is not possible to use more than one worker process when using this web server. For that reason, all the examples above include the -w 1 option.
