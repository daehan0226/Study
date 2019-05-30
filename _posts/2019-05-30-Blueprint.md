---
layout: post
title: Blueprint
categories:
- blog
---

2019-05-30-Blueprint.md

        english
        ├── run.py                      1
        ├── env2
        ├── requirements.txt
        └── english
            ├── __init__.py             2
            ├── config.py               3
            ├── models.py
            ├── audio  
            │   ├── __init__.py
            │   ├── form.py
            │   └── routes.py
            ├── main
            │   ├── __init__.py
            │   └── routes.py
            ├── static
            │   ├── as.mp3
            │   ├── as.wma
            │   ├── es.json
            │   ├── main1.css
            │   ├── main.css
            │   ├── meaning.json
            │   ├── sentences.json
            │   └── test1.mp3
            ├── templates
            │   ├── audio.html
            │   ├── audio_list.html
            │   ├── errors
            │   │   ├── 403.html
            │   │   ├── 404.html
            │   │   └── 500.html
            │   ├── home.html
            │   ├── layout.html
            │   └── verb.html
            └── verb
                ├── form.py
                ├── __init__.py
                └── routes.py


* (1)

        from english import create_app

        app = create_app()

        if __name__ == '__main__':
            app.run(debug=True) # , host='0.0.0.0', port=5001

* (2) 

        from flask import Flask
        from english.config import Config
        from flask_restful import Api
        from random import shuffle
        from english.models import get_verbs

        def create_app(config_class=Config):
            app = Flask(__name__)
            app.config.from_object(Config)
            app.config['SESSION_TYPE'] = 'filesystem'
            UPLOAD_FOLDER = 'static/'
            app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

            from english.main.routes import main
            from english.verb.routes import verb_b
            from english.audio.routes import audio_b
            from english.models import models

            app.register_blueprint(main)
            app.register_blueprint(verb_b)
            app.register_blueprint(audio_b)
            app.register_blueprint(models)

            @app.context_processor  # verbs, n = global var
            def context_processor():
                verbs = get_verbs()
                shuffle(verbs)
                n = len(verbs)
                return dict(verbs=verbs, n=n)

            return app

* (3)

        import os

        class Config:
            secret_key = 'super secret key'

