---
layout: post
title: EnableHTTPS
categories:
- blog
---

1. Go to https://letsencrypt.org/ 
2. Hit the **Get started** button
3. Go to https://certbot.eff.org/
4. Choose the software and the system you are using   ( my case - Nginx on Debian 9 (stretch) )

* Error 
- E1: The value 'stretch-backports' is invalid for APT::Default-Release as such a release is not available in the sources
- E1 -> https://backports.debian.org/Instructions/   = sudo nano /etc/apt/sources.list.d/source.list -> ADD deb http://deb.debian.org/debian stretch-backports main


 * sudo cat /etc/nginx/sites-enabled/flaskblog -> server_name : [domain]
 * sudo certbot --nginx -d www.foxlee-p.ga 
