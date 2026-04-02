---
permalink: /about/index.html
title: About
subtitle: Important information about the site
author: 1UP
date: 2025-12-31
---

This page provides an overview of the website and the content you can expect to
find --- such as articles or software tools. As the primary --- *and as of
writing, the only* --- author, I will also be giving a brief introduction of
myself and my values so that you all can get to know me better. Finally there
will be important licensing information, which you should take a look at if you
are planning to use or redistribute content found on this website.

<!--endx-->

## Website

This site is intended to be a lightweight kitchen sink[^1] for all my future
programming projects. I will also be rewriting older projects to be more
lightweight and accessible; As I am not entirely satisfied with how sluggish or
unintuitive my older projects have been, this site is essentially a chance
to mend that problem.

In addition I will start writing articles on technology as well as technical
write-ups when the situation calls for it; **None** of this content will be
written with AI. So if you see any em dashes,[^2] rest assured that those were
all deliberately and lovingly hand-placed.

If those types of things sound interesting to you, then stick around and explore
at your leisure. None of the annoyances of the modern web will bother you here,
so feel free to keep your ad blocker turned on, and if all you're here for is
the articles then feel free to disable JavaScript as well.
Alternatively, you can [subscribe]({{ site.feed }})
with your aggregator of choice.

*[AI]: Artificial Intelligence

## Author

Greetings!

I'm an ICT engineer by trade and have been actively programming since I was in
elementary school. If you couldn't guess from the domain name, I am based in
Finland --- the nation that brought you the guy that brought you Linux.
Though I am not planning to translate the contents of this site into Finnish
anytime soon, so don't hold your breath.

I am very passionate about all things technology; Hence I have some strong
opinions about what the web should be like --- *which it isn't* --- but that's
neither here nor there. In my free time when I'm not programming I'm probably
playing TTRPGs or video games.
I'm also extremely fond of astronomy and linguistics, though I'm not well
versed in either.

Hopefully that's a sufficient introduction for anyone interested. I'm not too
fond of talking about myself at length; Doing that feels a tad egotistical and
I'm not the type to share much about myself.

{% assign author = authors[author] %}
Regards, [@{{ author.bsky }}](https://bsky.app/profile/{{ author.bsky }}){: rel="author"}.

*[TTRPGs]: Tabletop Roleplaying Games

## License

> I have chosen to stick with "All rights reserved" as this site is quite personal.
<br>
> Specific tools available on this site may possess more relaxed licenses, if explicitly stated.

{% include "LICENSE.txt" %}

[^1]: <dl><dt>Everything but the kitchen sink</dt><dd>(idiomatic) Almost everything, whether needed or not.</dd></dl>

[^2]: See Wikipedia on the [usage of em dashes in AI-generated text](https://en.wikipedia.org/wiki/Dash#Usage_in_AI-generated_text) for more info.
