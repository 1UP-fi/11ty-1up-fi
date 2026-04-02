---
title: Migrated to 11ty
subtitle: Jekyll is no more
author: 1UP
date: 2026-04-01
---

I decided to pull the plug on Jekyll and migrate to 11ty after the codebase
became increasingly difficult to maintain. The difficulty was mostly due to my
attempts to extend the site beyond the constraints of the default GitHub Pages
environment; As I fell back into my comfort zone of Node.js --- the codebase
became some sort of Frankenstein's monster, with JavaScript-based tools bolted
onto the Ruby-based Jekyll. This migration allows me to focus on creating
content as opposed to fighting the architecture.

<!--endx-->

## What this means for you

The transition should be fairly seamless, though there may be some minor issues.
If you notice anything broken --- try clearing your browser's cache --- if that
doesn't work then report the issue on [GitHub]({{ site.issues }}).
If the [feed]({{ site.feed }}) stops updating, unsubscribe and resubscribe.
Finally, if you don't experience any issues, then there is no need to do
anything.

## Quick unrelated PSA

**Remember to make frequent backups!!!** I actually lost the first attempt at
migration to my own human error by permanently deleting the entire migration
right before it was finished. You're currently looking at the second attempt,
which had to be restarted from scratch.

That is to say: Don't be like me. Back up your stuff, take snapshots, have a
copy stored safely offsite or in the cloud. You'll avoid a lot of headaches in
the future that way and won't have to pull an all-nighter waiting for recovery
software to find a fraction of the stuff you lost.

## Amusing Tangent

As if this entire article wasn't already a kind of testament to my
misguidedness, I'll show you all an example of just how poorly thought out the
architecture of the site used to be. Look no further than this Liquid code
snippet for extracting different parts from an article:

{% raw %}
```liquid
{% assign author = site.data.authors[page.author] %}
{% assign parts = content | split: '<div class="footnotes" role="doc-endnotes">' %}
{% assign contents = parts[0] | split: site.excerpt_separator %}
{% assign abstract = contents[0] %}
{% assign content = contents[1] %}
{% assign footer = parts[1] | remove: '</div>' | remove: ' role="doc-endnote"' %}
{% endraw %}
```

With that, I hope you'll all enjoy the content that will be coming to this site
once I have more free time!
