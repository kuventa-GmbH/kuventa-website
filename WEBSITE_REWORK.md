# WEBSITE_REWORK

Stand: 03.04.2026
Status: Phase 2 in Umsetzung, Neupositionierung auf IGA / MidPoint / One Identity gestartet
Letztes Update: Kontaktseite auf Erstgespraech-/Trust-Logik der Homepage umgestellt und `Identity Assessment` als primaere Produktseite inhaltlich auf IGA, Governance, NIS2 und SAP-IdM-Ablösung nachgezogen

Dieses Dokument ist das laufende Arbeitsdokument fuer die Neuausrichtung der kuventa-Website. Weitere Schritte, Entscheidungen, offene Punkte und Fortschrittsupdates werden hier fortgefuehrt.

## 1. Ziel des Reworks

Die Website soll kuventa klarer als spezialisierte IGA-/Identity-Beratung fuer Enterprise-Kunden und den gehobenen Mittelstand positionieren, die unter akutem Handlungsdruck stehen und einen erfahrenen, verlässlichen Umsetzer suchen.

Die Website muss dafuer drei Dinge gleichzeitig leisten:

1. Relevanz sofort sichtbar machen.
2. Vertrauen schneller aufbauen.
3. Besucher konsequent in ein qualitativ gutes Erstgespraech fuehren.

## 2. Ausgangslage im Repository

Bereits vorhanden:

- datengetriebene Homepage ueber [`_data/home.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/home.yml)
- mehrere Leistungs-/Landingpages ueber [`_data/landing_pages.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/landing_pages.yml) und [`_data/site_pages.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/site_pages.yml)
- Kontaktseite mit direkter Kontaktmoeglichkeit und Microsoft-Bookings unter [`contact.md`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/contact.md)
- vorhandenes persoenliches Profil-/Trust-Material unter [`_data/about.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/about.yml)
- Blog mit bereits vorhandenen IGA-/Governance-Beitraegen unter [`_posts/`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_posts)

Aktuell erkennbare Schwaechen:

- die Startseite ist fachlich sauber, aber noch nicht stark genug auf konkrete Kaufanlaesse zugespitzt
- NIS2, SAP-IdM-Ablösung und regulatorischer Druck sind noch nicht als vordergruendige Trigger sichtbar
- die Vertrauensebene ist vorhanden, aber noch zu implizit
- die vorhandenen Blogbeitraege sind stark IGA-fokussiert; akute Einstiegs- und Suchthemen fuer kaufnahe Besucher fehlen noch
- das CTA ist funktional, aber noch nicht maximal vertrauensstark und nutzenorientiert formuliert
- Keycloak ist noch an mehreren Stellen als fachlicher Schwerpunkt sichtbar, obwohl diese Positionierung verworfen wurde

## 3. Arbeitsannahmen auf Basis der vollstaendigen Zielgruppenanalyse

Die nun vollstaendig gelieferte Analyse bestaetigt drei besonders starke Markttreiber:

1. Regulatorischer Druck durch NIS2 und verwandte Anforderungen.
2. SAP-IdM-Ablösung mit End-of-Maintenance-Druck.
3. Unterversorgung des Mittelstands mit verlässlicher, senioriger IAM-Beratung.

Zusaetzlich gilt fuer die Schaerfung der Positionierung:

4. kuventa wird primaer als IGA-Beratung wahrgenommen, nicht als generischer IAM- oder Login-Anbieter.
5. Die fachlich sichtbaren Plattformschwerpunkte liegen bei `MidPoint` und `One Identity`.
6. `Keycloak` wird komplett aus Positionierung, Angebotslogik und Leistungsnarrativ entfernt.

Wichtige Konsequenz fuer die Website:

- kuventa darf nicht wie ein generischer IAM-Dienstleister wirken
- kuventa muss wie die spezialisierte, pragmatische Antwort auf konkrete Handlungsfaelle in IGA-, Governance- und Modernisierungsvorhaben wirken
- die Kommunikation sollte weniger von "Wir koennen IAM" und staerker von "Wir helfen Ihnen in dieser konkreten Lage sicher und vernuenftig weiter" ausgehen
- die Website sollte nicht primaer nach Technologien, sondern nach Handlungsdruck, Zielgruppe und Einstiegsformat verkaufen
- NIS2 und SAP-IdM-Ablösung sind die besten Demand-Treiber fuer Akquise; IGA/Governance ist ein starker Vertrauens- und Ausbau-Cluster
- Branchenseiten sollten erst nach den zwei grossen Nachfrageclustern folgen, damit die Website nicht zu frueh zerfasert
- MidPoint und One Identity werden als glaubwuerdige Plattformoptionen im IGA-/Ablösungskontext sichtbar gemacht, ohne in Tool-Pitching zu kippen

Hinweis zur Zeitlogik:

- Laut vorliegender Analyse gilt das deutsche NIS2-Umsetzungsgesetz bereits seit dem 06.12.2025.
- Da heute der 03.04.2026 ist, sollten NIS2-Inhalte nicht als kommende Pflicht formuliert werden, sondern als bereits geltende Realitaet.
- Wenn wir diese Themen spaeter textlich umsetzen, muessen wir absolute Daten statt relativer Formulierungen wie "bald" oder "demnaechst" verwenden.

### 3.1 Explizit freigegebene Vertrauenssignale

Vom Nutzer freigegeben fuer die Positionierung:

- Kunden-/Projektkontexte duerfen benannt werden
- nennbare Namen: dmTECH GmbH, Aveniq AG, SPIEGEL-Verlag Rudolf Augstein GmbH & Co. KG
- zusaetzlich nennbar: eine grosse Versicherung / Versicherungsbranche
- offizielle Kundenstatements oder schriftlich freigegebene Testimonials liegen derzeit nicht vor

### 3.2 Konsequenz fuer die Referenzdarstellung

Die Website sollte deshalb vorerst mit diesen Trust-Formaten arbeiten:

- sachliche Referenz-/Erfahrungsleiste mit Namen oder Projektkontexten
- keine erfundenen oder weich formulierten Pseudo-Testimonials
- keine konkreten Erfolgskennzahlen, solange sie nicht freigegeben sind
- Logos nur dann einsetzen, wenn die Nutzungsrechte und die Freigabe dafuer sauber geklaert sind
- Formulierungen lieber in Richtung "Erfahrung in Projekten fuer ..." oder "Projekterfahrung unter anderem in Umfeldern wie ..." statt ueberzogener Werbesprache

## 4. Strategisches Zielbild fuer die Website

### 4.1 Positionierung

kuventa soll als Boutique-Beratung mit hoher technischer Tiefe und klarer Management-Relevanz erscheinen:

- spezialisiert statt breit
- seniorig statt austauschbar
- umsetzungsnah statt powerpoint-lastig
- mittelstandsnah statt konzernlastig
- persoenlich erreichbar statt anonymer Agenturauftritt

Ergaenzende Praezisierung:

- IGA-first statt allgemeines IAM-Wording
- Enterprise-tauglich ohne Grossberatungsattituede
- stark im gehobenen Mittelstand, anschlussfaehig fuer komplexe Enterprise-Umfelder
- plattformoffen in der Beratung, aber mit sichtbarer Erfahrung in `MidPoint` und `One Identity`

### 4.2 Kernbotschaft

Arbeitsrichtung fuer die Neupositionierung:

"kuventa hilft Enterprise-Kunden und dem gehobenen Mittelstand, Identity Governance und gewachsene Berechtigungslandschaften unter regulatorischem, organisatorischem und technischem Druck verlässlich zu ordnen, zu modernisieren und sicher in die Umsetzung zu bringen."

### 4.3 Primäre Kaufmotive

Die Website sollte spaeter vor allem auf diese Motive einzahlen:

- "Wir muessen wegen NIS2 / Audit / Governance handlungsfaehig werden."
- "Unsere Identity-Landschaft ist gewachsen und niemand hat mehr das Gesamtbild."
- "SAP IdM faellt weg und wir brauchen einen realistischen Nachfolgepfad."
- "Wir brauchen IGA, die in Betrieb, Revision und Management wirklich funktioniert."
- "Wir wollen MidPoint oder One Identity sinnvoll einordnen, statt einem Tool-Pitch zu folgen."
- "Wir wollen keinen Tool-Pitch, sondern eine belastbare Einordnung und einen seniorigen Sparringspartner."

## 4.4 Verbindliche Strategieentscheidungen

Diese Entscheidungen gelten ab jetzt als Arbeitsgrundlage fuer die Umsetzung:

1. Das primaere Einstiegsangebot der Website ist das `Identity Assessment`.
2. NIS2 und SAP-IdM-Ablösung bleiben die zwei staerksten Nachfrage- und Akquise-Trigger.
3. Alle wichtigen Einstiege der Website fuehren inhaltlich auf das `Identity Assessment` als sinnvollen ersten Schritt.
4. Der `NIS2-Betroffenheitscheck` bleibt als moeglicher Lead-Magnet bzw. niedrigschwelliger Einstieg im Plan, aber nicht als Hauptangebot.
5. Die Website verkauft zunaechst keine grossen Managed Services offensiv, solange Scope und SLA-Modell nicht final definiert sind.
6. Die Tonalitaet wird als Arbeitsannahme `bewusst gemischt` gefuehrt:
   - management-verstaendlich in Nutzen, Risiko und Prioritaet
   - technisch glaubwuerdig in Architektur, Standards und Umsetzung
7. Die Referenzdarstellung erfolgt vorerst ueber sachliche Namensnennung bzw. Projektkontexte, nicht ueber Testimonials.
8. `Keycloak` wird ab dieser Iteration aus saemtlichen Positionierungs-, Meta- und Leistungsseiten entfernt.
9. `MidPoint` und `One Identity` werden als fachlich passende IGA-/Ablösungsplattformen sichtbar gemacht, ohne die Website produktzentriert aufzubauen.
10. kuventa wird auf der gesamten Website primaer als `IGA-Berater` bzw. `IGA-/Identity-Beratung` beschrieben.

## 5. Priorisierte Zielgruppen und Markteintrittslogik fuer die Website

### Prioritaet A: Mittelstand mit NIS2-/Compliance-Druck

Typische Rollen:

- Geschaeftsfuehrung
- IT-Leitung
- CISO / ISB / Security-Verantwortliche
- Projektverantwortliche fuer IAM, Governance oder Audit-Vorbereitung

Was diese Zielgruppe braucht:

- schnelle Einordnung der Lage
- klares Risikoverstaendnis in Business-Sprache
- pragmatische erste Schritte
- Vertrauen, dass jemand sowohl Technik als auch Organisation versteht
- moeglichst niedrige Einstiegshuerde, idealerweise ueber Check, Quickcheck oder Erstgespraech

Website-Rolle:

- primaerer Akquise-Case fuer Homepage, CTA und erste neue Landingpage
- ideal fuer produktisierte Einstiegsangebote mit klaren Deliverables
- fuehrt im Hauptpfad in das `Identity Assessment`

### Prioritaet A1: Enterprise und gehobener Mittelstand mit IGA-/Ablösungsdruck

Typische Rollen:

- IT-Leitung
- Head of IAM / IGA
- CISO / Informationssicherheit
- Enterprise-Architektur
- Revision / Compliance-nahe Entscheider

Was diese Zielgruppe braucht:

- seniorige Einordnung statt Junior-Delivery
- Plattformbewertung mit Blick auf Governance, Betrieb und Integration
- einen realistischen Pfad fuer `MidPoint`, `One Identity` oder einen geordneten Ablösungsweg
- Verknuepfung von NIS2, Audit, Rezertifizierung und Rollen-/Berechtigungsmodellen

Website-Rolle:

- muss schon auf Startseite, Leistungsseite und Beraterprofil explizit angesprochen werden
- sorgt fuer mehr Anschlussfaehigkeit in groesseren Accounts und bei anspruchsvolleren Mandaten

### Prioritaet B: Unternehmen mit SAP-IdM-Ablösung

Typische Rollen:

- IAM-Verantwortliche
- Enterprise- / Solution-Architekten
- IT-Leitung
- Programm- oder Transformationsverantwortliche

Was diese Zielgruppe braucht:

- glaubwuerdige Migrations- und Modernisierungskompetenz
- Orientierung ohne Big-Bang-Versprechen
- klares Zielbild und priorisierte Roadmap
- sichtbare Erfahrung mit SAP-/HR-/Drittsystem-Kontexten

Website-Rolle:

- zweiter grosser Akquise-Case mit eigener dedizierter Landingpage
- starker Fit fuer Roadmap-, Assessment- und Migrationsangebote
- fuehrt im Hauptpfad ebenfalls in das `Identity Assessment`

### Prioritaet C: Unternehmen mit IGA-/Berechtigungschaos

Typische Rollen:

- IT-Leitung
- Revision / Compliance-nahe Ansprechpartner
- IAM-/IGA-Verantwortliche

Was diese Zielgruppe braucht:

- Ordnung, Rollenmodell, Governance, Rezertifizierung
- Verstaendnis fuer Betrieb und Verantwortlichkeiten
- Unterstuetzung fuer belastbare Entscheidungen statt Tool-Fixierung

Website-Rolle:

- starker Vertrauens- und Content-Cluster
- wichtig fuer Blog, Leistungsseiten und Folgegeschaefte
- zentrales fachliches Profil fuer kuventa, nicht nur ein Nebencluster

### Prioritaet D: Produktisierte Services als Einstiegsformat

Das ist weniger eine Zielgruppe als eine Vertriebslogik, aber fuer die Website zentral.

Was hier funktioniert:

- feste Pakete statt nur offener Beratungsansatz
- kurze Laufzeiten
- klares Ergebnisbild
- moeglichst geringer interner Aufwand fuer den Kunden

Website-Rolle:

- conversion-starker Layer ueber mehrere Segmente hinweg
- besonders wichtig fuer NIS2, SAP-IdM-Readiness und IAM-Health-Checks
- das produktisierte Kernangebot im ersten Schritt ist das `Identity Assessment`

### Prioritaet E: DevOps / CI-CD / technische Teams

Dieses Segment ist interessant, sollte aber nachrangig hinter NIS2 und SAP-IdM aufgebaut werden.

Warum nur zweite Welle:

- fachlich attraktiv und differenzierend
- aber vermutlich kleiner und erklaerungsbeduerftiger als die regulatorisch oder technologisch getriebenen Nachfragecluster
- eignet sich stark fuer Thought Leadership, Blog und spaetere Spezial-Landingpages

### Prioritaet F: Branchenspezifische Verticals

Branchen sind wichtig, aber eher als vertiefende Layer auf Basis der Kernsegmente.

Empfohlene Logik:

- zuerst allgemein starke Akquise-Seiten fuer NIS2 und SAP-IdM
- danach Branchen-Unterseiten fuer Energie, Gesundheit, Industrie/Produktion und ggf. Finanzdienstleistung
- so bleibt die Website zuerst fokussiert und spaeter ausbaubar

## 6. Umsetzungsstrategie nach Seitenbereich

## 6.0 Naechste Iteration: verbindlicher Umsetzungsumfang

Diese Iteration hat einen klaren Fokus und ist nicht optional:

1. `Keycloak` komplett aus Website-Textern, Meta-Descriptions, Leistungsnarrativen und Positionierungsmodulen streichen.
2. Homepage, Leistungen, Ueber-uns und Beraterprofil klar auf `IGA-Beratung` ausrichten.
3. `MidPoint` und `One Identity` als glaubwuerdige Plattformkontexte fuer IGA, SAP-IdM-Ablösung und Enterprise-/Mittelstandsprojekte verankern.
4. NIS2 nicht nur als Trigger, sondern als konkrete Management- und Governance-Realitaet formulieren.
5. Enterprise und gehobenen Mittelstand explizit als primaere Zielsegmente benennen.

Konkrete Textregeln fuer diese Iteration:

- kein Login-/SSO-first-Narrativ mehr als Hauptbotschaft
- kein Produktfokus auf Customer Identity als sichtbarer Schwerpunkt der Kernnavigation
- IGA, Governance, Rollen, Rezertifizierung, Joiner-Mover-Leaver, Verantwortlichkeiten und Auditfaehigkeit werden staerker gewichtet
- Plattformbegriffe nur dort einsetzen, wo sie die Einordnung verbessern
- `MidPoint` und `One Identity` als Umsetzungs- und Transformationskontext nennen, nicht als isolierte Verkaufsobjekte

## 6.1 Inhaltliche Architektur nach der Schaerfung

Empfohlene inhaltliche Leitlinie fuer die naechste Ausbaustufe:

- Homepage verkauft Relevanz, NIS2-Druck, IGA-Kompetenz und den Einstieg ueber `Identity Assessment`
- Leistungsseite strukturiert in `Identity Assessment`, `IGA / Governance`, `SAP-IdM-Ablösung & Modernisierung`, `Umsetzung mit MidPoint oder One Identity`
- Ueber-uns und Beraterprofil belegen seniorige IGA-Erfahrung in Enterprise- und Mittelstands-Umfeldern
- Bestehende SSO-/Customer-Identity-Seiten werden nicht mehr als fachlicher Schwerpunkt behandelt und spaeter entweder umgebaut, herabgestuft oder ersetzt

### 6.1 Homepage

Ziel:

Die Startseite muss innerhalb weniger Sekunden zeigen, fuer wen kuventa relevant ist, welcher akute Anlass besteht und warum kuventa vertrauenswuerdig ist.

Geplante Aenderungsrichtung:

- Hero klarer auf Handlungsdruck und Zielgruppen zuschneiden
- sichtbare Trigger fuer NIS2, SAP-IdM-Ablösung und gewachsene IAM-Landschaften einbauen
- die aktuelle Problemsektion straffer und kaufnaher formulieren
- einen deutlich staerkeren Vertrauensblock frueh auf der Seite platzieren
- CTA nicht nur allgemein, sondern mit greifbarem Erstgespraech-Nutzen formulieren

Empfohlene neue Homepage-Module:

1. Hero mit scharfer Positionierung und 2 CTAs
2. Trigger-Sektion: "Wann Unternehmen mit kuventa sprechen"
3. Trust-Leiste: Standort Hamburg / Norden, persoenlicher Ansprechpartner, Spezialisierung, Umsetzung
4. Leistungslogik: `Identity Assessment`, Roadmap, Umsetzung
5. Social-/Proof-Sektion mit echten Nachweisen und nennbaren Kundenumfeldern
6. FAQ oder Einwandbehandlung
7. Abschluss-CTA mit klarer Erwartung fuer das Erstgespraech

Verbindliche Homepage-Funktion:

- Besucher sollen die Seite mit einer klaren Antwort verlassen auf die Frage:
  "Wenn wir Handlungsdruck bei Identity, Governance, NIS2 oder SAP-IdM haben, ist das Identity Assessment der richtige erste Schritt."

### 6.2 Leistungs- und Landingpages

Ziel:

Bestehende Seiten staerker entlang echter Einstiegsprobleme statt nur entlang technischer Leistungsbegriffe strukturieren.

Empfohlene Aenderungsrichtung:

- jede Seite auf einen klaren Ausloeser zuspitzen
- Management-Nutzen und Umsetzungssicherheit staerker zeigen
- staerkere interne Verlinkung zwischen Analyse, Modernisierung und Umsetzung
- je Seite ein eindeutiges Primary CTA plus vertrauensbildende Mikroelemente

Besonders wichtige Seiten fuer die naechste Umsetzungsphase:

- `index.md`
- `identity-assessment.html`
- `identity-modernisierung.html`
- `sso-plattform.html`
- `loesungen.html`
- `contact.md`

### 6.3 Segmentierte Landingpages fuer Akquise

Zusatz zu den bestehenden Leistungsseiten:

Die bestehenden Seiten verkaufen bereits Leistungen und Architekturlogik. Fuer die Akquise sollten zusaetzlich zielgruppennaehere Landingpages aufgebaut werden, die den Einstiegsdruck des Besuchers direkter treffen.

Empfohlene neue Seiten:

1. `nis2-compliance.html` oder `/nis2-compliance/`
2. `sap-idm-migration.html` oder `/sap-idm-migration/`
3. `managed-identity-services.html` oder `/managed-identity-services/`
4. `devops-iam.html` oder `/devops-iam/`
5. spaeter branchenspezifische Seiten wie `/iam-gesundheitswesen/` oder `/iam-versorger/`

Rollen dieser Seiten:

- Akquise ueber konkrete Suchintention
- Lead-Magneten und Einstiegsangebote platzieren
- spaeter als Zielseiten fuer Blog, Ads oder Outreach nutzbar
- Conversion-Ziel ist jeweils der Einstieg in das `Identity Assessment`

### 6.4 About / Beraterprofil / Vertrauen

Ziel:

Aus persoenlichem Profil muss kaufrelevantes Vertrauen werden.

Empfohlene Aenderungen:

- Profil staerker auf "Warum kuventa fuer diese Projekte" zuspitzen
- Erfahrung nicht nur aufzuehlen, sondern in Relevanz fuer Zielkunden uebersetzen
- Zertifikate, Projekterfahrung, Rollen, Branchen oder Referenzmuster klarer zeigen
- persoenliche Erreichbarkeit als Staerke ausspielen
- freigegebene Kunden-/Projektkontexte sichtbar, aber sachlich integrieren
- Hamburg als lokal verankerter Spezialist fuer den Norden deutlicher ausspielen

### 6.5 Kontakt / CTA

Ziel:

Weniger Reibung, mehr Vertrauen, klarere Erwartungshaltung.

Empfohlene CTA-Richtung:

- "Erstgespraech" nicht als Verkaufsbutton, sondern als strukturierte Einordnung darstellen
- klar benennen, was im Gespraech passiert
- klar benennen, fuer wen das Gespraech geeignet ist
- direkte Kontaktwege beibehalten, weil sie Vertrauen erzeugen
- Bookings nur als Option, nicht als alleinige Handlung

Empfohlene Trust-Elemente direkt am CTA:

- persoenliche Rueckmeldung durch Dennis
- kurze Antwortzeit, falls realistisch belegbar
- kein unverbindliches Sales-Blabla, sondern konkrete Einordnung
- sichtbare Firmendaten / Standort / Ansprechpartner
- falls vorhanden: Referenzen, Projektarten, Zertifikate
- Hinweis, dass kein anonymer Vertrieb vorgeschaltet ist

### 6.6 Blog / Thought Leadership

Ziel:

Der Blog soll nicht nur Wissen zeigen, sondern kaufnahe Suchintentionen bedienen und Vertrauen in kuventas Urteilskraft aufbauen.

Aktueller Stand:

- 6 vorhandene Beitraege, stark rund um IGA/Governance
- gut fuer Tiefenschaerfe
- noch nicht breit genug fuer NIS2-, SAP-IdM- und Management-getriebene Einstiege

Empfohlene Content-Cluster:

1. Regulierung und Handlungsdruck
2. SAP-IdM-Ablösung und Modernisierung
3. Governance, Rollen und Audit
4. Architektur, Plattformwahl, Zielbild und Migration
5. spaeter branchenspezifische IAM-Perspektiven

## 7.1 Angebotsarchitektur fuer die Website

Das kuenftige Angebotsmodell auf der Website wird in drei Ebenen strukturiert:

### Ebene 1: Primaeres Einstiegsangebot

`Identity Assessment`

Zweck:

- niedrig genug fuer den Erstkauf
- breit genug fuer NIS2, SAP-IdM, Governance und gewachsene Landschaften
- stark genug, um kuventas Denk- und Umsetzungskompetenz zu beweisen

Kommunikatives Ziel:

- nicht als abstrakte Analyse verkaufen
- sondern als strukturierte Entscheidungsgrundlage fuer konkrete naechste Schritte

### Ebene 2: Sekundaere Einstiege / Tueroeffner

- NIS2-Betroffenheitscheck
- SAP-IdM-Readiness-Check
- ggf. IAM-Health-Check

Rolle:

- niedrigere Huerde
- Lead-Magnet oder kompaktes Vorformat
- duerfen den Hauptverkauf des `Identity Assessment` nicht verwässern

### Ebene 3: Folgeangebote

- Roadmap / Zielbild
- Implementierungsbegleitung
- SSO-Plattform / Customer Identity / Modernisierung
- punktuelle laufende Begleitung

Rolle:

- Upsell nach Assessment
- Ausbau der Kundenbeziehung
- inhaltlich bereits auf der Website vorbereiten, aber nicht als erster Kauf fordern

## 7.2 Identity Assessment als Produkt

Damit das Angebot auf der Website klar, kaufbar und vertrauenswuerdig wirkt, wird das `Identity Assessment` wie ein echtes Produkt beschrieben.

Zentrale Produktbotschaft:

"Sie erhalten in kurzer Zeit ein belastbares Bild Ihrer Ausgangslage, der wichtigsten Risiken und der sinnvollsten naechsten Schritte."

Was das Assessment auf der Website leisten soll:

- Ausgangslage technisch und organisatorisch einordnen
- Risiken, Reibung und Handlungsdruck sichtbar machen
- Zielbild und Prioritaeten ableiten
- Management und IT eine gemeinsame Entscheidungsgrundlage geben

Geplante sichtbare Deliverables:

1. Architektur- und Ausgangslagenbild
2. Risiko- und Handlungsfeldbewertung
3. priorisierte Empfehlungen
4. Zielbild bzw. Entscheidungsrichtung
5. konkrete naechste Schritte fuer Umsetzung oder Roadmap

Passende Kaufanlaesse fuer das Assessment:

- NIS2-Druck
- SAP-IdM-Ablösung
- unklare Rollen- und Berechtigungslage
- gewachsene Authentifizierungslandschaft
- anstehende Modernisierung oder Tool-Entscheidung

## 7. Konkreter Vorschlag fuer neue Blogbeitraege

Prioritaet 1:

1. "NIS2 im Mittelstand: Was seit dem 06.12.2025 fuer betroffene Unternehmen konkret gilt"
2. "Bis wann SAP Identity Management ersetzt sein sollte und warum 2027 spaet ist"
3. "IAM unter NIS2: Welche Nachweise und Steuerungsfaehigkeiten Unternehmen wirklich brauchen"
4. "SAP IdM Nachfolge: Assessment, Roadmap oder direkte Migration?"

Prioritaet 2:

1. "Warum Mittelstaendler bei IAM-Projekten oft zwischen Grossberatung und Freelancer-Luecke landen"
2. "So bereiten Unternehmen Berechtigungen und Rollen fuer Audits wirklich belastbar vor"
3. "Identity Governance im Mittelstand: Was zuerst geklaert werden muss"
4. "MidPoint oder One Identity: Wie Unternehmen eine realistische Plattformentscheidung treffen"

Prioritaet 3:

1. "DORA, NIS2 und Identity: Wo sich Anforderungen ueberschneiden"
2. "Wie man eine gewachsene Authentifizierungslandschaft ohne Big Bang modernisiert"
3. "Was Geschaeftsfuehrung und IT-Leitung vor einem IAM-Projekt gemeinsam entscheiden muessen"
4. "Rezertifizierung ohne Theater: Wie Governance im Alltag funktioniert"

## 8. CTA-Konzept mit hohem Vertrauen

Empfohlener Haupt-CTA:

"Ausgangslage in einem kurzen Erstgespraech einordnen"

Warum diese Richtung:

- niedrigere Huerde als "Beratung anfragen"
- staerkerer Nutzen als "Kontakt aufnehmen"
- passt zur Senior-/Sparringspartner-Positionierung
- wirkt vertrauensvoller als aggressives Conversion-Wording

Empfohlene CTA-Bausteine:

- klare Ueberschrift
- 2 bis 4 Stichpunkte: Was der Besucher im Gespraech bekommt
- direkter Ansprechpartner mit Bild
- E-Mail, Telefon und Terminbuchung nebeneinander
- Vertrauenssatz wie: "Sie sprechen direkt mit Dennis Kuerschner, nicht mit Vertrieb oder Assistenz."

Moegliche Nutzenpunkte im CTA:

- erste Einordnung von Handlungsdruck und Prioritaeten
- Schaetzung, ob eher Assessment, Roadmap oder Umsetzung sinnvoll ist
- Abgleich, welche Risiken aktuell am groessten sind
- Orientierung, welche naechsten Schritte realistisch sind

### 8.1 Produktisierte Einstiegsangebote

Aus der Analyse lassen sich mehrere conversion-starke Einstiegsformate ableiten:

1. NIS2-Betroffenheitscheck
2. NIS2-Quickcheck mit klaren Deliverables
3. SAP-IdM-Readiness-Check
4. IAM-Health-Check
5. Identity-Governance-Basisanalyse

Empfehlung:

- auf der Website zuerst 2 starke Einstiegsformate klar herausarbeiten
- verbindliche Reihenfolge:
  1. `Identity Assessment` als primaeres Kaufangebot
  2. `NIS2-Betroffenheitscheck` als optionaler niedrigschwelliger Einstieg
- `SAP-IdM-Readiness-Check` kann spaeter als dediziertes Segmentangebot folgen, sollte aber anfangs nicht mit dem Hauptangebot konkurrieren

Wichtiger Hinweis:

- Managed Services nur dann offensiv verkaufen, wenn Scope, Verfuegbarkeit, Reaktionszeiten und SLA-Bausteine intern realistisch abbildbar sind
- sonst besser zunaechst mit "laufender Begleitung", "Sparring" oder "punktueller Umsetzungsunterstuetzung" arbeiten

## 9. Finaler Umsetzungsplan

Der Plan ist jetzt so weit konkretisiert, dass die Umsetzung ohne weitere Strategierunde starten kann.

### 9.1 Zielbild fuer die erste Ausbaustufe

Nach der ersten Umsetzungsphase soll die Website folgendes leisten:

1. kuventa sichtbar als spezialisierte Boutique fuer Identity-Modernisierung im Mittelstand positionieren
2. NIS2- und SAP-IdM-Druck als konkrete Einstiegsanlaesse abbilden
3. `Identity Assessment` als natuerlichen ersten Kauf sauber verkaufen
4. Vertrauen ueber persoenliche Erreichbarkeit, Referenzkontexte und klare Sprache aufbauen
5. Blog und Seitenstruktur auf spaetere Skalierung vorbereiten

### 9.2 Seitenpriorisierung fuer die Umsetzung

Reihenfolge fuer die Realisierung:

1. Homepage
2. Kontaktseite / CTA-Strecke
3. `Identity Assessment`-Seite
4. neue Landingpage `NIS2-Compliance`
5. neue Landingpage `SAP-IdM-Migration`
6. Beraterprofil / Vertrauensebene
7. Blog-Umbau und neue Beitraege

### 9.3 Konkreter Homepage-Plan

Die Homepage wird in dieser Reihenfolge aufgebaut bzw. umgebaut:

1. Hero
   - klares Nutzenversprechen
   - Trigger: NIS2, SAP-IdM, gewachsene Identity-Landschaften
   - Primary CTA: zum `Identity Assessment`
   - Secondary CTA: direktes Erstgespraech / Kontakt
2. Trigger-Sektion
   - drei bis vier typische Ausloeser
   - z. B. NIS2, SAP-IdM-Ende, Audit-/Governance-Druck, unklare Systemlandschaft
3. Trust-/Proof-Leiste
   - Hamburg / Norden
   - direkter Ansprechpartner
   - Kunden-/Projektkontexte
   - Spezialisierung auf Identity statt General-IT
4. Angebotssektion
   - `Identity Assessment` als erster Schritt
   - danach Roadmap / Umsetzung
5. Warum kuventa
   - Boutique statt Grossberatung
   - seniorig statt generisch
   - umsetzungsnah statt rein konzeptionell
6. FAQ / Einwandbehandlung
   - fuer wen passend
   - wann sinnvoll
   - was im Erstgespraech passiert
7. Schluss-CTA
   - persoenlich
   - vertrauensstark
   - ohne Sales-Sprache

### 9.4 Konkreter Plan fuer das CTA-System

Es wird ein einheitliches CTA-System verwendet:

Primary CTA:

- `Identity Assessment anfragen`

Secondary CTA:

- `Ausgangslage kurz besprechen`

CTA-Inhalte:

- was im Erstgespraech passiert
- fuer wen es gedacht ist
- direkter Kontakt zu Dennis
- E-Mail, Telefon und Terminbuchung
- kurzer Vertrauenshinweis ohne Testimonials

### 9.5 Konkreter Plan fuer Trust und Referenzen

Trust wird ueber vier Ebenen aufgebaut:

1. Person
   - Dennis als direkter Ansprechpartner
2. Spezialisierung
   - klare Fokussierung auf Identity / IAM / Governance / Modernisierung
3. Projektkontexte
   - dmTECH GmbH
   - Aveniq AG
   - SPIEGEL-Verlag Rudolf Augstein GmbH & Co. KG
   - grosse Versicherung / Versicherungsbranche
4. Arbeitsweise
   - persoenlich
   - seniorig
   - pragmatisch
   - umsetzungsnah

Wichtige Regel:

- keine Logos oder Testimonials ohne belastbare Freigabe

### 9.6 Konkreter Plan fuer neue Landingpages

#### Landingpage 1: NIS2-Compliance

Ziel:

- Nachfrage ueber regulatorischen Druck einsammeln
- in das `Identity Assessment` ueberfuehren

Kernmodule:

1. Wer betroffen ist
2. Warum jetzt Handlungsdruck besteht
3. welche Identity-/Governance-Themen typischerweise fehlen
4. warum das `Identity Assessment` der richtige Einstieg ist
5. CTA

#### Landingpage 2: SAP-IdM-Migration

Ziel:

- Nachfrage ueber technologischen Umbruch einsammeln
- in das `Identity Assessment` ueberfuehren

Kernmodule:

1. Ende von SAP IdM
2. typische Risiken bei Warten oder Verlaengerung
3. warum ein sauberes Zielbild vor Tool- oder Migrationsentscheidungen noetig ist
4. relevante Projekterfahrung und Integrationsnaehe
5. CTA

### 9.7 Konkreter Plan fuer den Blog

Die erste Content-Welle soll direkt die Akquise-Seiten stuetzen.

Erste Umsetzungsreihenfolge:

1. NIS2 im Mittelstand
2. SAP IdM ersetzen: warum 2027 spaet ist
3. IAM unter NIS2
4. SAP IdM Nachfolge: Assessment, Roadmap oder direkte Migration
5. danach Governance-/IGA-Vertiefungen

Jeder neue Beitrag soll:

- auf eine Landingpage oder das `Identity Assessment` verlinken
- einen klaren Suchintent bedienen
- keine rein allgemeine Fachabhandlung sein

### 9.8 Nicht-Ziele fuer die erste Umsetzungsphase

Diese Themen werden bewusst noch nicht priorisiert:

- breite Branchenverzweigung mit vielen Unterseiten
- umfangreiche Managed-Service-Vermarktung
- komplexe Toolsammlungen oder Vergleichsportale
- aggressive Lead-Generierung mit Popups oder ueberladenen Formularstrecken
- Aussagen, die juristisch, regulatorisch oder referenzseitig nicht belastbar sind

## 10. Reihenfolge der Umsetzung

### Phase 1: Messaging und Conversion-Fundament

- Homepage-Botschaft schaerfen
- CTA-System definieren
- Trust-Bloecke definieren
- Seitentonalitaet vereinheitlichen

### Phase 2: Kernseiten umbauen

- Homepage
- Kontaktseite
- wichtigste Leistungsseiten
- About-/Beraterprofil-Vertrauensebene

### Phase 3: Content-Ausbau

- neue Blogbeitraege mit kaufnahen Themen
- interne Verlinkung Blog <-> Leistungsseiten
- FAQ-/Einwandsektionen

### Phase 4: Feinschliff

- visuelle Priorisierung
- mobile Optimierung der CTAs
- Reduktion von Reibung in Formular-/Kontaktstrecken
- Konsistenzpruefung ueber alle Seiten

## 11. Technische Umsetzungsrichtung im bestehenden Jekyll-Setup

Die vorhandene Struktur ist dafuer gut geeignet. Wahrscheinlichste Eingriffspunkte:

- [`_data/home.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/home.yml)
- [`_data/landing_pages.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/landing_pages.yml)
- [`_data/site_pages.yml`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_data/site_pages.yml)
- [`_includes/home-sections/`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_includes/home-sections)
- [`_includes/landing/`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_includes/landing)
- [`contact.md`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/contact.md)
- [`blog.md`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/blog.md)
- [`_posts/`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/_posts)
- [`assets/css/site.scss`](/Users/denniskurschner/Documents/Workspace/kuventa/kuventa.website/assets/css/site.scss)

Wahrscheinliche technische Linie:

- so viel wie moeglich datengetrieben in YAML halten
- neue Trust-/CTA-Module als wiederverwendbare Includes bauen
- Blog nicht nur erweitern, sondern thematisch neu clustern
- bestehende Designrichtung nutzen, aber Conversion-Hierarchie deutlich schaerfen

## 12. Bereits geliefert und was noch offen ist

### Bereits geliefert

- vollstaendige Zielgruppenanalyse mit Segmenten, Pain Points und Handlungsempfehlungen
- Freigabe fuer nennbare Kunden-/Projektkontexte
- Hinweis, dass keine offiziellen Testimonials verwendet werden duerfen

### Noch offen / noch zu klaeren

1. Sollen Kundennamen nur als Text erscheinen oder duerfen auch Logos eingesetzt werden, falls technisch vorhanden?
2. Welche Tools und Plattformen willst du offensiv nennen?
   - z. B. MidPoint, One Identity, SuccessFactors, Entra ID, Omada
3. Welche Branchen willst du besonders stark zeigen?
   - Empfehlung aktuell: Versicherung/Finanz, Medien, Handel, Industrie/Mittelstand
4. Soll die Website nur Deutschland adressieren oder DACH?
5. Sollen Tagessaetze oder Festpreise spaeter sichtbar kommuniziert werden?

### Weiterhin sehr hilfreich

1. Bevorzugte Tonalitaet:
   - eher geschaeftsfuehrungsnah
   - eher IT-Leitungs-/Architektur-nah
   - bewusst gemischt
2. Welche Leistungen du bewusst nicht verkaufen willst.
3. Welche Branchen oder Unternehmensgroessen du bevorzugst.
4. Welche Tools/Plattformen du offensiv nennen willst und welche nicht.
5. Ob wir ein Lead-Magnet-Element wollen:
   - Checkliste
   - PDF
   - NIS2-Selbstcheck
   - SAP-IdM-Readiness-Check

### Optional, aber conversion-stark

1. Reaktionszeit, falls belegbar.
2. Anzahl Jahre Erfahrung oder grobe Projekterfahrung.
3. anonymisierte Kundensituationen.
4. Typische Projektlaufzeiten oder Startformate.
5. Ob Logos, Fallstudien oder reine Namensnennung die gewuenschte Referenzform sind.

## 13. Fortschritt

- [x] Repository gesichtet
- [x] Bestehende Positionierung und Seitenstruktur analysiert
- [x] Verbindliche Priorisierung auf `Identity Assessment` fuer die Homepage umgesetzt
- [x] Homepage-Hero, Trigger, Trust-/Referenzblock und Angebotslogik auf Phase-1-Messaging umgestellt
- [x] Trust-/Referenzblock mit freigegebenen Projektkontexten integriert
- [x] CTA-System mit Primary CTA `Identity Assessment anfragen` und Secondary CTA `Ausgangslage kurz besprechen` auf der Homepage und in wiederverwendbarer Include-Struktur umgesetzt
- [x] FAQ-/Einwandsektion fuer das Erstgespraech auf der Homepage ergaenzt
- [x] Jekyll-Build nach Phase-1-Homepage-Umsetzung erfolgreich
- [x] Kontaktseite / CTA-Strecke entlang des neuen Systems angleichen
- [x] `Identity Assessment`-Seite als primaere Produktseite in Phase 2 schaerfen
- [ ] NIS2- und SAP-IdM-Landingpages anlegen
- [ ] Blog-/Verlinkungslogik fuer kaufnahe Themen ausbauen

### 13.1 Aktueller Umsetzungsstand

In der aktuellen Umsetzung wurden auf der Homepage sowie in den ersten Phase-2-Seiten die in Kapitel 9.3 bis 9.5 definierten Bausteine konkret abgebildet:

- Hero mit klarer Positionierung auf `Identity Assessment`
- Trigger-Sektion fuer NIS2, SAP-IdM, Audit-/Governance-Druck und gewachsene Identity-Landschaften
- frueher Trust-/Proof-Block mit Person, Spezialisierung, Arbeitsweise und nennbaren Referenzkontexten
- Angebotslogik mit `Identity Assessment` als erstem Schritt vor Roadmap und Umsetzung
- FAQ-/Einwandsektion und Schluss-CTA mit persoenlicher Kontaktlogik
- Kontaktseite mit direkter Erstgespraech-Positionierung, Einordnungslogik und klarer Erwartung an das Gespraech
- `Identity Assessment` als Produktseite mit Fokus auf IGA, Governance, Rollen, Plattformpfad und priorisierte naechste Schritte

### 13.2 Naechster Schritt

Als naechstes folgt gemaess Priorisierung:

1. NIS2-Landingpage als kaufnahen Einstieg aufbauen
2. SAP-IdM-Landingpage als zweiten starken Akquise-Case anlegen

## 14. Naechster sinnvoller Schritt

Nach der umgesetzten Homepage-Basis ist der naechste operative Schritt im Repository diese Reihenfolge:

1. NIS2-Landingpage als kaufnahen Einstieg aufbauen
2. SAP-IdM-Landingpage als zweiten starken Akquise-Case anlegen
3. Blog und interne Verlinkung fuer diese Einstiege ausbauen
