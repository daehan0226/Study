---
layout: post
title: Clients_IP
categories:
- blog
---
* 2019-05-27-Clients_IP.md
[참고]
# 

1. nginx -V  = Check the output of the next command and search for the string ngx_realip or **--with-http_realip_module**
2. sudo nano /etc/nginx/nginx.conf  in the http block add this

       set_real_ip_from x.x.x.x; #x.x.x.x is your proxy IP
       real_ip_header X-Real-IP;

3. sudo tail -f /var/log/nginx/access.log
[Linux_'tail'] - Live Tail allows you to monitor all the log data



[참고]:https://www.x4b.net/kb/RealIP-Nginx

[Linux_'tail']:https://windfree.tistory.com/40
