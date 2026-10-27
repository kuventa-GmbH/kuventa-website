---
layout: default
title: Start
meta_title: "Dennis Kürschner | kuventa: Engineering für One Identity Manager"
description: "Ich bin Dennis Kürschner: Softwareentwickler, OneIM-Engineer, Gründer von kuventa und Entwickler von kubo. Modulentwicklung, Troubleshooting, Teamverstärkung. On-Prem, read-only, aus Hamburg."
permalink: /
---

<section class="hero">
  <div class="container hero-grid">
    <div>
      <span class="eyebrow js-anim" data-anim="animate__fadeInDown" data-once="true">Engineering für One Identity Manager</span>
      <h1 class="js-anim" data-anim="animate__fadeInLeft" data-once="true">Beratung, die Wissen hinterlässt. <span class="accent">Software, die es abrufbar macht.</span></h1>
      <p class="lede js-anim" data-anim="animate__fadeIn" data-once="true">Ich bin Dennis, und kuventa bin ich. Ich entwickle komplette Module in One Identity Manager, wo andere konfigurieren. Und ich baue kubo: den MCP-Server, der deine OneIM-Umgebung erklärt. On-prem, read-only, mit Quellenangabe.</p>
      <div class="actions js-anim" data-anim="animate__fadeInUp" data-once="true">
        <a class="btn btn-primary" href="{% include helpers/internal-href.html path='/kontakt/' %}" data-goatcounter-click="navigation/contact">Mit mir sprechen</a>
        <a class="btn btn-cta-secondary" href="{% include helpers/internal-href.html path='/kubo/' %}" data-goatcounter-click="feature/mcp">kubo ansehen</a>
      </div>
      <p class="hero-note js-anim" data-anim="animate__fadeIn" data-once="true">Im Einsatz bei Enterprise- und KRITIS-Kunden in Deutschland und der Schweiz.</p>
    </div>
    <figure class="hero-aside portrait js-anim" data-anim="animate__fadeIn" data-once="true">
      <img src="{{ '/assets/img/photos/about/dennis.webp' | relative_url }}" alt="Dennis Kürschner, Gründer der kuventa GmbH">
      <figcaption class="portrait-caption"><b>Dennis Kürschner</b>Gründer, OneIM-Engineer, Entwickler von kubo. Du sprichst mit mir, nicht mit einem Vertrieb.</figcaption>
    </figure>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head js-anim" data-anim="animate__fadeInUp" data-once="true">
      <span class="eyebrow">Kommt dir bekannt vor?</span>
      <h2>In fast jeder OneIM-Umgebung stecken dieselben <span class="accent">fünf Probleme.</span></h2>
    </div>
    <div class="container--narrow" style="margin: 0 auto;">
      <ol class="numbered">
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Das Wissen hängt an einer Person.</h3>
            <p>Eine Kollegin oder ein Kollege hat das System aufgebaut und wird seitdem permanent aus der eigentlichen Arbeit gerissen. Kein Backup, keine Doku, kein Plan B.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Customizings, die niemand mehr versteht.</h3>
            <p>Vor Jahren von Externen gebaut, undokumentiert geerbt. Jede Änderung beginnt mit Archäologie.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Der Betrieb steckt fest.</h3>
            <p>Rechte fehlen, Prozesse hängen „irgendwo“, und niemand findet in vertretbarer Zeit heraus, wo.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Synchronisation zu langsam.</h3>
            <p>Jobs laufen Stunden, und der Grund versteckt sich irgendwo zwischen Job, Step, Script und SQL-Lock.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Schlechte Umgebungsdaten.</h3>
            <p>Jedes Customizing-Budget wird zuerst von Datenqualitätsproblemen aufgefressen.</p>
          </div>
        </li>
      </ol>
      <p class="intro js-anim" data-anim="animate__fadeIn" data-once="true" style="margin-top: 32px; font-size: 18px; line-height: 30px; color: var(--text); text-align: center;">Diese Probleme kenne ich aus meinen Projekten. Deshalb arbeite ich genau an diesen fünf: beratend und mit Software.</p>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head js-anim" data-anim="animate__fadeInUp" data-once="true">
      <h2>Zwei Wege, ein Ziel: eine OneIM-Umgebung, <span class="accent">die dein Team selbst beherrscht.</span></h2>
    </div>
    <div class="grid g-2">
      <div class="service js-anim" data-anim="animate__fadeInUp" data-once="true">
        <p class="card-eyebrow">Beratung</p>
        <div class="icon">⌐</div>
        <h3>Beratung &amp; Engineering</h3>
        <p>Modulentwicklung, Troubleshooting, Verstärkung deines IAM-Teams. Hands-on und direkt mit mir. Es gibt keinen Junior aus dem Delivery-Pool, den ich nach Vertragsschluss schicken könnte.</p>
        <div class="actions" style="margin-top: auto;">
          <a class="btn btn-secondary" href="{% include helpers/internal-href.html path='/leistungen/' %}">Leistungen ansehen</a>
        </div>
      </div>
      <div class="service featured js-anim" data-anim="animate__fadeInUp" data-once="true">
        <p class="card-eyebrow">Produkt</p>
        <div class="icon">★</div>
        <h3>kubo</h3>
        <p>Der MCP-Server, den ich gebaut habe, weil ich dieselben OneIM-Fragen nicht in jedem Projekt neu von Hand beantworten wollte. Jede Frage, eine belegte Antwort, in unter 60 Sekunden. On-Prem, standardmäßig read-only.</p>
        <div class="actions" style="margin-top: auto;">
          <a class="btn btn-primary" href="{% include helpers/internal-href.html path='/kubo/' %}" data-goatcounter-click="feature/mcp">kubo ansehen</a>
          <a class="btn btn-cta-secondary" href="https://copilot.kuventa.de" data-goatcounter-click="navigation/demo">Live-Demo testen</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head js-anim" data-anim="animate__fadeInUp" data-once="true">
      <span class="eyebrow">Was hier anders ist</span>
      <h2>Softwareentwickler in einem Markt <span class="accent">voller Konfiguratoren.</span></h2>
      <p class="intro">Die meisten OneIM-Berater kommen aus Administration oder klassischem Consulting. Ich komme aus der Softwareentwicklung. Der Unterschied zeigt sich, sobald es tief wird:</p>
    </div>
    <div class="grid g-3">
      <div class="feature js-anim" data-anim="animate__fadeInUp" data-once="true">
        <div class="icon">⌗</div>
        <h3>Modulbau statt Zielsystem-Klempnerei</h3>
        <p>Ein neues Zielsystem bindet jeder erfahrene Consultant an. Ich entwickle komplette neue Module in OneIM: eigene Logik, eigene Prozesse, sauber ins Produkt integriert.</p>
      </div>
      <div class="feature js-anim" data-anim="animate__fadeInUp" data-once="true">
        <div class="icon">→</div>
        <h3>Ursache statt Symptom</h3>
        <p>Performance-Probleme, hängende Prozesse, geerbter Code: Ich suche die Kausalkette, nicht den schnellsten Workaround.</p>
      </div>
      <div class="feature js-anim" data-anim="animate__fadeInUp" data-once="true">
        <div class="icon">✓</div>
        <h3>Werkzeuge statt nur Stunden</h3>
        <p>Wenn sich ein Problem wiederholt, baue ich ein Werkzeug dafür. Allen voran kubo, das täglich in echten Kundenumgebungen mitarbeitet.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="section-head js-anim" data-anim="animate__fadeInUp" data-once="true">
      <span class="eyebrow">So arbeite ich</span>
      <h2>Kein Standardpaket. <span class="accent">Erst verstehen, dann messen, dann bauen.</span></h2>
      <p class="intro">Keine zwei OneIM-Umgebungen sind gleich: gewachsen durch Fusionen, Altsysteme und Customizings von drei verschiedenen Dienstleistern. Was beim einen Kunden passt, scheitert beim nächsten. Deshalb läuft jedes Engagement bei mir in denselben vier Schritten.</p>
    </div>
    <div class="container--narrow" style="margin: 0 auto;">
      <ol class="numbered">
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Zuhören, bevor ich etwas vorschlage.</h3>
            <p>Ich will zuerst deine Umgebung, deinen Tech-Stack und dein dringendstes Problem verstehen. Nicht das Problem, für das ich zufällig schon eine Lösung habe.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Die Messlatte kommt vor der Arbeit.</h3>
            <p>Bevor ich eine Zeile Code schreibe, legen wir gemeinsam fest, woran du den Erfolg misst. Konkret und messbar. „Geht jetzt etwas schneller“ reicht nicht, wenn du das Budget danach intern verteidigen musst.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Fachbereich, IT und Security an einen Tisch.</h3>
            <p>Ein Werkzeug, das nur die IT will, benutzt niemand. Eins, das Security nicht freigibt, kommt nie in Produktion. Gerade bei KI hole ich alle drei früh rein.</p>
          </div>
        </li>
        <li class="js-anim" data-anim="animate__fadeInUp" data-once="true">
          <div>
            <h3>Zeigen statt versprechen. Und dann in den Betrieb.</h3>
            <p>Du siehst früh etwas, das in deiner Umgebung läuft, statt Folien über eine Zukunft, die vielleicht kommt. Und ein Pilot, der nie in den Betrieb geht, ist für mich kein Erfolg, sondern ein teures Experiment.</p>
          </div>
        </li>
      </ol>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head js-anim" data-anim="animate__fadeInUp" data-once="true">
      <span class="eyebrow">Produkt</span>
      <h2>Frag deine OneIM-Umgebung <span class="accent">einfach selbst.</span></h2>
      <p class="intro">kubo beantwortet Fragen wie <em>„Warum hängt der Job seit 3 Stunden?“</em> oder <em>„Woher hat diese Person den SAP-Zugriff?“</em> mit Kausalkette und Quellenangabe, in unter 60 Sekunden. Läuft on-prem in deiner Umgebung, nutzt euer LLM, liest nur und schreibt nichts.</p>
    </div>
    <div class="center js-anim" data-anim="animate__fadeInUp" data-once="true">
      <span class="price-line">Pilot ab 4.900&nbsp;€ Festpreis, mit vorab vereinbarten Erfolgskriterien <span class="sep">·</span> Dauerbetrieb ab 2.000&nbsp;€/Monat</span>
    </div>
    <div class="actions center js-anim" data-anim="animate__fadeInUp" data-once="true" style="margin-top: 28px;">
      <a class="btn btn-primary" href="{% include helpers/internal-href.html path='/kubo/' %}" data-goatcounter-click="feature/mcp">Zur kubo-Produktseite</a>
      <a class="btn btn-cta-secondary" href="https://copilot.kuventa.de" data-goatcounter-click="navigation/demo">Live-Demo (ohne Anmeldung)</a>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="container">
    <div class="cta-block js-anim" data-anim="animate__fadeInUp" data-once="true">
      <h2>Erzähl mir kurz, wo es bei euch klemmt.</h2>
      <p>30 Minuten, dein konkreter Fall, eine ehrliche Einschätzung. Kein Sales-Pitch, kein Folien-Marathon. Wenn ich nicht der Richtige bin, sage ich dir das und nenne dir jemanden, der es ist.</p>
      <div class="actions">
        <a class="btn btn-primary" href="{% include helpers/internal-href.html path='/kontakt/' %}" data-goatcounter-click="conversion/book-call">Termin wählen</a>
        <a class="btn btn-cta-secondary" href="mailto:info@kuventa.de" data-goatcounter-click="conversion/contact">E-Mail schreiben</a>
      </div>
    </div>
  </div>
</section>
