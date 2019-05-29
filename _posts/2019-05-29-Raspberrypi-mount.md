---
layout: post
title: Raspberrypi-mount
categories:
- blog
---
Raspberrypi-mount


1. sudo -s
2. fdisk -l | grep sda

        Disk /dev/sda: 29.8 GiB, 32018268160 bytes, 62535680 sectors
        /dev/sda1          32 62535679 62535648 29.8G  c W95 FAT32 (LBA)

3. mkdir rs_usb  * a directory to mount the usb
4. mount -t vfat /dev/sda1 rs_usb   **vfat** = FTA32방식 // IF it's NTFS, then ntfs not vfat
5. umount rs_sub   ( before unplug the usb)

* sudo echo "/dev/sda1 /mnt/usb_16gb ntfs-3g uid=pi,gid=pi 0 0" >> /etc/fstab    ======== auto mount 
