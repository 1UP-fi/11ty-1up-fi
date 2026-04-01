---
title: Posts
description: This page lists all the posts that have been written for 1UP.fi.
layout: feed
---
# Posts

Here you can find all the posts that have been written thus far;<br>
Alternatively, you can [subscribe](feed:/feed.xml)
with your aggregator of choice.

<ul>
{% for post in collections.posts reversed %}
<li>
<h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
<p>{{ post.data.subtitle }} &mdash; {{ post.date | date_to_string }} &mdash; <a href="{{authors[post.data.author].url}}">{{ post.data.author }}</a></p>
{{ post.page.excerpt }}
</li>
{% endfor %}
</ul>
