---
layout: post
title: Failing to bring TV to Fallout
tag: video games
banner: "2016-12-27-ftv-1489196558179.jpeg"
alt: "Programming the red subpixels of the TV."
---

I've spent a lot of time in Fallout 4. Like enough that I'm surprised I'm not single. When the Wasteland Workshop DLC was released, I got very lost in it. The logic gates seemed to make possible potentially interesting things in game. Some people got pretty creative and implemented [half-adders and built full calculators](https://www.youtube.com/results?search_query=fallout+4+half-adder). For some reason the fact that some people could create calculators gave me the confidence to create a TV. Why? Who knows.
<!--more-->

To me, Starlight Drive-in was an ideal place for the TV. So I set out to create a giant display in game, that I could display a basic 10 frame animation on.

{% include
	post-image.html
	image="2016-12-27-ftv-1489196497361.jpeg"
	caption="Testing a memory circuit for a single pixel's buffer."
	alt="One pixel lit in the left corner of the display. The pixel is a 3x3 grid of screens, arranged in columns of red, green, and blue. In the foreground are testing switches used to control the binary input for the single pixel."
%}

Something I should mention is I have a PS4, and did all of this before the release of mods. This was all done with built-in and DLC settlement items. I defeated settlement sizes using a few different cheats that have slowly been disabled by patches. All items necessary to build anything were purchased legitimately in-game. All of this took more time than I should admit.

So I built a TV, as you can see above. The TV is made up of 144 pixels: 16 horizontally, 9 vertically. Each pixel is built of 9 sub-pixel units: 3 red, 3 green, 3 blue. You can see the sub pixels below as I programmed them. Each pixel would be backed by a simple 3 bit buffer, each bit storing each sub-pixel color. This 432bit display buffer would then ideally be connected to a timing bus, a super basic memory I/O controller, a basic programmer, and a 4.38kilobit memory register to store video frames (3bits per frame per pixel, 6 bits per frame for stereo sound). The stereo sound was achieved by storing 6 extra bits, that represent two notes, one left channel, one right channel.

{% include
	post-image.html
	image="2016-12-27-ftv-Fallout+4_20160630214003.jpg"
	alt="All the red subpixels turned on."
	size="third"
%}

{% include
	post-image.html
	image="2016-12-27-ftv-Fallout+4_20160630223351.jpg"
	alt="All the green subpixels turned on."
	size="third"
%}

{% include
	post-image.html
	image="2016-12-27-ftv-Fallout+4_20160630230710.jpg"
	alt="All the blue subpixels turned on."
	size="third"
%}

Wiring everything was a lot of fun. By which I mean it was a real pain. Especially once the PS4's memory limits were being pushed. I quick saved quite frequently.

{%
	include
	youtube-player.html
	id="6RjIPHn20zI"
	caption="Wiring is so much fun."
%}

And then I realized I left no space for any real circuitry to hold the buffer, so I removed everything and rebuilt the TV in a big box.

{% include
	post-image.html
	image="2016-12-27-ftv-Fallout+4_20160720191115.jpg"
	caption="Reprogramming the sub pixels..."
	alt="Programming red subpixels in one big batch."
%}

{% include
	post-image.html
	image="2016-12-27-ftv-1489196564114.jpeg"
	caption="Wiring the second time is even more fun."
	alt="Wiring for programming subpixel columns. Hundreds of wires extend from two power poles into subpixels."
%}

And here is where the real fun happens. I began work on the basic memory circuit. In retrospect, I should have done this prior to wiring that giant display, but you live, you learn, you get Luvs.

The basic idea is that there are two input switches, one for controlling writing, and one for controlling if the bit is on or off. If the write switch is off, the stored bit cannot be changed. The write switch would be controlled by the timing bus eventually, switching on for every other timing pulse. The data switch is set while the write switch is off. The grid of images below shows how the circuit works. iCircuit is an amazing app by the way.

{% include
	post-image.html
	image="2016-12-27-ftv-IMG_2519.png"
	alt="A circuit representing a memory circuit. Data and Write switches connect thru logic gates and can *remember* the state of the data switch from the last time the write switch was triggered. In this image, both switches are off, and the light is off."
	size="quarter"
%}

{% include
	post-image.html
	image="2016-12-27-ftv-IMG_2526.png"
	alt="A circuit representing a memory circuit. Data and Write switches connect thru logic gates and can *remember* the state of the data switch from the last time the write switch was triggered. In this image, the data switch is off and the write switch is on, resulting in the light being off."
	size="quarter"
%}

{% include
	post-image.html
	image="2016-12-27-ftv-IMG_2527.png"
	alt="A circuit representing a memory circuit. Data and Write switches connect thru logic gates and can *remember* the state of the data switch from the last time the write switch was triggered. In this image, both switches are on, resulting in the light being lit."
	size="quarter"
%}

{% include
	post-image.html
	image="2016-12-27-ftv-IMG_2530.png"
	alt="A circuit representing a memory circuit. Data and Write switches connect thru logic gates and can *remember* the state of the data switch from the last time the write switch was triggered. In this image, the data switch is still on, but the write switch is off, leaving the ligth still on, thus remembering the last write state."
	size="quarter"
%}

{% include
	post-image.html
	image="2016-12-27-ftv-1489196582450.jpeg"
	alt="Logic games inside the tv wired up into the memory circuit for testing."
%}

But here's the bad news, and here is why the settlers of my Fallout community will not get to watch the glory of a 10 second gif: Logic Gates in Fallout 4 are completely broken. The basic issue is that it treats the electrical circuit as on or off, when in real electronics, its high or low. Essentially it's two different binary systems at play, [1,0] vs [1,-1]. Anything that loops/buffers will not work. And even the much discussed online AND buffer hack will not resolve this. No matter how many ANDs you shove in there. Trust me.

{% include
	post-image.html
	image="2016-12-27-ftv-1489196588766.png"
	caption="This doesn't work in Fallout 4's Logic Gate system."
	alt="A working memory circuit illustrated."
%}

{% include
	post-image.html
	image="2016-12-27-ftv-1489196594513.jpeg"
	caption="As you can see, this is broken."
	alt="A screenshot showing an and gate with two on inputs that is outputting nothing, which is obviously wrong."
%}

So that's it. With that failure, the project comes to an end. Unless Bethesda decides to fix it, it won't work. And I don't see them fixing it. 

{% include
	post-image.html
	image="2016-12-27-ftv-1489196599217.jpeg"
	caption="Sad empty seating that will remain empty, due to technical difficulties..."
	alt="Three movie theater seats facing the screen sitting alone in the middle of the parking lot."
%}
