---
layout: post
title: logging not print
categories:
- blog
---

* https://www.pylenin.com/blogs/python-logging-guide/
* https://chortle.ccsu.edu/java5/Notes/chap86/ch86_6.html

* Reasons
  * Printing does not provide us with the **timestamp** of an error
  * Printing to console is bad practice for large scale applications 
  * Its not possible to save print messages to every kind of file
    * When you print messages, it is first converted to text strings. 
    * You can use the file argument in print to save your messages to a file. 
    * However, it must be an object with a write(string) method. Therefore it is not possible to write message to binary files.
  * Difficult to categorize print statements - Debug, info, warning and etc
  
  
  
  
* Why Binary Files are Needed
Most digital data is stored in binary files. Pure text files are somewhat rare (probably less than 2% of the data in the world). There are several reasons why binary files are used.

I. Input and output are much faster using binary data. Converting a 32-bit integer to characters takes time. Not a great deal of time, but if a file (such as an image file) contains millions of numbers the accumulated conversion time is significant. Computer games would slow to a crawl if their data were stored in character form.

II. A binary file is usually very much smaller than a text file that contains an equivalent amount of data. For image, video, and audio data this is important. Small files save storage space, can be transmitted faster, and are processed faster. I/O with smaller files is faster, too, since there are fewer bytes to move. A DVD would not have room enough to store a movie if the data were stored in character format.

III. Some kinds of data can't easily be represented as characters. For example, the bytecodes of a Java class file or the machine language of an executable file. You may not usually think of this as data, but of course, it is. The Java compiler reads an input file (a source file) and writes a binary data file containing its results (the bytecode file).

IV. And almost never is a human going to look at the individual data samples, so there is no reason to make it human-readable. For example, humans look at the entire picture of a GIF file, and have little interest in looking at the individual pixels as numbers. Sometimes a programmer or scientist needs to do this, perhaps for debugging or scientific measurements. But these special occasions can use hex dumps or other specialized programs.
