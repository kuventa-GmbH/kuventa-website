---
layout: default
title: Leistungen
permalink: /leistungen/
nav_order: 2
---
{% assign shared = site.data.landing_pages.shared %}

<section class="section hero">
  <div class="container">
    <div class="process">
      <div class="process-content">
        <p class="blog-kicker js-anim" data-anim="animate__fadeInUp" data-once="true">Beratung und Implementierung</p>
        <h1 class="hero-title js-anim" data-anim="animate__fadeInLeft" data-once="true">Leistungen für moderne Identity-Infrastrukturen</h1>
        <p class="hero-text js-anim" data-anim="animate__fadeIn" data-once="true">kuventa unterstützt Unternehmen von der Analyse bis zur Umsetzung. Alle Leistungen sind auf die Modernisierung bestehender On-Premise-Landschaften und die Vorbereitung auf cloudfähige Architekturen ausgerichtet.</p>
        <div class="hero-actions js-anim" data-anim="animate__fadeInUp" data-once="true">
          <a class="btn btn-soft" href="{{ shared.booking_link | relative_url }}">{{ shared.cta_text }}</a>
          <p class="cta-note">{{ shared.cta_note }}</p>
        </div>
      </div>

      <div class="process-art js-anim" data-anim="animate__fadeInRight" data-once="true">
        <img src="{{ '/assets/img/illustrations/home/grow.svg' | relative_url }}" alt="Illustration zu Identity-Leistungen" loading="eager">
      </div>
    </div>
  </div>
</section>

<div class="blog-page">
  <section class="section">
    <div class="container">
      <div class="blog-header js-anim" data-anim="animate__fadeInUp" data-once="true">
        <p class="blog-kicker">Typische Ausgangslagen</p>
        <h2 class="sec-heading">Wo Identity-Projekte typischerweise entstehen</h2>
        <p>Die Leistungsseite bündelt jetzt auch die typischen Problemstellungen. So lässt sich schneller einordnen, welcher Einstieg für Ihre IT-Landschaft sinnvoll ist.</p>
      </div>

      <div class="benefits-grid">
        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/folders.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Verteilte Logins und Benutzerquellen</h3>
            <p>Anwendungen verwalten ihre Zugänge separat. Benutzerkonten, Rollen und Authentifizierungswege sind über mehrere Systeme verteilt.</p>
            <ul class="list">
              <li>mehr Supportaufwand</li>
              <li>weniger Transparenz</li>
              <li>höhere Sicherheitsrisiken</li>
            </ul>
          </div>
        </article>

        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/path.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Cloud- und SaaS-Anbindung stockt</h3>
            <p>Active Directory funktioniert als heutige Benutzerquelle, reicht aber für moderne Portale, SaaS-Anwendungen und APIs allein nicht aus.</p>
            <ul class="list">
              <li>fehlende Standards</li>
              <li>keine zentrale Federation</li>
              <li>schwierige Integrationspfade</li>
            </ul>
          </div>
        </article>

        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/config.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Uneinheitliche MFA und Security</h3>
            <p>Mehrfaktor-Authentifizierung ist nur für einzelne Systeme eingeführt oder je Anwendung unterschiedlich umgesetzt.</p>
            <ul class="list">
              <li>inkonsistente Login-Flows</li>
              <li>schwierige Durchsetzung von Policies</li>
              <li>mehr Audit-Aufwand</li>
            </ul>
          </div>
        </article>

        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/userlaptop.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Neue Portale, Produkte oder APIs</h3>
            <p>Fachbereiche und Produktteams brauchen moderne Authentifizierung für interne und externe Nutzer, aber es fehlt eine gemeinsame Identity-Basis.</p>
            <ul class="list">
              <li>externe Identitäten</li>
              <li>Self-Service</li>
              <li>tokenbasierte Sicherheit</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section benefits-sec">
    <div class="container">
      <div class="blog-header js-anim" data-anim="animate__fadeInUp" data-once="true">
        <p class="blog-kicker">Leistungsübersicht</p>
        <h2 class="sec-heading">Vier Bausteine für die Identity-Modernisierung</h2>
        <p>Die Leistungen sind so aufgebaut, dass sie zu unterschiedlichen Ausgangslagen passen. Manche Vorhaben beginnen mit einer Analyse, andere direkt mit einer Plattform-Implementierung.</p>
      </div>

      <div class="benefits-grid">
        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/path.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Identity Modernisierung</h3>
            <p>Für Unternehmen, die ihre gewachsene Authentifizierungslandschaft strukturiert in eine cloudfähige Zielarchitektur überführen wollen.</p>
            <ul class="list">
              <li>Zielbild für zentrale Authentifizierung</li>
              <li>Roadmap für hybride und cloudnahe Landschaften</li>
              <li>Priorisierung nach Nutzen und Umsetzbarkeit</li>
            </ul>
            <div class="contact-direct__actions">
              <a class="contact-direct__btn contact-direct__btn--primary" href="{{ '/identity-modernisierung/' | relative_url }}">Mehr erfahren</a>
            </div>
          </div>
        </article>

        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/folders.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Identity Assessment</h3>
            <p>Für Vorhaben, die zunächst Transparenz über bestehende Systeme, Risiken, Integrationen und die nächsten sinnvollen Schritte benötigen.</p>
            <ul class="list">
              <li>Analyse der heutigen Authentifizierungslandschaft</li>
              <li>Bewertung von SSO, MFA und Integrationsfähigkeit</li>
              <li>Priorisierte Entscheidungsgrundlage für Folgeprojekte</li>
            </ul>
            <div class="contact-direct__actions">
              <a class="contact-direct__btn contact-direct__btn--primary" href="{{ '/identity-assessment/' | relative_url }}">Mehr erfahren</a>
            </div>
          </div>
        </article>

        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/security.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>SSO Plattform</h3>
            <p>Für interne Anwendungen, Portale und SaaS-Dienste, die zentral authentifiziert und mit konsistenter MFA abgesichert werden sollen.</p>
            <ul class="list">
              <li>Single Sign-On für Mitarbeitende</li>
              <li>Anbindung von AD, LDAP und SaaS</li>
              <li>Zentrale Policies und moderne Login-Standards</li>
            </ul>
            <div class="contact-direct__actions">
              <a class="contact-direct__btn contact-direct__btn--primary" href="{{ '/sso-plattform/' | relative_url }}">Mehr erfahren</a>
            </div>
          </div>
        </article>

        <article class="benefit js-anim" data-anim="animate__fadeInUp" data-once="true">
          <img class="benefit-img" src="{{ '/assets/img/illustrations/home/config.svg' | relative_url }}" alt="" loading="lazy">
          <div>
            <h3>Customer Identity Plattform</h3>
            <p>Für Kunden-, Partner- und Entwicklerportale, die externe Nutzer sicher, skalierbar und standardisiert authentifizieren müssen.</p>
            <ul class="list">
              <li>Self-Service und Registrierungsprozesse</li>
              <li>API-Sicherheit mit Tokens</li>
              <li>Trennung interner und externer Identitäten</li>
            </ul>
            <div class="contact-direct__actions">
              <a class="contact-direct__btn contact-direct__btn--primary" href="{{ '/customer-identity-plattform/' | relative_url }}">Mehr erfahren</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="focus-grid">
        <div class="focus-art js-anim" data-anim="animate__fadeInLeft" data-once="true">
          <img src="{{ '/assets/img/illustrations/about/user.svg' | relative_url }}" alt="" loading="lazy">
        </div>

        <div class="focus-cols js-anim" data-anim="animate__fadeInRight" data-once="true">
          <h2 class="sec-heading">Wann welche Leistung sinnvoll ist</h2>

          <div class="focus-col">
            <h3 class="linkish">Wenn Transparenz fehlt</h3>
            <p>Dann ist das Assessment der richtige Einstieg. Es schafft ein belastbares Bild über Systeme, Integrationen, Risiken und Prioritäten.</p>
          </div>

          <div class="focus-col">
            <h3 class="linkish">Wenn interne Anwendungen zentral authentifiziert werden sollen</h3>
            <p>Dann steht meist eine SSO Plattform im Vordergrund. Ziel ist ein zentraler Identity Provider für Mitarbeiterzugänge, Portale und SaaS.</p>
          </div>

          <div class="focus-col">
            <h3 class="linkish">Wenn eine gewachsene Landschaft strategisch modernisiert werden muss</h3>
            <p>Dann geht es um Identity Modernisierung als übergeordnetes Architekturthema. Die Umsetzung kann später in mehrere Teilprojekte aufgeteilt werden.</p>
          </div>

          <div class="focus-col">
            <h3 class="linkish">Wenn externe Nutzer angebunden werden</h3>
            <p>Dann ist eine Customer Identity Plattform der passende Baustein. Interne und externe Anforderungen sollten architektonisch sauber getrennt werden.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container process">
      <div class="process-art js-anim" data-anim="animate__fadeInLeft" data-once="true">
        <img src="{{ '/assets/img/illustrations/home/process.svg' | relative_url }}" alt="" loading="lazy">
      </div>

      <div class="process-content js-anim" data-anim="animate__fadeInRight" data-once="true">
        <h2 class="sec-heading">Was eine moderne Identity-Lösung leisten muss</h2>
        <p>Eine tragfähige Lösung darf nicht nur einzelne Logins ersetzen. Sie muss Sicherheit, Integrationsfähigkeit und Betriebsrealität gleichzeitig abdecken.</p>
        <h3>Kernanforderungen</h3>
        <ul class="list">
          <li>zentraler Identity Provider statt verteilter Login-Mechanismen</li>
          <li>Standards wie OpenID Connect, OAuth2 und SAML</li>
          <li>konsistente MFA und zentrale Zugriffskontrolle</li>
          <li>saubere Integration von On-Premise, SaaS, Portalen und APIs</li>
        </ul>
        <h5>Das Ziel ist eine Plattform, die heutige Anforderungen trägt und weitere Cloud-Schritte vorbereitet.</h5>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="focus-grid">
        <div class="focus-art js-anim" data-anim="animate__fadeInLeft" data-once="true">
          <img src="{{ '/assets/img/illustrations/about/security.svg' | relative_url }}" alt="" loading="lazy">
        </div>

        <div class="focus-cols js-anim" data-anim="animate__fadeInRight" data-once="true">
          <h2 class="sec-heading">Typische Lösungsbilder</h2>

          <div class="focus-col">
            <h3 class="linkish">Assessment und Roadmap</h3>
            <p>Wenn die Landschaft unübersichtlich ist, beginnt die Lösung mit einer sauberen Analyse und einer priorisierten Modernisierungslogik.</p>
          </div>

          <div class="focus-col">
            <h3 class="linkish">SSO Plattform für interne Systeme</h3>
            <p>Wenn Mitarbeitende mehrere Anwendungen nutzen, ist häufig eine zentrale Plattform für Single Sign-On, MFA und Richtlinien der richtige Schritt.</p>
          </div>

          <div class="focus-col">
            <h3 class="linkish">Customer Identity für externe Nutzer</h3>
            <p>Wenn Kunden, Partner oder Entwickler sicher auf Portale und APIs zugreifen müssen, braucht es ein separates Lösungsbild für externe Identitäten.</p>
          </div>

          <div class="focus-col">
            <h3 class="linkish">Übergreifende Identity Modernisierung</h3>
            <p>Wenn mehrere Themen gleichzeitig zusammenspielen, wird daraus ein Architekturvorhaben für eine moderne Identity-Plattform.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="section section-alt">
    <div class="container process">
      <div class="process-art js-anim" data-anim="animate__fadeInLeft" data-once="true">
        <img src="{{ '/assets/img/illustrations/home/process.svg' | relative_url }}" alt="" loading="lazy">
      </div>

      <div class="process-content js-anim" data-anim="animate__fadeInRight" data-once="true">
        <h2 class="sec-heading">Wie die Leistungen zusammenarbeiten</h2>
        <p>Die Leistungen sind nicht isoliert gedacht. Häufig entsteht aus einem Assessment ein Plattformprojekt, oder ein Modernisierungsvorhaben wird in klar abgrenzbare Umsetzungsbausteine aufgeteilt.</p>
        <h3>Typische Projektlogik</h3>
        <ul class="list">
          <li>Assessment zur Bewertung der Ausgangslage</li>
          <li>Definition einer Zielarchitektur mit Keycloak</li>
          <li>Umsetzung einer SSO Plattform oder Customer Identity Plattform</li>
          <li>Schrittweise Integration weiterer Anwendungen, Portale und APIs</li>
        </ul>
        <h5>So bleibt die Architektur konsistent, auch wenn die Umsetzung in mehreren Phasen erfolgt.</h5>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="container">
      <div class="blog-header js-anim" data-anim="animate__fadeInUp" data-once="true">
        <p class="blog-kicker">Projektvorgehen</p>
        <h2 class="sec-heading">Typischer Ablauf eines Mandats</h2>
        <p>Die Zusammenarbeit ist so angelegt, dass technische Klarheit früh entsteht und der erste Umsetzungsumfang realistisch zugeschnitten wird.</p>
      </div>

      <div class="process-steps js-anim" data-anim="animate__fadeInUp" data-once="true">
        <div class="process-step">
          <div class="step-number">1</div>
          <div>
            <p class="edu-title">Ausgangslage erfassen</p>
            <p>Systeme, Benutzerquellen, Integrationen und Sicherheitsanforderungen werden strukturiert aufgenommen.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-number">2</div>
          <div>
            <p class="edu-title">Leistungsbaustein festlegen</p>
            <p>Wir klären, ob Assessment, Modernisierung, interne SSO Plattform oder Customer Identity der richtige Einstieg ist.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-number">3</div>
          <div>
            <p class="edu-title">Scope priorisieren</p>
            <p>Der erste Umsetzungsumfang wird entlang von Nutzen, Risiko und technischer Machbarkeit abgegrenzt.</p>
          </div>
        </div>

        <div class="process-step">
          <div class="step-number">4</div>
          <div>
            <p class="edu-title">Technisch umsetzen</p>
            <p>Konfiguration, Integrationen und Einführungslogik werden so vorbereitet, dass die Plattform im Betrieb tragfähig bleibt.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

{% include landing/final-cta.html final=site.data.site_pages.leistungen.final_cta shared=shared %}
