# One Identity RAG - Implementierungsplan

Stand: 14.04.2026

## Ziel

Ein fachlich fokussierter RAG fuer One Identity, der Beratern, Beratungshaeusern und spaeter ausgewaehlten Kunden hilft, schneller belastbare Antworten aus definierter Wissensbasis zu erhalten.

Wichtige Abgrenzung:

- kein allgemeiner KI-Assistent fuer alles
- kein autonomer Architekturentscheider
- keine ungepruefte Quelle fuer produktive Customizing- oder Sicherheitsentscheidungen

## Geeigneter MVP

Der MVP sollte nicht zu breit starten. Sinnvoll ist ein klar abgegrenzter erster Scope:

- One-Identity-Dokumentation
- kuratierte interne Wissensdokumente
- ausgewaehlte Delivery-Artefakte ohne sensible Kundendaten
- definierte FAQ-, Troubleshooting- und Onboarding-Fragen

Der erste Produktzweck sollte einer dieser drei sein:

1. Berater-Onboarding
2. Delivery-Sparring
3. Presales-Unterstuetzung

## Empfohlene Architektur

### 1. Datenquellen

- Herstellerdokumentation
- eigene Projektnotizen und Patterns
- technische How-tos
- Glossare, Tabellenbeschreibungen, Prozessbeschreibungen
- optional spaeter: kundenspezifische Wissensraeume

### 2. Ingestion-Pipeline

Die Ingestion sollte reproduzierbar und kontrolliert laufen:

- Dokumente einsammeln
- Dateityp erkennen
- in Text umwandeln
- in sinnvolle Chunks zerlegen
- Metadaten anreichern
- Embeddings erzeugen
- in Vektorstore schreiben

Wichtige Metadaten:

- Quelle
- Dokumenttyp
- Version / Stand
- Produktbereich
- Zielgruppe
- Freigabestatus
- Mandant / Wissensraum

### 3. Retrieval-Schicht

Die Retrieval-Schicht sollte mehr koennen als nur naive Vektorsuche:

- semantische Suche
- Filter nach Quellentyp, Version, Mandant und Bereich
- optional spaeter hybrides Retrieval mit Keyword + Vektor
- Reranking fuer bessere Treffergenauigkeit

### 4. Antwortschicht

Die Antwortschicht sollte strikt auf Quellenbezug gebaut sein:

- Antworten nur aus gelieferten Kontextquellen
- klare Kennzeichnung von Unsicherheit
- Quellenliste pro Antwort
- keine Erfindung bei Luecken
- Rueckfrage, wenn Kontext nicht ausreicht

### 5. UI / Anwendung

Fuer einen MVP reicht eine einfache Web-Anwendung mit:

- Login
- Fragetextfeld
- Quellenanzeige
- Filter fuer Wissensraum / Dokumenttyp
- Feedback-Mechanik fuer gute oder schlechte Antworten

## Technischer Stack fuer einen pragmatischen Start

Ein sinnvoller MVP-Stack waere:

- `Python`
- `FastAPI` fuer API und Backend
- `PostgreSQL` fuer Nutzer, Sessions, Dokument-Metadaten
- `pgvector` oder `Qdrant` fuer Embeddings / semantische Suche
- einfache Web-UI mit `Next.js` oder schlankem React-Frontend
- Objektstorage / Filesystem fuer Quelldokumente

Warum diese Richtung sinnvoll ist:

- schnell baubar
- gut testbar
- spaeter mandantenfaehig erweiterbar
- sauber fuer API, Hintergrundjobs und Dokumentenverarbeitung trennbar

## Kernmodule

### Dokumentimport

- Upload oder Batch-Import
- Parser pro Dateityp
- OCR nur wenn wirklich noetig

### Chunking und Normalisierung

- technische Dokumente nicht nur nach Zeichenlaenge teilen
- Ueberschriften, Tabellennaehe, Listen und Kapitelstruktur beachten
- One-Identity-spezifische Begriffe erhalten

### Retrieval

- Query-Rewrite optional
- semantische Suche mit Filtern
- spaeter Reranker

### Antwortgenerierung

- striktes Quellenprompting
- kompaktes Antwortformat
- Quellenzitate mit Dokumentname und Abschnitt

### Admin-Bereich

- Dokumentstatus
- Wissensraeume
- Freigaben
- Reindexing

## Sicherheits- und Governance-Punkte

Gerade fuer One Identity ist das nicht optional:

- Mandantentrennung frueh mitdenken
- Dokumentfreigaben und sensible Inhalte markieren
- Logging fuer Fragen und Antworten
- kein Zugriff auf nicht freigegebene Quellen
- spaeter rollenbasierte Sicht auf Wissensraeume

## Evaluationslogik

Der MVP braucht messbare Qualitaet, sonst bleibt er Demo.

Zu messen:

- Trefferqualitaet
- Antwortnutzwert
- Quellenkorrektheit
- Halluzinationsquote
- Zeitersparnis im Vergleich zur manuellen Suche

Sinnvoller Start:

- 30 bis 50 reale One-Identity-Fragen sammeln
- erwartete Antwort und Quellbasis definieren
- jede Iteration gegen diese Fragen testen

## Roadmap

### Phase 1 - MVP

- definierter Quellkorpus
- Ingestion fuer PDF/Markdown/HTML/Text
- semantische Suche
- einfache Q&A-Oberflaeche
- Quellenanzeige

### Phase 2 - Delivery-tauglich

- Metadatenfilter
- Feedback-Loops
- Reranking
- Wissensraeume / Mandantenlogik
- Admin-Ansicht

### Phase 3 - Produktisierung

- Pilot fuer Beratungshaus
- Nutzer- und Rollenmodell
- Abrechnung / Paketlogik
- SLA-/Betriebsmodell
- Multi-Tenant-Faehigkeit

## Was ich dir konkret abnehmen kann

- Architektur und Stack festlegen
- Datenmodell und API-Schnittstellen entwerfen
- Ingestion- und Chunking-Logik bauen
- Retrieval- und Prompting-Schicht implementieren
- Evaluationsset und Teststrategie aufsetzen
- UI fuer MVP bauen
- Deployment und Betriebsmodell strukturieren

## Empfohlener naechster Schritt

Nicht mit "welches Modell?" anfangen, sondern mit diesen Entscheidungen:

1. Wer ist der erste Nutzer des MVP?
2. Welche Dokumente duerfen in den ersten Wissenskorpus?
3. Welche 30 Fragen muss der MVP gut beantworten?
4. Soll der erste Build intern fuer dich sein oder schon pilotfaehig fuer Dritte?

Wenn du willst, kann ich als Nächstes direkt eines von drei Dingen tun:

1. einen konkreten technischen Architekturentwurf mit Komponenten und Datenflüssen schreiben
2. ein MVP-Repository dafür scaffolden
3. zuerst den Evaluationskorpus und die Wissensstruktur definieren
