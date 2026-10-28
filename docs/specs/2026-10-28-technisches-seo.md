# Spec: Technisches SEO (Grundlage für die Google Search Console)

**Status:** Geprüft (freigegeben 28.10.2026) · **Datum:** 2026-10-28 · **Betroffene Dateien:** `_config.yml`, `_layouts/default.html`, `_layouts/post.html`, `_posts/*`, neu: `sitemap.xml`, `robots.txt`, `_includes/seo.html`, `assets/js/`, `assets/img/og/`

## Ziel
Google soll die Site vollständig und sauber erfassen, bevor die Search Console eingerichtet wird:
alle echten Seiten in einer Sitemap, keine internen Dateien öffentlich, eindeutige Titel und Beschreibungen,
gute Vorschauen beim Teilen (LinkedIn) und strukturierte Daten, die Dennis als Person mit kuventa und kubo verbinden.
Nebenbei fällt eine Datenschutzlücke weg (jQuery von Google-Servern vor der Einwilligung).

## Quellen
- Analyse von Repo und Build-Output am 28.10.2026 (Chat).
- Firmendaten: `impressum.md` (Adresse, Telefon, E-Mail, Geschäftsführer Dennis Pascal Kürschner).
- Preise: `kubo.html` (Pilot ab 4.900 €).
- Kundenregion Deutschland und Schweiz: Meta-Description von `referenzen.html`.

## Änderungen

### 1. Interne Dateien nicht veröffentlichen (`_config.yml`)
`exclude` ergänzen um `CLAUDE.md` und `assets/fonts/example.html`.
Heute sind kuventa.de/CLAUDE.md und /assets/fonts/example.html öffentlich erreichbar.

### 2. Sitemap und robots.txt (neu)
- `sitemap.xml` als Liquid-Template ohne Plugin. So funktioniert sie unabhängig davon, welche Jekyll-Version
  GitHub Pages beim Deploy nutzt. Enthält alle Seiten und Posts mit `lastmod`; ausgelassen werden Seiten mit
  `sitemap: false` (Weiterleitungen, 404) sowie Nicht-HTML-Dateien.
- `robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://kuventa.de/sitemap.xml
  ```

### 3. Blogposts: eigene Titel und Beschreibungen (`_posts/*`)
Neues Front Matter `description` je Post (heute fällt jeder Post auf die Site-Beschreibung zurück, die Search Console meldet das als Duplikat).
`<title>` der Posts bekommt den Zusatz „ | kuventa“ (im Layout, nicht pro Post).

| Post | description (Entwurf) |
|---|---|
| Audit ohne Stress | Audit angekündigt, Berechtigungslisten fehlen? Wie Identity Governance mit klaren Zuständigkeiten und festen Abläufen Compliance zum Normalbetrieb macht. |
| Die häufigsten Fehler in IGA-Projekten | Woran Identity-Governance-Projekte immer wieder scheitern, unabhängig von Branche und Größe, und wie du die typischen Fehler von Anfang an vermeidest. |
| IGA braucht saubere Rollen | „Power User“, „Admin Light“: Warum gewachsene Rollen jedes IGA-Projekt ausbremsen und weshalb Governance ein sauberes Rollenfundament braucht. |
| Nach dem Start ist vor der Arbeit | Nach dem Go-Live verliert IGA oft den Fokus und die Excel-Listen kehren zurück. Was nach dem Start passieren muss, damit Identity Governance wirkt. |
| Warum IGA mehr ist als ein IT-Projekt | Eine IGA-Software wirkt nur so gut wie ihr Zielbild. Warum Rollen, Verantwortung und Prozesse vor der Tool-Auswahl geklärt sein müssen. |
| Zugriffsrechte sind Chefsache | Accounts ausgeschiedener Mitarbeiter mit vollen Rechten: Warum Zugriffsrechte ein unternehmerisches Risiko sind und Identity Governance Chefsache ist. |

### 4. Teilen-Vorschau: Open Graph (`_includes/seo.html`, eingebunden in `default.html`)
Pro Seite: `og:type` (website / article bei Posts), `og:title`, `og:description`, `og:url`, `og:image`, `og:locale=de_DE`, `og:site_name`,
`twitter:card=summary_large_image`.
- `og:image` Standard: neues Bild `assets/img/og/kuventa-og.jpg` (1200×630, Ausschnitt aus einem bestehenden Foto von Dennis, siehe Entscheidung).
- Posts nutzen ihr Titelbild nicht (6–8 MB PNG, zu groß für LinkedIn). Das kommt mit Spec B (Bilder).
- Pro Seite überschreibbar über Front Matter `og_image`.

### 5. Strukturierte Daten (JSON-LD, ebenfalls `_includes/seo.html`)
- **Alle Seiten**: `ProfessionalService` „kuventa GmbH“: URL, Logo, Adresse Georgsplatz 1, 20099 Hamburg, Telefon, E-Mail,
  `founder` → Person Dennis Kürschner, `areaServed` Deutschland und Schweiz, `knowsAbout` One Identity Manager, Identity & Access Management, Identity Governance.
- **Über mich**: `Person` Dennis Kürschner: `jobTitle` „OneIM-Engineer und Gründer“, `worksFor` kuventa GmbH, Bild, `knowsAbout` wie oben, `sameAs` LinkedIn (siehe Entscheidung).
- **kubo**: `SoftwareApplication` „kubo“, `applicationCategory` BusinessApplication, `offers` Pilot ab 4.900 EUR, Hersteller kuventa GmbH.
  Hinweis: Google zeigt dafür ohne Bewertungen kein Rich Result. Nutzen ist die Zuordnung kubo ↔ kuventa ↔ Dennis.
- **Posts**: `BlogPosting` (Titel, Beschreibung, Datum, Autor Dennis, Herausgeber kuventa) und `BreadcrumbList` (Start › Wissen › Post).
- Bewusst **kein** `FAQPage`: Google zeigt FAQ-Rich-Results seit 2023 nur noch für Behörden- und Gesundheitsseiten.

### 6. jQuery selbst hosten (`_layouts/default.html`)
`https://ajax.googleapis.com/.../jquery/3.5.1/jquery.min.js` → `assets/js/jquery-3.7.1.min.js` (offizielle Datei von code.jquery.com, mit `?v=`).
Grund: Heute geht die IP jedes Besuchers vor jeder Einwilligung an Google, und die Datenschutzerklärung erwähnt das nicht.
Das Cookie-Banner braucht jQuery, also bleibt jQuery; nur die Quelle wechselt.

### 7. Feed verlinken
`<link rel="alternate" type="application/atom+xml">` auf `/feed.xml` im `<head>` (der Feed existiert schon, ist aber nirgends verlinkt).

## Entscheidungen (Dennis, 28.10.2026)
- [x] `sameAs` (Person): https://www.linkedin.com/in/dennis-k%C3%BCrschner-121aa6247/ ; keine Unternehmensseite.
- [x] Vorschaubild: Ausschnitt aus `photos/about/dennis.webp` (Porträt).
- [x] `jobTitle`: „OneIM-Engineer und Gründer“.
- [x] Post-Beschreibungen und Rest der Spec freigegeben.

## Nachträge während der Umsetzung (freigegeben 28.10.2026)
- **Cookie-Banner-Schrift**: `cookiebanner.style.css` lud Poppins per `@import` von `fonts.googleapis.com`, vor jeder Einwilligung
  und im Widerspruch zur Datenschutzerklärung („Google Fonts lokal“). `@import` entfernt; der Banner nutzt über
  `cookiebanner.override.css` die Site-Schrift `var(--sans)` (Satoshi).
- **Rechtsseiten**: eigene Descriptions statt Duplikat der Startseite.
  Impressum: „Impressum der kuventa GmbH, Georgsplatz 1, 20099 Hamburg. Geschäftsführer Dennis Kürschner.“
  Datenschutz: „Datenschutzerklärung der kuventa GmbH: welche Daten diese Website verarbeitet und welche Rechte du hast.“
- **`cookie-dough/index.html`** (Demo-Seite der Banner-Bibliothek) ebenfalls von der Veröffentlichung ausgeschlossen.
- **`lastmod`** in der Sitemap nur für Posts (Veröffentlichungsdatum). Für Seiten gibt es kein verlässliches Änderungsdatum;
  ein falsches `lastmod` ignoriert Google ohnehin.

## Nicht im Scope
- Bildgrößen, WebP-Umstellung, LCP (Spec B).
- Neue Blogthemen, Autorenkasten, Datierung der Posts (Spec C).
- Einrichtung der Search Console selbst (macht Dennis: Domain-Property per DNS-TXT, Sitemap einreichen, Bing-Import).
- 301-Weiterleitungen (GitHub Pages kann nur Meta-Refresh; die bestehenden Weiterleitungsseiten bleiben mit `noindex`).

## Abnahmekriterien
- [x] Build fehlerfrei (dev und `JEKYLL_ENV=production`)
- [x] `_site/CLAUDE.md` und `_site/assets/fonts/example.html` existieren nicht
- [x] `sitemap.xml` ist valides XML, enthält alle Seiten aus der Navigation, Impressum, Datenschutz und 6 Posts; keine Weiterleitung, kein 404, nur `https://kuventa.de/…`-URLs (Production-Build)
- [x] `robots.txt` erreichbar, verweist auf die Sitemap
- [x] Jede Seite hat einen eindeutigen `<title>` und eine eindeutige Description (per Skript geprüft)
- [x] OG-Tags auf jeder Seite; Vorschaubild 1200×630, unter 300 KB
- [x] JSON-LD auf jeder Seite parsebar (`JSON.parse`), Typen wie in Abschnitt 5; Fakten nur aus Impressum/kubo-Seite
- [x] Kein Request mehr an `ajax.googleapis.com`; Cookie-Banner funktioniert (anzeigen, akzeptieren, ablehnen)
- [x] Optik unverändert (Desktop + Mobile Stichprobe)
- [x] Unabhängiges Review (Diff + Spec)

## Review (28.10.2026)
1. **Build**: dev und `JEKYLL_ENV=production` ohne Fehler und Warnungen.
2. **Visuell**: `scripts/playwright-site-audit.mjs` läuft lokal nicht (npm-Paket `playwright` fehlt). Stattdessen per Playwright-MCP:
   Blogpost Desktop (1440) unverändert, kein horizontaler Scroll; kubo Mobile (390) mit Cookie-Banner in Satoshi.
   Banner: erscheint nach kurzer Verzögerung, „Akzeptieren“ setzt `cookieConsent`, nach Reload weg. „Ablehnen“ ist in der
   bestehenden Banner-Konfiguration ausgeblendet (unverändert, nicht Teil dieser Spec).
3. **Spec-Abgleich**: alle Kriterien erfüllt. Sitemap: 9 Seiten + 6 Posts, nur `https://kuventa.de/…`, keine Weiterleitungen, kein 404.
   Eindeutige Titel/Descriptions per Skript geprüft (404 ausgenommen, wird nicht indexiert). Vorschaubild 1200×630, 48 KB.
4. **Fakten**: Adresse, Telefon, E-Mail aus `impressum.md`; „ab 4.900 €“ und „30 Tage“ aus `kubo.html`; DE/CH aus `referenzen.html`;
   `jobTitle`, `sameAs`, Bild aus den Entscheidungen. jQuery byte-identisch mit offizieller 3.7.1 (SRI `sha256-/JqT3SQf…`).
5. **Freigaben**: keine Kundennamen berührt.
6. **Konsistenz**: Preis synchron; neue Texte in Du-Form; im Build kein Verweis mehr auf `googleapis`/`gstatic` (außer Text in der Datenschutzerklärung).
7. **Unabhängiges Review** (Subagent, Diff + Spec): keine Blocker. Umgesetzt:
   - kubo-Offer bekommt `price` + `priceCurrency` zusätzlich zu `priceSpecification`.
   - `BlogPosting.image` nutzt bis Spec B das Vorschaubild statt der 6–8-MB-PNGs.
   - `og:image:width/height/alt` nur beim Standardbild.
   - Meta-Description wird jetzt `escape`d (Schutz gegen `"` in künftigen Texten).
   Erwartet: Die Search Console kann kubo im Bericht „Software-Apps“ als ungültig führen, weil Bewertungen (`aggregateRating`) fehlen.
   Das ist bewusst so und kein Fehler.
   Nachtrag (freigegeben): `assets/files/README.md` (interne Notiz) ebenfalls ausgeschlossen. Offen für Spec C: Post-Titel mit „ | kuventa“ bis ~85 Zeichen.
