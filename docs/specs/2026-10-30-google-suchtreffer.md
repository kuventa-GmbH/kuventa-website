# Spec: Google-Suchtreffer aufräumen (Sitelinks, Seitenname, Logo)

**Status:** Geprüft (freigegeben 30.10.2026) · **Datum:** 2026-10-30 · **Betroffene Dateien:** `index.md`, `kubo.html`, `leistungen.md`, `ueber-uns.html`, `contact.md`, `referenzen.html`, `impressum.md`, `datenschutzerklarung.md`, `_layouts/default.html`, `_includes/seo.html`, `sitemap.xml`

## Ziel
Bei der Suche nach „kuventa“ zeigt Google einen Haupttreffer mit fünf Sitelinks (Screenshot vom 30.10.2026, `docs/Screenshot at Oct 30 07-39-02.png`).
Das Format ist gut. Die Auswahl der Links passt aber nicht: Das Impressum steht ganz oben, kubo fehlt, und die Texte stammen noch von der alten Fassung der Site.
Ziel: Unter dem Haupttreffer sollen die Seiten erscheinen, die Besucher wirklich suchen (kubo, Leistungen, Über mich, Referenzen, Kontakt). Seitenname und Logo sollen sauber angezeigt werden.

## Quellen
- Screenshot der Google-Suche „kuventa“, 30.10.2026
- Google-Doku: Sitelinks lassen sich nicht direkt festlegen. Seiten mit `noindex` erscheinen nicht als Sitelink.
  Seitenname kommt aus den strukturierten Daten vom Typ `WebSite`. Logo bevorzugt quadratisch, mindestens 112×112.

## Änderungen

### 1. Rechtsseiten aus dem Index nehmen
`impressum.md` und `datenschutzerklarung.md`: Front Matter `robots: noindex` → im Layout `<meta name="robots" content="noindex, follow">`.
Beide Seiten fliegen zusätzlich aus der Sitemap. Sie bleiben über den Footer erreichbar (Impressumspflicht verlangt Erreichbarkeit, keine Indexierung).
Effekt: Der Platz des Impressums unter dem Haupttreffer wird frei, bevorzugt für kubo.

### 2. Seitenname festlegen (`_includes/seo.html`)
Neuer Knoten `WebSite` im JSON-LD der Startseite: `name` „kuventa“, `alternateName` „kuventa GmbH“, `url` https://kuventa.de/, `publisher` → Organisation.
Heute leitet Google „kuventa“ selbst ab. Mit dem Knoten bleibt es stabil.

### 3. Logo und Favicon
- Logo in den strukturierten Daten: das quadratische `favicons/logo4_favicon.png` (512×512) statt des breiten Schriftzugs `logo.png` (1858×306).
- `<head>`: zusätzlich `<link rel="icon" type="image/png" sizes="512x512" …logo4_favicon.png>` und `apple-touch-icon`. Die `.ico` bleibt.

### 4. Vorschautexte (Meta-Descriptions) schärfen
Die Texte im Screenshot („Wir ordnen deinen Fall ein“, „Engineering-Boutique“) stammen noch aus der alten Fassung; Google hat die Seiten seit den Änderungen nicht neu gecrawlt.
Zusätzlich sind heute Start (196 Zeichen) und Leistungen (183) zu lang, Google kürzt bei etwa 155 Zeichen.
Neue Descriptions, alle unter 155 Zeichen, Kernaussage vorn:

| Seite | Neu | Zeichen |
|---|---|---|
| Start (`index.md`) | Ich bin Dennis Kürschner, OneIM-Engineer aus Hamburg. Ich entwickle Module in One Identity Manager, löse Betriebsprobleme und baue kubo. | 136 |
| kubo (`kubo.html`) | kubo erklärt deine One-Identity-Manager-Umgebung: Antworten mit Kausalkette und Quelle in unter 60 Sekunden. On-Prem, read-only. Pilot ab 4.900 €. | 146 |
| Leistungen (`leistungen.md`) | Modulentwicklung, Troubleshooting und Teamverstärkung für One Identity Manager. Mit Wissenstransfer statt Abhängigkeit. Einstieg über den kubo-Pilot. | 149 |
| Über mich (`ueber-uns.html`) | kuventa, das bin ich: Dennis Kürschner. Softwareentwickler, seit 2020 in One Identity Manager, Gründer von kuventa und Entwickler von kubo. | 139 |
| Kontakt (`contact.md`) | Direkter Draht zu mir statt zum Vertrieb: Termin buchen, mailen oder anrufen. Erste fachliche Einordnung deines OneIM-Themas in 30 Minuten, kostenlos. | 150 |
| Referenzen (`referenzen.html`) | wird in `2026-10-30-fallstudie-attestierung.md` festgelegt (Provider-IAM entfällt) | – |

Hinweis: Für Sitelinks nimmt Google teils auch den ersten Absatz der Seite statt der Description. Die Einleitungstexte (Hero) sind seit dem Umbau schon passend und bleiben.

### 5. Neu-Crawl anstoßen (macht Dennis, nach dem Deploy)
In der Search Console unter „URL-Prüfung“ für `/`, `/kubo/`, `/leistungen/`, `/ueber-uns/`, `/kontakt/`, `/referenzen/` jeweils „Indexierung beantragen“.
Für Impressum und Datenschutz ebenfalls, damit Google das `noindex` schneller sieht.

## Offene Entscheidungen
- [x] Impressum und Datenschutz auf `noindex` setzen? (Empfehlung: ja)
- [x] Neue Vorschautexte aus Abschnitt 4 okay?

## Nicht im Scope
- Seitentitel. „Leistungen: OneIM …“ wird in Sitelinks immer gekürzt. Der Seitenname steht vorne, das reicht.
- Blog-Description (bleibt; Neuausrichtung in Spec C).
- Sitelinks direkt festlegen (geht technisch nicht).
- Sprachhinweis „Translate this page“ (erscheint nur bei englisch eingestelltem Google).

## Abnahmekriterien
- [x] Build fehlerfrei (dev und production)
- [x] Impressum und Datenschutz: `noindex, follow` im HTML, nicht in `sitemap.xml`, Footer-Links funktionieren
- [x] Startseite: JSON-LD enthält `WebSite` mit `name` „kuventa“; alle JSON-LD-Blöcke parsebar
- [x] Logo in JSON-LD ist das 512×512-PNG; PNG-Icon und `apple-touch-icon` im `<head>`
- [x] Sechs Descriptions wie in Abschnitt 4, jede ≤ 155 Zeichen, weiterhin eindeutig
- [x] Unabhängiges Review (Diff + Spec)

## Erwartung
Google übernimmt Änderungen erst nach dem nächsten Crawl, Sitelinks können sich über Wochen verschieben.
Welche Links Google auswählt, bleibt am Ende Googles Entscheidung.

## Review (30.10.2026)
1. **Build**: dev und production ohne Fehler und Warnungen.
2. **Visuell**: nur `<head>` und Descriptions geändert; Referenzen Desktop/Mobile geprüft.
3. **Spec-Abgleich**: erfüllt. `sitemap.xml` selbst unverändert: das Template lässt Seiten mit `sitemap: false` weg, Impressum/Datenschutz tragen das Flag (13 URLs).
   `noindex, follow` nur auf diesen beiden Seiten. JSON-LD überall parsebar; Startseite mit `WebSite` „kuventa“
   (zusätzlich `@id` und `inLanguage`, beides gültig). Logo = 512×512-PNG, PNG-Icon und `apple-touch-icon` im `<head>`.
   Descriptions: 136 / 146 / 149 / 139 / 150 / 139 Zeichen, keine Duplikate.
4. **Fakten**: Descriptions aus bestehenden Seiteninhalten.
5. **Freigaben**: keine Kundennamen.
6. **Konsistenz**: Du/Ich-Form eingehalten.
7. **Unabhängiges Review**: keine Blocker (siehe auch Review in `2026-10-30-fallstudie-attestierung.md`).
