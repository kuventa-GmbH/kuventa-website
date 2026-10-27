# Spec: Mehr Persönlichkeit + Learnings aus dem Enterprise-AI-Interview

**Status:** Geprüft (freigegeben und umgesetzt 27.10.2026, Review siehe unten) · **Datum:** 2026-10-27
**Betroffene Seiten:** Start, Über mich, kubo, Leistungen, Kontakt, Referenzen, Footer, CSS

> Hinweis: Diese Spec wurde nachträglich geschrieben. Die Änderungen sind bereits lokal umgesetzt (nicht committet).
> Ablauf jetzt: Dennis prüft die Spec → Anpassungen → Review nach CLAUDE.md → Commit. Alles Abgelehnte wird zurückgebaut.

## Ziel
1. Die Firma ist Dennis. Die Site soll wie eine Person klingen, nicht wie eine Agentur.
2. Learnings aus dem Interview (Mitgründerin von Unframe, Enterprise AI) auf kuventa übertragen.

## Quellen
- Entscheidungen von Dennis (27.10.2026): Ich-Form überall · KPI-vorab-Pilot, Preis bleibt · Werdegang-Timeline aus CV · Gründerbrief · Foto prominenter
- `assets/files/cv.pdf` (Stationen, Skills, Sprachen, Scrum Master)
- Bestehende Site-Texte (Referenzen, kubo-Entstehung)
- Interview-Transkript (eingefügt im Chat)

## Interview-Learnings → Übertragung
| Learning (Interview) | Umsetzung bei kuventa |
|---|---|
| „One size fits none“, erst zuhören statt Produkt reindrücken | Start „So arbeite ich“, Schritt 1; Kontakt „Erst höre ich zu“ |
| Piloten scheitern an fehlenden KPIs, nicht an Technik | Start Schritt 2; kubo-Sektion „Pilot mit Messlatte“; Preiszeile „mit vorab vereinbarten Erfolgskriterien“ |
| Business, IT **und** Security einbinden; Security ist der Türsteher | Start Schritt 3; kubo Pilot Schritt 2 |
| Zeigen statt versprechen, in Wochen; „last mile“ aus dem Pilot in den Betrieb | Start Schritt 4 |
| Das CFO-Beispiel („E-Mails 5 Min. schneller“) | Start Schritt 2: „Geht jetzt etwas schneller reicht nicht …“ |
| Vertrauen durch Glaubwürdigkeit; „Leute kaufen von Leuten“ | Foto auf Start/Kontakt/kubo, Gründerbrief, Timeline |
| Erfahrung kann schaden (altes Playbook) | Über mich: „Warum ich kein altes Playbook abspule“ |
| Kunden ertrinken in KI-Rauschen, Partner filtert | Über mich: „Ich ordne ein, was relevant ist“ |
| Bewusst nicht übernommen | kostenloser Pilot, Outcome-/T-Shirt-Pricing, „global from day one“ (passt nicht zum Ein-Personen-Modell / Preisentscheidung von Dennis) |

## Änderungen pro Seite
### Global
- Ich-Form statt „kuventa entwickelt / wir“. „Wir“ nur noch, wo Du + Ich gemeint ist.
- Nav- und Footer-Label „Über kuventa“ → „Über mich“ (URL `/ueber-uns/` bleibt).
- Footer-Claim: „Von Dennis Kürschner, aus Hamburg.“
- CSS: neue Komponenten `.hero-aside.portrait`, `.portrait-caption`, `.person`, `.letter`, `.timeline`.

### Start (`index.md`)
- Hero: „Ich bin Dennis, und kuventa bin ich …“, primäre CTA „Mit mir sprechen“; SVG-Grafik → Foto mit Bildunterschrift.
- Neue Sektion „So arbeite ich“ (4 Schritte, s. o.).
- kubo-Karte: „den ich gebaut habe, weil …“.

### Über mich (`ueber-uns.html`)
- Neu: Gründerbrief (Entwurf in Dennis' Stimme, **muss Dennis prüfen**).
- Neu: Timeline 2016 → heute. Arbeitgeber genannt (Golf House, BDO, Computacenter, SERGO); **Kunden anonymisiert** („zwei der größten Versicherer“, „ein großer deutscher Händler“).
- Prinzipien in Ich-Form; neue Sektion „Kein altes Playbook“; Eckdaten erweitert (seit 2020 OneIM, Scrum Master, Sprachen inkl. „¡Hola!“ aus dem CV).

### kubo (`kubo.html`)
- Eyebrow „Gebaut von Dennis Kürschner“; Zitat-Karte mit Foto.
- Neue Sektion „Pilot mit Messlatte“: Kickoff-KPIs → alle drei an Bord → Tag-30-Bilanz.

### Leistungen, Referenzen, Kontakt
- Ich-Form. Kontakt: Personen-Karte, Erstgespräch-Text mit KPI-Frage, zwei neue FAQs („Was mitbringen?“, „Was, wenn du krank/im Urlaub bist?“).

## Entscheidungen (Dennis, 27.10.2026)
- [x] **Kundennamen**: Freigabe liegt vor für Golf House (Ausbildungsbetrieb), BDO, dmTECH, Computacenter → namentlich nennen.
  Alles andere anonym: Versicherer (Allianz, Munich Re) bleiben „zwei der größten Versicherer Deutschlands“, **SERGO → „ein Softwarehaus“**.
- [x] **FAQ „krank/Urlaub“**: bleibt.
- [x] **„Heute“-Eintrag** (Provider-IAM Schweiz, Medienhaus, BaFin-SoD): korrekt, bleibt.
- [x] **Persönliches abseits der Arbeit**: gewünscht → neuer kleiner Abschnitt „Abseits von OneIM“ auf Über mich. **Inhalt fehlt noch.**

## Noch offen (wartet auf Input von Dennis)
- [ ] **Gründer-Story**: Dennis liefert die echte Motivation. Bis dahin: Brief ohne die zwei interpretierten Sätze
  („Das wollte ich anders machen. Deshalb gibt es kuventa …“ / „zum dritten Mal … Werkzeug“), nur belegte Fakten.
- [ ] **KPIs im kubo-Pilot**: Dennis liefert die echten Messgrößen. Bis dahin: Prinzip „Erfolgskriterien vorab“ ohne konkrete Beispiele
  (Kickoff-Karte und Start-Schritt 2 entsprechend allgemein formulieren).
- [ ] **Abseits von OneIM**: Hobbys, Hamburg-Bezug, Gründungsjahr, Anekdote. Abschnitt erst bauen, wenn Inhalt da ist.

## Daraus folgende Anpassungen an der bestehenden Umsetzung
1. Timeline: dmTECH namentlich („dmTECH: Kassen- und Backoffice-Systeme …“); SERGO → „bei einem Softwarehaus“.
2. Gründerbrief: zwei interpretierte Sätze durch neutrale, belegte Formulierung ersetzen (Platzhalter bis Story kommt).
3. kubo „Pilot mit Messlatte“, Kickoff-Karte: Beispiel-KPIs entfernen, Prinzip behalten.
4. Start „So arbeite ich“, Schritt 2: Beispiele („weniger Unterbrechungen …, Audit-Finding weniger“) entfernen bzw. allgemein halten.

## Nachträge (im Review aufgefallen, nicht in der Erstfassung beschrieben)
- Meta-Titel/-Descriptions von Start, Über mich und Kontakt auf Ich-Perspektive angepasst.
- Über mich: Hero-CTAs getauscht („Mit mir sprechen“ primär, Beraterprofil sekundär). Die alten Abschnitte
  „Werdegang in einem Absatz“ und „Warum aus der Beratung ein Produkt wurde“ gehen im Brief und in der Timeline auf.
- Leistungen: Abschluss-CTA ergänzt um „Bring mit, woran du in drei Monaten merken willst, dass es sich gelohnt hat.“
- Neues Asset `assets/img/photos/about/dennis-avatar.jpg` (240×240, Ausschnitt aus `dennis.webp`) für runde Personen-Karten.

## Nicht im Scope
- Blog-Beiträge, Impressum, Datenschutz, Preise, Design-System-Änderungen über die neuen Komponenten hinaus.

## Abnahmekriterien
- [ ] Jekyll-Build ohne Fehler
- [ ] Desktop- + Mobile-Screenshots aller geänderten Seiten geprüft (Foto-Zuschnitt, Timeline, Brief, Personen-Karte)
- [ ] Keine „kuventa macht …/wir“-Reste auf Seiten in Ich-Form
- [ ] Jede Aussage über Dennis durch CV/Site/Dennis belegt; offene Entscheidungen geklärt
- [ ] Keine Kundennamen ohne Freigabe
- [ ] Preise unverändert (4.900 / 12.500 / 2.000)

## Review (27.10.2026)
1. **Build**: `bundle exec jekyll build` fehlerfrei. (`jekyll serve` scheitert unter Ruby 4 lokal, Vorschau per `python3 -m http.server` aus `_site`.)
2. **Visuell**: Start und Über mich auf Desktop (1440) geprüft, Start und Kontakt auf Mobile (390), kubo-Zitat auf Desktop geprüft; kein horizontaler Scroll.
   Befund: Avatar zeigte ganzen Oberkörper → eigenes Porträtbild als Ausschnitt. Behoben.
   Konsolenfehler nur vom Microsoft-Bookings-Iframe (CSP report-only), bestand schon vorher.
3. **Spec-Abgleich**: alle Punkte umgesetzt; Abweichungen als „Nachträge“ dokumentiert.
4. **Fakten-Check** (unabhängiger Reviewer): unbelegte Aussagen entfernt bzw. entschärft:
   „jedes Problem selbst ausgebadet“, „Seitdem baue ich OneIM wie Software“, „erste richtige App“, „erster echter Kontakt mit AuthN/AuthZ“,
   Urlaub-/Externe-Zuspitzung im Brief, „nach wenigen Wochen“, „kubo läuft ganz ohne mich“. „Abschlussprojekt“ → „Ausbildungsprojekt“, „2023“ → „ab 2023“.
5. **Freigaben**: nur Golf House, BDO, dmTECH, Computacenter namentlich. Allianz, Munich Re, SERGO, Aveniq, SPIEGEL auf keiner Seite.
6. **Konsistenz**: Preise unverändert (4.900 / 12.500 / 2.000, Health Check 8.000). Keine „kuventa macht …“-Reste, „wir“ nur für Du + Ich, kein „Sie“.
   Sprache korrigiert: „den/dem Piloten“, „gewachsen durch“, „Versicherungen“.
7. **Markup**: Zitat als `figure/blockquote/figcaption`, dekorative Avatare mit `alt=""`, Inline-Margin ins CSS verschoben, `#ffffff` → `var(--white)`.

**Bewusst offen gelassen (niedrig):** `rgba(255,255,255,.92)` in `.portrait-caption` (kein passendes Token);
„verspricht die Revolution“/„nur Hype“ im Playbook-Abschnitt (Ton, Geschmackssache).

**Folge-Spec nötig**, sobald Dennis liefert: Gründer-Story, echte Pilot-KPIs, Abschnitt „Abseits von OneIM“.
