# Spec: Gründer-Story, Pilot-KPIs, „Abseits von OneIM“

**Status:** Geprüft · **Datum:** 2026-10-27 · **Betroffene Seiten:** Über mich, kubo
**Vorgänger:** `2026-10-27-persoenlichkeit-und-interview-learnings.md` (Punkt „Folge-Spec nötig“)

## Ziel
1. Gründerbrief auf Dennis' echte Geschichte umstellen (statt der neutralen Platzhalter-Fassung).
2. kubo-Pilot bekommt konkrete, messbare Erfolgskriterien.
3. Über mich bekommt einen persönlichen Abschnitt abseits der Arbeit.

## Quellen
- Dennis, Chatnachricht vom 27.10.2026 (Gründung, Familie, Hobbys, Hamburg)
- KPI-Vorschläge: abgeleitet aus kubos Funktionsumfang (kubo-Seite) und dem Interview-Learning „KPIs vor dem Pilot“.
  Dennis hat keine eigenen KPIs vorgegeben und um einen Vorschlag gebeten.

## Änderungen

### 1. Über mich: Gründerbrief (`ueber-uns.html`, ersetzt den kompletten Brieftext)
> Hallo, ich bin Dennis.
>
> Selbstständigkeit liegt bei uns in der Familie. Meine Eltern hatten eine eigene Kantine, meine Mutter später ein Nagelstudio. Dass ich irgendwann mein eigenes Ding mache, war mir praktisch in die Wiege gelegt.
>
> Gelernt habe ich Fachinformatiker für Anwendungsentwicklung. Seit 2020 arbeite ich in One Identity Manager: bei Industriekunden, Finanzdienstleistern, Versicherern und im Handel. Synchronisation, Rezertifizierung, Web-Frontend, Segregation of Duties, ganze Module.
>
> Mein erster Anlauf in die Selbstständigkeit war zusammen mit einem Kollegen: eine IT-Plattform für Kleinstunternehmen, die alles abdecken sollte. Im zweiten Jahr haben wir gemerkt, dass wir zu unterschiedlich ticken, und sind getrennte Wege gegangen. Mitgenommen habe ich vor allem eins: Fokus schlägt Vollständigkeit.
>
> 2024 habe ich deshalb zusammen mit meiner Frau kuventa gegründet, mit einem einzigen Thema: Identity Governance mit One Identity Manager.
>
> Ich bin durch und durch Techie und optimiere jeden Ablauf, den ich öfter als einmal mache. Genau so ist kubo entstanden: als Werkzeug, das mir hilft, echte Betriebsthemen bei Kunden schneller zu analysieren. Heute können das auch deine Leute selbst.
>
> Mein Maßstab ist einfach: Wenn ich gehe, kann dein Team mehr als vorher.

Interpretiert (bitte bestätigen): „Fokus schlägt Vollständigkeit“ als Lehre aus dem ersten Anlauf; „Heute können das auch deine Leute selbst“.

### 2. Über mich: Timeline
- Neuer Eintrag **„2024 · kuventa gegründet“**: „Zusammen mit meiner Frau. Ein Thema statt zehn: IAM und IGA, mit Schwerpunkt One Identity Manager.“
- Station „Software-Architekt 2022 – 2024“ wird zu **„Erste Selbstständigkeit“** (SERGO bleibt anonym).
- Text im Eintrag „Heute“ an den Brief angepasst: kubo ist „entstanden aus der Analyse echter Betriebsthemen bei Kunden“.
- Eintrag „Heute“ bleibt.

### 3. Über mich: neuer Abschnitt „Abseits von OneIM“ (nach „Wofür ich stehe“, Raster mit 4 Karten `g-4`)
| Karte | Text |
|---|---|
| Hundedad | Mit Leib und Seele, für Benji. |
| Patenonkel | Und das nehme ich genauso ernst wie jedes Kundenprojekt. |
| Tennis & mehr | Sportlich dreht sich bei mir das meiste um Tennis. Bouldern, Golf und anderes probiere ich gern aus. |
| Hamburger | Durch und durch. Passend zur Stadt gibt es in meiner Familie Seefahrer. |

Eckdaten-Pills: „Gegründet 2024“ ergänzen.

### 4. kubo: Pilot-KPIs (`kubo.html`, Sektion „Pilot mit Messlatte“)
Kickoff-Karte neu:
> Vor dem Start messen wir den Ist-Zustand an 5 bis 10 echten Fällen aus deinem Betrieb. Welche Messgrößen zählen und welche Zielwerte gelten, halten wir schriftlich fest.

Neuer Block unter den drei Karten: **„Typische Messgrößen“** (Liste, 4 Einträge):
1. **Zeit bis zur Ursache**: Minuten von der Betriebsfrage („Warum hängt der Job?“, „Woher kommt das Recht?“) bis zur belegten Ursache. Vorher gegen nachher.
2. **Entlastung der Wissensträger**: Rückfragen und Eskalationen an die Schlüsselperson pro Woche.
3. **Antwortqualität**: Anteil der kubo-Antworten, die dein Team als fachlich korrekt und sauber belegt bestätigt.
4. **Doku-Aufwand**: Stunden, um ein Customizing oder einen Prozess zu dokumentieren, von Hand gegen kubo-Entwurf mit Review.

Zusatzzeile: „Die Security-Freigabe (On-Prem, LLM, Berechtigungen) ist keine Messgröße, sondern Voraussetzung. Ohne sie startet der Pilot nicht.“

Bewusst **ohne** Zielwerte in Zahlen (keine öffentlichen Versprechen wie „50 % schneller“).

## Entscheidungen (Dennis, 27.10.2026)
- [x] Erster Anlauf wird öffentlich erzählt, wie im Entwurf, inklusive Trennung.
- [x] Der erste Anlauf ist die CV-Station SERGO (2022–2024). Der Timeline-Eintrag wird zu „Erste Selbstständigkeit“, der Firmenname bleibt anonym.
- [x] Mitgründerin wird mit Namen genannt: „meine Frau Janina“.
- [x] Der Hund heißt Benji. Die Hunde-Karte kommt ohne den Satz „hört ihn im Hintergrund“ und lautet: „Mit Leib und Seele, für Benji.“ Es gibt dort keine erfundenen Details.
- Brief: Der Satz „Keine Agentur, kein Delivery-Pool. Du weißt bei jedem Auftrag, wer an deinem System arbeitet.“ ist aus der bisherigen Fassung übernommen, damit die Aussage zur Ein-Personen-Firma erhalten bleibt.
- [x] Rest freigegeben: KPIs, Karten, interpretierte Sätze.
- Struktur: Damit sich normale und hinterlegte Abschnitte weiter abwechseln, wurde die Playbook-Sektion auf `section` und die CTA auf `section--alt` umgestellt.

## Ursprünglich offene Entscheidungen
- [ ] Erster Anlauf (mit Kollegen) öffentlich nennen, inkl. Scheitern?
- [ ] Ehefrau als Mitgründerin nennen: „mit meiner Frau“ oder mit Namen?
- [ ] Jahr des ersten Anlaufs, und ist das die Station „Software-Architekt bei einem Softwarehaus“ (SERGO, 2022–2024) im CV?
- [ ] Hund: Name nennen? Foto mit Hund vorhanden? „Hört ihn im Hintergrund“ zutreffend?
- [ ] Die zwei interpretierten Sätze im Brief und der Patenonkel-Satz okay?
- [ ] KPI-Vorschlag okay?

## Nicht im Scope
- Startseite, Leistungen, Kontakt. Persönliches bleibt auf Über mich gebündelt.
- Zielwerte für KPIs.

## Abnahmekriterien
- [ ] Build fehlerfrei; Über mich und kubo auf Desktop und Mobile geprüft (4er-Raster bricht sauber um)
- [ ] Jede persönliche Aussage durch die Chatnachricht vom 27.10. oder eine Entscheidung gedeckt
- [ ] Keine Namen von Familie, Kollege oder erster Firma ohne Freigabe
- [ ] Unabhängiges Review (Diff + Spec)

## Review (27.10.2026)
1. **Build**: fehlerfrei.
2. **Visuell**: Über mich auf Desktop als ganze Seite geprüft, KPI-Block auf kubo auf Desktop geprüft. `.g-4` bricht jetzt in drei Stufen um: 4 Spalten, ab 980 px 2, ab 640 px 1.
3. **Spec-Abgleich**: erfüllt. Der Text der Spec ist an die Entscheidungen angepasst.
4. **Fakten**: Der unabhängige Reviewer hat keine erfundenen Details gefunden. Den Satz „Benji hat … höchste Priorität“ habe ich vorher selbst entfernt.
5. **Namen**: Weder SERGO noch Allianz, Munich Re, Aveniq, SPIEGEL oder der Name des Kollegen stehen auf den Seiten.
6. **Fixes aus dem Review**: Die Inline-Styles im KPI-Block sind jetzt die Komponente `.kpi-block`. Die KPI-Überschriften sind `h4`, darunter liegt `.numbered h4`. „trotzdem“ ist gestrichen, „Heute“ ist an den Brief angeglichen.
7. **Timeline**: Dennis hat bestätigt, dass kuventa 2024 gegründet wurde; der operative Start war 2025. Die Überschneidung mit der ersten Selbstständigkeit (bis 12/2024) stimmt also. Die Seite nennt bewusst nur das Gründungsjahr 2024.
