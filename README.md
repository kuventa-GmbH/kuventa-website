# kuventa.de — Website

Jekyll-Site der kuventa GmbH. Relaunch Juni 2026: Engineering für One Identity Manager + kubo.

## Quellen / Vorgaben
- `docs/kuventa Website-Vorlage.html` — verbindliches Design System v2.0 (Tokens, Komponenten)
- `docs/kuventa-website-texte-2026-06.md` — Komplett-Texte aller Seiten (Du-Form)
- `docs/goatcounter-analytics.md` — Analytics-Standard inkl. Event-Namenskonventionen

## Lokal starten
```bash
eval "$(rbenv init - zsh)"
bundle install
bundle exec jekyll serve
```

Dann `http://127.0.0.1:4000/` öffnen.

## Struktur
- `_layouts/default.html` — globale Shell (Head, GoatCounter nur in production)
- `_layouts/post.html` — Wissen-Beiträge
- `_layouts/redirect.html` — Meta-Refresh-Weiterleitungen
- `_includes/navbar.html` / `footer.html` — Navigation (über `nav_order` der Seiten) und Footer
- `assets/css/site.css` — komplettes Styling, Tokens 1:1 aus der Design-Vorlage
- `assets/fonts/` — Satoshi lokal gehostet (gewichtsbasiert, DSGVO-freundlich)
- `redirects/` — Stubs für alte URLs (`/identity-assessment/` → `/leistungen/`, RAG-Seiten → `/kubo/`, `/beraterprofil/` → CV-PDF, …)
- `_posts/` — Wissen-Beiträge (URL-Schema `/blog/...` beibehalten, Nav-Label „Wissen“)

## Seiten
Start `/` · kubo `/kubo/` · Leistungen `/leistungen/` · Referenzen `/referenzen/` (anonymisiert bis Freigabe) · Wissen `/blog/` · Über kuventa `/ueber-uns/` · Kontakt `/kontakt/`

## Neue Seite anlegen
```yaml
---
layout: default
title: Kurzer Nav-Titel
meta_title: "SEO-Titel | kuventa"
description: "Meta-Description."
permalink: /meine-seite/
---
```

## Analytics-Events
CTAs tragen `data-goatcounter-click` nach dem Standard aus `docs/goatcounter-analytics.md`
(`conversion/book-call`, `conversion/contact`, `navigation/demo`, `feature/mcp`, …).

## Offene Punkte vor Go-Live (aus den Text-Vorgaben)
1. Schriftliche Referenz-Freigaben (dmTECH, Aveniq, SPIEGEL) — dann Referenzen-Seite auf echte Namen umstellen
2. Kundenzitate einholen (je 2 Sätze: Problem → warum kuventa → Ergebnis)
3. Beraterprofil-PDF (`assets/files/cv.pdf`) aktuell halten — `/beraterprofil/` leitet darauf um
4. Preisangaben synchron halten mit copilot.kuventa.de (Pilot 4.900/12.500 €, ab 2.000 €/Monat)
