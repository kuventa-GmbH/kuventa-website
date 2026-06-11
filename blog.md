---
layout: default
title: Wissen
meta_title: "Wissen: OneIM-Tiefencontent | kuventa"
description: "Technische Deep-Dives zu One Identity Manager: Troubleshooting, Customizing, Performance, KI im IAM-Betrieb. Aus echter Projektarbeit."
permalink: /blog/
nav_order: 5
---

<section class="page-hero">
  <div class="container">
    <span class="eyebrow js-anim" data-anim="animate__fadeInDown" data-once="true">Wissen</span>
    <h1 class="js-anim" data-anim="animate__fadeInLeft" data-once="true">Tiefencontent statt <span class="accent">Content-Marketing.</span></h1>
    <p class="lede js-anim" data-anim="animate__fadeIn" data-once="true">Deutschsprachige technische Artikel zu One Identity Manager sind rar. Hier entsteht, was in Projekten täglich gebraucht wird: Kausalketten, Patterns, Stolperfallen. Aus echter Arbeit, nicht aus der Redaktionsplanung.</p>
  </div>
</section>

<section class="section">
  <div class="container">
    {% if site.posts.size > 0 %}
    <div class="blog-feed" style="margin-top: 0;">
      {% for post in site.posts %}
        <article class="blog-entry js-anim" data-anim="animate__fadeInUp" data-once="true">
          <a class="blog-entry-media" href="{% include helpers/internal-href.html path=post.url %}">
            <img
              src="{{ post.hero_image | default: '/assets/img/blog/professional-reviewing-documents-and-laptop-in-an.png' | relative_url }}"
              alt="{{ post.hero_alt | default: post.title }}"
              loading="lazy" />
          </a>
          <div class="blog-entry-body">
            <p class="blog-date">{{ post.date | date: "%d.%m.%Y" }}</p>
            <h2><a href="{% include helpers/internal-href.html path=post.url %}">{{ post.title }}</a></h2>
            {% if post.excerpt %}
              <p>{{ post.excerpt | strip_html | truncate: 260 }}</p>
            {% endif %}
            <a class="blog-entry-link" href="{% include helpers/internal-href.html path=post.url %}">Beitrag lesen →</a>
          </div>
        </article>
      {% endfor %}
    </div>
    {% else %}
    <div class="section-head">
      <p class="intro">Erste Artikel erscheinen in Kürze. Bis dahin: <a href="{% include helpers/internal-href.html path='/' %}">die fünf typischen OneIM-Probleme im Überblick →</a></p>
    </div>
    {% endif %}
  </div>
</section>
