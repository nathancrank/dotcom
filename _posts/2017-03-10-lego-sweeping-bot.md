---
layout: post
title: LEGO Sweeping Bot
tag: development, lego, robots
banner: "2017-03-10-lsb-banner.jpg"
---

I recently acquired a LEGO Mindstorms NXT 2 via work. The first night we had it, Emma and I built the robot from the booklet, loaded up the basic program provided, and made it drive around for a minute shooting little balls. Then, because it's LEGO, I took it apart and began work on my own robot.
<!--more-->

Initially, I wanted to replicate the Roomba's basic self-driving functionality: driving in a crooked line until colliding with something, then avoiding that object and continuing on its way. This was pretty easy and I got a basic version working the first night.  That's not to say it worked all that well. It featured a stationary distance sensor tucked into the front, and it simply couldn't detect enough objects.

{%
	include
	youtube-player.html
	id="l9Zbtu17REI"
%}

On the second evening, I added a pivoting arm to the front and moved the distance sensor there. This enabled it to sweep back and forth quickly, dramatically improving its ability to avoid.  It still got stuck under a lot of furniture that was above its view — an impact sensor on the upper portion of the arm solved this. 

{% include
	post-image.html
	image="2017-03-10-lsb-E505BDEE-C2ED-43D1-BE3E.jpg"
	alt="A front quarter view of the robot, now featuring a scanning arm and an impact sensor."
%}

At this point, it was a decent self-propelled, semi-autonomous driver. Not a good one, but a decent one. I figured as long as it was driving around, it might as well sweep. I wrapped some paper towel and felt around a few gears, plugged it into the rear right-side motor, and built a tray behind the robot to catch dirt.

{% include
	post-image.html
	image="2017-03-10-lsb-F7569689-C51C-4135-B3AD.jpg"
	alt="Rear quarter view of the robot showcasing its dirt tray."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-96488A5D-89A5-49AA-BA56.jpg"
	alt="The sweeping mechanism is two gears holding together some rolled up paper towel and some felt thats wrapped in rubber bands."
	imageSize="half"
%}

{% include youtube-player.html id="9P2SxUPruQw" %}

{% include
	post-image.html
	image="2017-03-10-lsb-D394ECBA-F055-419D-A75A.jpg"
	alt="Close up of about 12 dog hairs and some specs of dirt in the dirt tray."
	imageSize="half"
%}

With that said, after driving around a while, it did pick up a bit of dirt and dog hair. It's not efficient, but it does technically work.

This was only possible because LEGO built an incredible product that packs the power of a small development board, like an Arduino, into something anyone could use. Software for the NXT 2 feels like a relic of when it was initially offered, circa 2006, but it was clearly a well developed product at that point. It's easy to drop their action blocks onto the timeline and assemble some pretty powerful programs. The ability to select a few blocks from your entire program, then click one button and have them run on your NXT is something from which the Arduino could learn a trick or two. The software looks similar to a Scratch environment, but it definitely has its own take on the paradigm and is branded phenomally well.

{% include
	post-image.html
	image="2017-03-10-lsb-1489196389257.png"
	alt="A screenshot of the Lego Mindstorms software showing a portion of the program. Each action in the program is represented by a square thats been placed along a timeline that looks like a technic part."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-1489196396462.jpeg"
	alt="A screenshot of the inspector panel for an action within the Lego Mindstorms software."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-D5F2AD1E-12F9-4378-9018.jpg"
	alt="A Screenshot showing the entire Lego Mindstorms software window. The init routine of the sweeping program is showing."
%}

The NXT 3 looks like a really solid update, and I might have grab that. Can't wait to see what LEGO has in store for the next update.


{% include
	post-image.html
	image="2017-03-10-lsb-F58ECB54-BC24-49E1-A50A.jpg"
	alt="A close up of the pivoting sensor arm."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-35692EEC-4F08-421D-B4D7.jpg"
	alt="A close up of the tangle of wires running the robot."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-C150356A-13E1-4A3F-8BD4.jpg"
	alt="A close up of the custom tread support made from three gears."
%}

{% include
	post-image.html
	image="2017-03-10-lsb-9F3EEC7B-09B9-43F6-BD27.jpg"
	alt="A closeup of the distance sensor swung to point towards the user."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-4156345F-9802-464C-9CD1.jpg"
	alt="A close up of the distance sensor swung to point away from the user."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-IMG_3132.jpg"
	alt="A view of the robot from headon."
%}

{% include
	post-image.html
	image="2017-03-10-lsb-1489196455024.jpeg"
	alt="A close up of the dirt trays support wheel."
	imageSize="half"
%}

{% include
	post-image.html
	image="2017-03-10-lsb-1489196460547.jpeg"
	alt="A side view of the treads that move the robot."
	imageSize="half"
%}

