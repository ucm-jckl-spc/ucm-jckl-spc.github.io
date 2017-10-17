---
layout: sidebar_page
title: Rhetors
permalink: /rhetors/
---

{% assign collection = site.collections | where: 'label', 'rhetors' | first %}
# {{ collection.title }}
This is some intro info about the Rhetors

{% for rhetor in site.rhetors %}
  {% assign metadata = site.data.rhetors[rhetor.slug] %}
  {% if metadata %}
  - [{{ metadata.title }}]({{ rhetor.url }})
  {% endif %}
{% endfor %}
