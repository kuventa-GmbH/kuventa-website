# kuventa-website — Arbeitsweise

Jekyll-Site der kuventa GmbH. Setup, Struktur und Seitenliste: siehe `README.md`.

## Ablauf für jede inhaltliche oder gestalterische Änderung

Spec → Freigabe → Implementierung → Review → Commit. Kein Schritt wird übersprungen,
auch nicht bei „nur Texten“. Ausnahme: reine Tippfehler oder kaputte Links (direkt fixen, im Commit benennen).

### 1. Spec (`docs/specs/YYYY-MM-DD-<slug>.md`)
Vorlage: `docs/specs/_vorlage.md`. Eine Spec enthält:
- **Ziel**: was soll sich für Besucher ändern, warum
- **Quellen**: woher Fakten und Ideen stammen (CV, Interview, Kundengespräch …)
- **Änderungen pro Seite**: Abschnitt für Abschnitt, mit Entwurfstext für neue Copy
- **Offene Entscheidungen**: alles, was nur Dennis entscheiden kann (Preise, Versprechen, Kundennamen, persönliche Angaben)
- **Nicht im Scope**
- **Abnahmekriterien**: prüfbar formuliert

Status oben in der Spec: `Entwurf` → `Freigegeben` → `Umgesetzt` → `Geprüft`.

### 2. Freigabe
Dennis gibt die Spec frei (oder kommentiert). **Vor der Freigabe wird kein Seitencode geändert.**

### 3. Implementierung
- Nur, was in der freigegebenen Spec steht. Abweichungen erst in der Spec nachtragen und neu freigeben lassen.
- Copy-Regeln (aus `docs/kuventa-website-texte-2026-06.md`): Du-Form für die Besucher, Ich-Form für Dennis,
  kurze Sätze, keine Beraterfloskeln, keine Gedankenstriche als Satzverbinder.
- Design nur über Tokens/Komponenten in `assets/css/site.css`; neue Komponenten dort ergänzen, keine Inline-Farben.

### 4. Review (alle Punkte, Ergebnis in der Spec unter „Review“ notieren)
1. **Build**: `bundle exec jekyll build` läuft ohne Fehler und Warnungen.
2. **Visuell**: `bundle exec jekyll serve`, dann `BASE_URL=http://127.0.0.1:4000 node scripts/playwright-site-audit.mjs`;
   Screenshots unter `tmp/playwright-audit/` für Desktop und Mobile ansehen.
3. **Spec-Abgleich**: jedes Abnahmekriterium abhaken.
4. **Fakten-Check**: jede Aussage über Dennis, Kunden, Zahlen ist durch eine Quelle gedeckt. Nichts erfunden.
5. **Freigaben**: keine Kundennamen ohne schriftliche Freigabe (siehe README „Offene Punkte“).
6. **Konsistenz**: Preise synchron mit copilot.kuventa.de; Stimme (ich/du) einheitlich; `grep` nach Altformulierungen.
7. **Unabhängiges Review**: Diff von einem Reviewer ohne Kontext lesen lassen (z. B. `/code-review` oder Subagent mit Diff + Spec).

### 5. Commit
Ein Commit pro Spec, Nachricht verweist auf die Spec-Datei. Spec-Status auf `Geprüft`.
