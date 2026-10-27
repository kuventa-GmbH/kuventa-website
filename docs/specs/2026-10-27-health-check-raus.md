# Spec: Health Check entfernen, kubo-Pilot als Einstieg

**Status:** Geprüft (freigegeben 27.10.2026) · **Datum:** 2026-10-27 · **Betroffene Seiten:** Leistungen, Kontakt

## Ziel
Dennis bietet keinen manuellen OneIM Health Check an („kann und will ich nicht machen“). Das Angebot verschwindet von der Site.
Die Rolle „niedrigschwelliger Einstieg mit Festpreis“ übernimmt der kubo-Pilot.

## Quellen
- Dennis, Chat 27.10.2026; Entscheidung: an die Stelle der Karte tritt der kubo-Pilot als Einstieg.
- Pilot-Inhalte und -Preis aus `kubo.html` (ab 4.900 €, 30 Tage, Erfolgskriterien vorab).

## Änderungen

### Leistungen (`leistungen.md`)
- Karte „Leistung 4 · OneIM Health Check“ (inkl. „Festpreis ab 8.000 €“) entfällt.
- An gleicher Stelle, weiter hervorgehoben (`service featured`):
  - Eyebrow: **Einstieg · Festpreis**
  - Titel: **kubo-Pilot**
  - Claim: *Wenn du erst sehen willst, was in deiner Umgebung steckt.*
  - Text: „30 Tage kubo in deiner OneIM-Umgebung, an deinen echten Fragen: hängende Prozesse, Herkunft von Rechten, undokumentierte Customizings. Mit vorab vereinbarten Erfolgskriterien und einer ehrlichen Bilanz am Ende. Der schnellste Weg herauszufinden, ob sich mehr Zusammenarbeit lohnt.“
  - Ergebnis-Zeile: „**Festpreis ab 4.900 €.** Details zum Pilot →“ (Link auf `/kubo/`, `data-goatcounter-click="feature/mcp"`)
- Nummerierung: Leistung 1–3 bleiben, Projekt-Sanierung → Leistung 4, Schulung → Leistung 5.
- Unsichtbare Überschrift: „Die sechs Leistungen im Überblick“ → „Leistungen und Einstieg im Überblick“.
- Meta-Description: „Modulentwicklung in One Identity Manager, Performance- und Prozess-Troubleshooting, Expertenverstärkung für IAM-Teams, Projekt-Sanierung und Schulung. Einstieg über den kubo-Pilot.“

### Kontakt (`contact.md`), FAQ
- „Wie schnell ist Kapazität verfügbar?“: „Festpreis-Pakete (Health Check, kubo-Pilot) lassen sich meist kurzfristig einplanen“
  → „Der kubo-Pilot lässt sich meist kurzfristig einplanen“.
- „Rahmenvertragspartner?“: „kubo-Lizenzen und Festpreis-Pakete bekommst du direkt bei mir.“
  → „kubo-Lizenzen und den kubo-Pilot bekommst du direkt bei mir.“

## Nicht im Scope
- `docs/kuventa-website-texte-2026-06.md` (historische Textvorlage) bleibt unverändert; diese Spec ersetzt sie in diesem Punkt.
- kubo-Seite, Preise.

## Abnahmekriterien
- [x] `grep -i "health"` findet auf keiner Seite mehr einen Treffer (außer docs/)
- [x] Kein „8.000 €“ mehr auf der Site
- [x] Leistungen: 6 Karten im 2er-Raster, Nummerierung lückenlos, Pilot-Karte hervorgehoben, Link funktioniert
- [x] Build fehlerfrei; Leistungen auf Desktop + Mobile geprüft

## Review (27.10.2026)
- grep: Treffer zu „health“/„8.000“ nur noch in `docs/` (Archiv-Textvorlage, Specs).
- Leistungen: Reihenfolge Leistung 1, 2, 3, Einstieg · Festpreis, Leistung 4, 5. `/kubo/` liefert 200.
- Visuell: Desktop (1440) und Mobile (390) geprüft, kein horizontaler Scroll.
- Korrektur gegenüber Entwurf: Link-Text „Details zum Piloten →“ (Dativ, konsistent mit kubo-Seite).
