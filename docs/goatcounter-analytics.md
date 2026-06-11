GoatCounter Analytics – Kuventa Standard

Ziel

GoatCounter wird bei Kuventa als leichtgewichtige, datenschutzfreundliche Analytics-Lösung eingesetzt.

Ziel ist nicht primär Marketing-Reporting, sondern die kontinuierliche Optimierung von Landingpages, Produktseiten und Conversion-Funnels durch KI-Agenten.

Die Daten werden regelmäßig durch n8n und KI-Agenten ausgewertet, um Verbesserungsvorschläge für Webseiten automatisch zu generieren.

⸻

Infrastruktur

Hosting

GoatCounter läuft als eigenständiger Dienst auf der zentralen Kuventa Infrastruktur.

Beispiel:

analytics.kuventa.de

Der Dienst ist über HTTPS erreichbar.

⸻

Integration in Webseiten

Grundprinzip

Alle Webseiten erhalten das GoatCounter JavaScript im globalen Layout.

Beispiel:

<script
    data-goatcounter="https://analytics.kuventa.de/count"
    async
    src="https://analytics.kuventa.de/count.js">
</script>

Das Skript wird möglichst kurz vor dem schließenden </body> eingebunden.

⸻

Jekyll Integration

Für Jekyll Projekte erfolgt die Integration im gemeinsamen Layout:

_layouts/default.html

Empfohlene Variante:

{% if jekyll.environment == "production" %}
<script
    data-goatcounter="https://analytics.kuventa.de/count"
    async
    src="https://analytics.kuventa.de/count.js">
</script>
{% endif %}

Dadurch wird lokales Entwickeln nicht getrackt.

⸻

Event Namenskonventionen

Alle Events folgen festen Namensräumen.

Conversion Events

conversion/demo-start
conversion/contact
conversion/pilot-request
conversion/trial-start
conversion/book-call

Diese Events beschreiben konkrete Conversion-Ziele.

⸻

Feature Interesse

feature/oneim
feature/mcp
feature/insights
feature/jira
feature/confluence

Diese Events messen Interesse an einzelnen Produktbereichen.

⸻

Navigation

navigation/pricing
navigation/docs
navigation/demo
navigation/contact

Diese Events helfen bei der Analyse von Nutzerpfaden.

⸻

Downloads

download/whitepaper
download/guide
download/case-study

⸻

Regeln für Event-Namen

Erlaubt

conversion/demo-start
feature/mcp
navigation/pricing

Nicht erlaubt

DemoStart
PricingButton
MCPFeature

Gründe:

* Einheitliche Auswertung
* Einfache Filterung
* Lesbarkeit für KI-Agenten
* Konsistente Dashboards

⸻

API Nutzung

Für reine Webseiten ist kein API-Key erforderlich.

Für automatisierte Auswertungen wird ein Personal Access Token verwendet.

Beispiel:

Authorization: Bearer gc_xxxxxxxxxxxxxxxxx

Der Token wird ausschließlich in:

* n8n
* Backend Services
* Agenten

verwendet.

Der Token darf niemals im Frontend ausgeliefert werden.

⸻

Nutzung durch KI-Agenten

Aktuell werden GoatCounter Daten regelmäßig analysiert.

Ziele:

* Seiten mit hoher Absprungrate erkennen
* Schwache Conversion Funnels erkennen
* CTA Optimierungen vorschlagen
* Landingpage Texte verbessern
* Automatische Merge Requests erzeugen

⸻

Standardmetriken

Jeder Optimierungsagent betrachtet mindestens:

* Seitenaufrufe
* Besucher
* Top Seiten
* Conversion Events
* Conversion Rate
* Besucherpfade

⸻

Beispiel für kubo

Zu erfassende Events:

conversion/demo-start
conversion/pilot-request
conversion/contact
feature/oneim
feature/mcp
feature/insights
navigation/pricing
navigation/docs
navigation/demo

Diese Events bilden die Grundlage für die automatische Optimierung der kubo-Webseite.