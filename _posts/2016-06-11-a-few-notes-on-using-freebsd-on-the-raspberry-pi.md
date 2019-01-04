---
layout: post
title: A few notes on using FreeBSD on the Raspberry Pi
tag: development, security
---

I've recently been using [FreeBSD](https://www.freebsd.org/) on my Raspberry Pi (and anything else I can install it on) and I just wanted to share a few notes for those deciding to try it out on their Pi. There are a lot of articles out there on [why you might want to use FreeBSD](https://www.freebsd.org/advocacy/whyusefreebsd.html), so I'll leave that to smarter people than myself.
<!--more-->

- For most home projects that you can run on a PI, it probably doesn't make much of a difference if you choose between FreeBSD's current or stable branch. If you really need great stability, you probably need something better than a Raspberry Pi anyway, like anything with a hardware clock, a real power supply, a real disk interface, etc ...
- Read the whole RaspberryPi page on FreeBSD's site. If you make it to the end, there are links to download sd-card images. I did not do this initially, and instead started by using [Crochet](https://github.com/freebsd/crochet).
- Speaking of [Crochet](https://github.com/freebsd/crochet), it's a pretty cool utility. It's great for building custom images for any development board that is supported, and looks like a great tool to help with getting it up on unsupported boards as well. Just remember that compiling kernels is not a fast activity regardless of your machine.
- pkg install is fantastic on an Intel machine, because basically every port has a binary snapshot available. That is not the case on anything in the arm world. There are a lot of ports that have no binary available, and so have to be compiled instead. There are also some ports that don't work, or may pose some difficulty. The situation isn't that different from other operating systems running on these arm development boards; however, the ports system is an advantage for FreeBSD here, because it's trivial to get the source and compile most things. It's obviously not that you can't compile on other operating systems, its just that outside the BSD world, you're OS is unlikely to provide the source code and some porting help.
- Compiling takes forever on the slow little Pi. [Overclock your Pi](http://elinux.org/RPiconfig) and lower the GPU ram before you start compiling. I strongly recommend running make config-recursive before you make install. It doesn't totally solve the problem of having to babysit your compile answering config questions periodically, but it does at least remove a few more of those config screens.
- Overclocking your Raspberry Pi is still easy even without raspi-config. You can use [this guide](http://elinux.org/RPiconfig) to update the config.txt file on the sd card's FAT partition.
- Even overclocked to 950Mhz, the Pi took over a week to compile CUPs and its dependencies.
- Before using FreeBSD on the Pi you probably want to be fairly familiar with the Pi and with either FreeBSD itself, or *nix operating systems in general.
- One of the best things about FreeBSD is the FreeBSD handbook. It's an amazing resource for FreeBSD users, and honestly something that I think is integral to how nice an experience using FreeBSD is. The handbook is really well organized and is often the only thing you need to answer your question.
