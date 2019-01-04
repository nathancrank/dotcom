---
layout: post
title: Cracking Longer Passwords with John The Ripper
tag: security
---

Sometimes, I'm too clever for my own good. Then I have to do extra work to solve a problem created by that ever-present jackass, my past self. Anyways, here's the lesson of one of those moments: how to make John the Ripper work on longer passwords.
<!--more-->

Recently, I underwent the vaguely-yearly ritual of erasing my Mac in a fit of paranoia and then reinstalling "only the essentials".

Like a good computer person, I used long, strong passwords and strong encryption. I used a MacGPG derived solution to encrypt these passwords in a safe storage solution, not on any cloud storage.

And after doing this oh-so-smart thing, I promptly forgot my oh-so-clever GPG password.

Well shit.

Ok, fine enough. I wrote a little shell script to start going through all possible passwords between my two best guesses at a high bound and low bound of character count. It generated them, then passed it into GPG to unlock the file. On my 2011 Macbook Air, this speed was somewhere in the neighborhood of 2-3 guesses a second. And at well above 24 characters long, with a character set of around 70 potentials, this was not going to probably ever finish. The sun would probably collapse before this Macbook Air would finish cracking this password.

So I decided to look into alternatives. I used John the Ripper back in the day to tear through a few passwords, so I decided to revist it. There is now [a community version called Jumbo](https://github.com/magnumripper/JohnTheRipper), that includes support for a huge range of password types and sports a number of other improvements and experiments.

But, and this is important, it doesn't do incremental passwords longer than 24 characters in length.

So you have to recompile it, changing CHARSET_LENGTH to whatever you want (I chose 60) in src/params.h before compiling it.

This breaks all of the charset files included. So before you recompile it, do yourself a favor and crack a bunch of simple password pairs so that you can fill your john.pot file. Then recompile John. Then run ./makechr from the same folder as john. Now, you can crack long passwords.

Do be aware that cracking passwords above 24 characters using an incremental attack is most likely futile regardless of what hardware you have access too. I'm not optimistic that this will get me much further with my issue by itself. But now that John can handle larger passwords, I can move on to working with it's other features like filters, custom charsets and other cracking methods. I know a number of things about the passwords probable structure, so I can probably help John not waste so much time going through every possibility.

It's currently maxing out at a pace of about 25 passwords a second in a Kali Linux VM with the VM settings maxed out, a much more respectable pace than my shell scripts 2-3, but still not much in the scheme of things. So because I'm not completely right in the head, I just bought a used HP Proliant server on eBay that will let me offload this work from my Air and perform a lot more calculations through its dual quad-core Xeons and disgusting amount of RAM. I guess I'll post about what I do with that.