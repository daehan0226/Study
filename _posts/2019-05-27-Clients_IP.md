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

* Route.py

       def Get_ip_loca():
           ip=request.environ.get('HTTP_X_REAL_IP', request.remote_addr)   # ip 주소 받기
           with urllib.request.urlopen("https://geoip-db.com/jsonp/"+ip) as response:   # ip 로 위치 확인
               html = response.read()
               soup = BeautifulSoup(html, 'html.parser')
               soup=str(soup)
               data = soup[9:-1]  # 딕셔너리로 변경하기 위해 불필요한 데이터 제거
               data = data.replace('null','None')
               data_dic = eval(data) # 딕셔너리로 변경
               return data_dic['city']




* https://geoip-db.com/jsonp/"+ip
* callback({"country_code":"KR","country_name":"South Korea","city":"Seoul","postal":null,"latitude":37.5985,"longitude":126.9783,"IPv4":"223.62.212.229","state":"Seoul"})
* callback({"country_code":"KR","country_name":"South Korea","city":"Seoul","postal":null,"latitude":37.5985,"longitude":126.9783,"IPv4":"211.36.134.29","state":"Seoul"})








[참고]:https://www.x4b.net/kb/RealIP-Nginx

[Linux_'tail']:https://windfree.tistory.com/40
