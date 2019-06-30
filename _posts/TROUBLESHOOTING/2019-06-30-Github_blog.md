---

layout: post
title: Github_blog
categories: TROUBLESHOOTING

---
 
 2019-06-30-Github_blog.md

 > # Error 
* Index.html 파일 내 특정 카테고리만 출력 시 if문 문법 에러 


       <ul id="blog-posts" class="posts">  
           for post in site.posts
               if post.categories contains "blog"
                   <li><span>{{ post.date | date_to_string }} &raquo;</span><a href="{{ post.url }}">{{ post.title }}</a></li>
               endif
           endfor
       </ul>



 > # Time spent to solve the issue	: 1 day

 > # Link	
* https://stackoverflow.com/questions/26661569/how-do-i-create-an-if-statement-based-on-a-jekyll-category


 > # Tried	
* (x) if post.cateories == blog 




 > # Wokred 
* if post.categories **contains** "blog"

