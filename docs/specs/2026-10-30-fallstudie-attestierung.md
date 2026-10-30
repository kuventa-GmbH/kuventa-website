# Spec: Provider-IAM entschärfen, Fallstudie 1 auf Attestierung umstellen

**Status:** Geprüft (freigegeben 30.10.2026) · **Datum:** 2026-10-30 · **Betroffene Seiten:** Referenzen, Leistungen, Über mich

## Ziel
Die Site stellt die Arbeit beim Schweizer IT-Dienstleister als Mitentwicklung eines Provider-IAM dar. Das stimmt so nicht:
Am Provider-IAM-Modul hat Dennis nur kleinere Bugs behoben. Sein eigentlicher Beitrag dort war die Umsetzung der Attestierungen.
Alle Stellen werden auf diesen tatsächlichen Beitrag umgestellt. Nichts darf mehr nach einem Musterprojekt klingen, das es nicht war.

## Quellen
- Dennis, Chat 30.10.2026:
  - „Das ist kein Musterprojekt, weil ich an diesem Modul nur minimale Bugs behoben habe.“
  - „Ich habe die Attestierungen für IAM-Application-Rollen, kritische App-Rollen, System-Rollen sowie administrative Berechtigungen umgesetzt.“
  - KRITIS-Umfeld stimmt. Die Aussagen „Team zu klein“ und „Wissensmonopol bei einer Person“ stimmen nicht und fallen weg.
- Attestierung als Leistung zusätzlich belegt durch die Timeline (Versicherer: Attestierungsprozesse; Computacenter: Rezertifizierung).

## Änderungen

### 1. Referenzen (`referenzen.html`), Fallstudie 1
| Feld | Heute | Neu (Entwurf) |
|---|---|---|
| Eyebrow | Fallstudie 1 · Schweizer IT-Dienstleister im KRITIS-Umfeld | bleibt |
| Titel | Provider-IAM mitentwickeln, Vertragsvolumen sichern | **Attestierung für kritische Berechtigungen umsetzen** |
| Ausgangslage | Provider-IAM für KRITIS-Kunden; Team zu klein, Wissen bei einer Person | Ein Schweizer IT-Dienstleister betreibt One Identity Manager im KRITIS-Umfeld. Gerade kritische und administrative Berechtigungen müssen dort regelmäßig von den Verantwortlichen bestätigt werden, nachvollziehbar und prüfbar. |
| Beitrag | Customizings und Modulentwicklung am Provider-IAM … | Umsetzung der Attestierungen in One Identity Manager für IAM-Anwendungsrollen, kritische Applikationsrollen, Systemrollen und administrative Berechtigungen. |
| Ergebnis | Kundenwünsche umgesetzt, Vertragsvolumen stemmbar, Wissensmonopol abgebaut | **Kritische und administrative Berechtigungen werden regelmäßig attestiert. Wer welches Recht wann bestätigt hat, ist nachvollziehbar.** |

Interpretiert, bitte bestätigen:
- In der Ausgangslage der Satz „müssen … regelmäßig bestätigt werden, nachvollziehbar und prüfbar“. Das ist der Zweck von Attestierung, aber keine Aussage von dir über diesen Kunden.
- Das Ergebnis. Du hast dazu nichts genannt, der Satz beschreibt nur, was eine umgesetzte Attestierung leistet. Es gibt keine Zahlen und kein Versprechen.

### 2. Referenzen, Meta-Description
„OneIM-Projekte bei Enterprise- und KRITIS-Kunden in Deutschland und der Schweiz: Provider-IAM, Modulentwicklung, Projektrettung. Echte Fälle, echte Ergebnisse.“
→ „Echte OneIM-Projekte bei Enterprise- und KRITIS-Kunden in Deutschland und der Schweiz: Attestierung, Projektrettung, Segregation of Duties.“ (139 Zeichen)
Begründung: Die drei Begriffe entsprechen den drei Fallstudien. „Modulentwicklung“ ist durch keine der Fallstudien belegt und fällt deshalb weg.
Die Spec `2026-10-30-google-suchtreffer.md` übernimmt diesen Text für Referenzen.

### 3. Leistungen (`leistungen.md`), Leistung 1, Aufzählung
„kundeneigenes Provider-IAM auf OneIM-Basis“ → **„Attestierung und Rezertifizierung von Berechtigungen“**

### 4. Über mich (`ueber-uns.html`), Timeline „Heute“
„Provider-IAM für KRITIS-Kunden in der Schweiz, eine gerettete OneIM-Einführung …“
→ „Attestierung kritischer Berechtigungen im Schweizer KRITIS-Umfeld, eine gerettete OneIM-Einführung in einem Medienhaus, SoD im BaFin-Umfeld. Und ein eigenes Produkt, entstanden aus der Analyse echter Betriebsthemen bei Kunden.“

## Offene Entscheidungen
- [x] Texte für Fallstudie 1, inklusive der zwei interpretierten Stellen (Dennis, 30.10.2026)
- [x] Neue Referenzen-Description

## Nicht im Scope
- Fallstudien 2 und 3.
- `docs/kuventa-website-texte-2026-06.md` (Archiv).
- Kundennamen (Aveniq bleibt anonym).

## Abnahmekriterien
- [x] `grep -i "provider-iam\|vertragsvolumen"` findet außerhalb von `docs/` nichts mehr
- [x] Jede Aussage zu Fallstudie 1 ist durch die Chatnachricht vom 30.10. gedeckt oder als bestätigte Interpretation vermerkt
- [x] Build fehlerfrei; Referenzen auf Desktop und Mobile geprüft
- [x] Unabhängiges Review (Diff + Spec)

## Review (30.10.2026)
1. **Build**: dev und production ohne Fehler und Warnungen.
2. **Visuell**: Referenzen Desktop (1440) und Mobile (390) per Playwright-MCP geprüft, kein horizontaler Scroll.
3. **Spec-Abgleich**: alle Texte wortgleich umgesetzt.
4. **Fakten**: `grep` nach provider-iam, Vertragsvolumen, Wissensmonopol, Architekturwissen, „unter der Flagge“ außerhalb `docs/`: keine Treffer zum Schweizer Kunden.
5. **Freigaben**: Kunde bleibt anonym.
6. **Konsistenz**: Du/Ich-Form eingehalten.
7. **Unabhängiges Review**: keine Blocker. Hinweis: „Modulentwicklung“ (Startseite, Leistungen, Site-Beschreibung) ist ohne Provider-IAM durch keine konkrete Station mehr belegt → Rückfrage an Dennis.
