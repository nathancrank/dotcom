---
layout: post
title: Introducing Marsellus the Ripper
tag: security
---

[Last time we left off]({{ site.baseurl }}{% post_url 2016-05-31-cracking-longer-passwords-with-john-the-ripper %}), I had been overly clever and locked myself out of a lot of my computing life. Consequently, I went for a deep dive into John the Ripper. Then I really lost all semblance of handling this responsibly like an adult by hopping on eBay and buying an old HP Proliant ML350 G5 to dedicate to cracking.
<!--more-->

That server has arrived, and has been dubbed Marsellus Wallace. The hardware all seems to be in great shape, and it passed the HP Diagnostics. So yeah, its a box of computer parts that works.

{% include
	post-image.html
	image="2016-06-07-mar-1465341026998.jpeg"
	caption="A bunch of old crap I own attached to Marsellus, yet another questionable, old thing I now own."
	alt="A Dell 17in LCD panel, an old Apple acryllic tub style keyboard, a 5$ logitech USB mouse, an old broken Apple mouse pad, and the HP Proliant ML350 G5."
%}

I've installed FreeBSD and WindowMaker on it, which if I say so myself, makes for a pretty nice little setup. It's a little like using NeXTSTEP, except in 2016, with programs that are useful in 2016. It's been fun to tinker with, and I have most definitely wasted too much time tinkering with it.

But let's move on to how I'm using it to break into my own stuff.

I've been having trouble getting John the Ripper to compile via the FreeBSD ports system. So for the time being, I've installed it using pkg install instead. I've also installed the Johnny UI to just make things easier on myself. Yeah, I could do it through the terminal, just like I could have typed this up in vim, but I don't hate myself.

To fill up the john.pot file this time I'm taking a different, hopefully much better approach. Instead of just making a ton of user/pass pairs in GPG by hand, which was probably dumb to do in the first place, I'm going to crack a bunch of the 6+ million hashes recently dumped from [LinkedIn](http://arstechnica.com/security/2016/06/how-linkedins-password-sloppiness-hurts-us-all/). The dump I found online doesn't contain usernames, which is probably for the best as I don't want to break into other people's stuff, I just want to train my computer.

I've also put together a new dictionary, containing several wordlist I found, including the infamous yourock.txt. [Skull Security](https://wiki.skullsecurity.org/Passwords) has a good number of other dictionaries as well. I've concatenated a large number of them, in a particular order, filtering out dupes. By no means is the one I've made amazing, but its more comprehensive than the one built into john, and it's good enough for my purposes.

I've loaded all of that into john and let it go. In the last roughly 18 hours it's cracked a little over 35,000 passwords.

I now need to go solve for building John on FreeBSD via ports with OpenMP support. The only thing I've found so far that's been helpful is that Clang doesn't support OpenMP, so GCC would need to be used. I've set it to use GCC5, but I'm still having issues building. Being limited to two cores for cracking is really holding Marsellus back. Once I solve that, I can recompile, rebuild charsets with a much better john.pot file, and start cracking my not so short, no so remembered, password.

Even if I never crack the stupid password, at least I've had some fun?
