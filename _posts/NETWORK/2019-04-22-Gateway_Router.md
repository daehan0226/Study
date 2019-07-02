---
layout: post
title: Gateway, Router
categories: NETWORK

---

> # Gateway 

* A network gateway joins two networks **so the devices on one network can communicate with the devices on another network**. 
* Without gateways, you couldn't be able to access the internet, communicate and send data back and forth.
* A gateway can be implemented completely in software, hardware, or a combination of both.
* Because a network gateway by definition appears at the edge of a network, related capabilities such as firewalls and proxy servers tend to be integrated with it.

* It connects your local area network (LAN) and all the devices on it to the internet and from there to wherever the devices want to go. 

- Types of network gateways in use include:
1. On home networks and in small businesses, a broadband router typically serves as the network gateway. It connects the devices in your home or small business with the internet. A gateway is the most important feature of a router. Routers are the most common type of gateways.
2. Some small businesses configure a computer to serve as the gateway to the internet, rather than use a router. This method requires two network adapters — one connected to the local network and one connected to the internet.


> # What is the difference between a router and a gateway? 
* Routers send data to a specific location based on a address for the network segment. 
* The benefit is the ability for a router to search routing tables and find the shortest path to the destination. 
* The downside to routers is that they are protocol dependent and therefore can only route data between network segments using the same protocol. 
* Today this is a moot because everyone uses TCP/IP and has an open architecture. 
* This is why, for example, data can be sent between a Windows NT network and a Netware network.

> # Here's how a router works: 
1. When it receives a packet and sees a MAC address (hardware address) that is not on the local segment, it strips away the MAC address, looks at the IP address (software address), searches its routing table, and then sends the packet based on the IP address to the router that's connected to the segment that contains that address.

- - -
* Gateways are network points that acts as an entrance to another network. 
* On the Internet, a node or stopping point can be either a gateway node or a host (end-point) node. 
* Both the computers of Internet users and the computers that serve pages to users are host nodes. 
* The computers that control traffic within your company's network or at your local Internet service provider (ISP) are gateway nodes.

* In the network for an enterprise, a computer server acting as a gateway node is often also acting as a proxy server and a firewall server. A gateway is often associated with both a router, which knows where to direct a given packet of data that arrives at the gateway, and a switch, which furnishes the actual path in and out of the gateway for a given packet.
