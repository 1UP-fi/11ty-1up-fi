---
title: Index
styles:
    - href: /styles/anim.css
      media: "(prefers-reduced-motion: no-preference)"
    - href: /styles/index.css
layout: default
---
{% include "inline-logo.svg" %}

# Welcome to {{ site.title }}

Feel free to look around using the navigation at the top.
If it's your first time here the [About](/about) page may be a good place to start.

## Latest Posts:
{% assign latest = collections.posts | reverse %}
{% for post in latest limit:1 %}
[<time datetime="{{ post.date | date_to_xmlschema }}">
    {{ post.date | date_to_string }}
</time> - {{ post.data.title }}]({{ post.url }})
{% endfor %}
