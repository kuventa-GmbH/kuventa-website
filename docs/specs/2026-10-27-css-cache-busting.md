# Spec: Cache-Busting für CSS und JS

**Status:** Geprüft (freigegeben 27.10.2026) · **Datum:** 2026-10-27 · **Betroffene Dateien:** `_layouts/default.html`

## Ziel
Nach einem Deploy sollen Besucher sofort das neue CSS/JS laden. Heute können Browser bzw. das GitHub-Pages-CDN
(Cache bis ca. 10 Min.) eine alte `site.css` ausliefern, während das HTML schon neu ist. Effekt: neue Seitenbausteine
ohne Styling (beim Review am 27.10. bei `.kpi-block` beobachtet).

## Quellen
- Review-Befund aus `2026-10-27-gruenderstory-kpis-persoenliches.md`

## Änderung
In `_layouts/default.html` an die eigenen Assets einen Versionsparameter anhängen, der sich bei jedem Build ändert:

```liquid
{% assign asset_v = site.time | date: '%s' %}
<link rel="stylesheet" href="{% include helpers/internal-href.html path='/assets/css/site.css' %}?v={{ asset_v }}" />
```

Betroffen: `fonts.css`, `animate.min.css`, `site.css`, `cookiebanner.style.css`, `cookiebanner.override.css`, `cookiebanner.script.js`.
`site.time` = Build-Zeitpunkt, also neue URL pro Deploy. Kein Plugin, keine Build-Pipeline nötig.

## Nicht im Scope
- Bilder und Schriftdateien (ändern sich selten, eigene Dateinamen bei Austausch).
- Cache-Header am Server (bei GitHub Pages nicht konfigurierbar).

## Abnahmekriterien
- [x] Build fehlerfrei (dev + `JEKYLL_ENV=production`)
- [x] Gerendertes HTML enthält `site.css?v=<zahl>`; Wert ändert sich bei neuem Build
- [x] Styles greifen lokal unverändert (geprüft auf kubo; Start und Über mich laden dieselbe site.css)

## Review (27.10.2026)
- Alle 6 eigenen Assets tragen `?v=`; lokal `?v=1793118835` → nach Rebuild `?v=1793118871`.
- Production-Build: `href="https://kuventa.de/assets/css/site.css?v=…"`.
- kubo lokal: alle Stylesheets mit Parameter geladen, `.kpi-block` greift (max-width 880px).
- jQuery von Google CDN und GoatCounter unverändert (externe, eigene Versionierung).
