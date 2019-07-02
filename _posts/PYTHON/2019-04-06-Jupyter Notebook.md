---
layout: post
title: Jupyter Notebook
categories: PYTHON

---
## Changing working directory in jupyter notebook. [ref]

* First you need to create the config file, using cmd :  jupyter notebook --generate-config 
* Then, search for C:\Users\your_username\.jupyter folder (Search for that folder), and right click edit the jupyter_notebook_config.py.
* Then, Ctrl+F: #c.NotebookApp.notebook_dir ='' . Note that the quotes are single quotes. 
* Select your directory you want to have as home for your jupyter, and copy it with Ctrl+C, for example: C:\Users\username\Python Projects.
* Then on that line, paste it like this : c.NotebookApp.notebook_dir = 'C:\\Users\\username\\Python Projects'  
* Make sure to remove #, as it is as comment.
* Make sure to double slash \\ on each name of your path. Ctrl+S to save the config.py file !!! ( // wokred for me)
* Go back to your cmd and run jupyter notebook. It should be in your directory of choice. Test it by making a folder and watch your directory from your computer.


[ref]: https://stackoverflow.com/questions/35664972/how-to-change-working-directory-in-jupyter-notebook/49057810
