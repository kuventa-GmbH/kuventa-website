---
layout: default
title: Kontakt
permalink: /kontakt/
nav_order: 4
---
<div class="contact-page">
  <h1 class="center sec-heading js-anim" data-anim="animate__fadeInLeft" data-once="true">Kontakt</h1>

  <div class="contact-direct container js-anim" data-anim="animate__fadeInUp" data-once="true">
    <article class="contact-direct__item">
      <span class="contact-direct__label">E-Mail</span>
      <span class="contact-direct__value" id="contact-email-value">dennis.kuerschner@kuventa.de</span>
      <div class="contact-direct__actions">
        <button class="contact-direct__btn" type="button" data-copy="dennis.kuerschner@kuventa.de" data-copy-label="E-Mail">Kopieren</button>
        <a class="contact-direct__btn contact-direct__btn--primary" href="mailto:dennis.kuerschner@kuventa.de">E-Mail senden</a>
      </div>
    </article>
    <article class="contact-direct__item">
      <span class="contact-direct__label">Telefon</span>
      <span class="contact-direct__value" id="contact-phone-value">+49 151 75 03 26 56</span>
      <div class="contact-direct__actions">
        <button class="contact-direct__btn" type="button" data-copy="+49 151 75 03 26 56" data-copy-label="Telefonnummer">Kopieren</button>
        <a class="contact-direct__btn contact-direct__btn--primary" href="tel:+4915175032656">Anrufen</a>
      </div>
    </article>
  </div>
</div>

<section class="contact-booking section">
  <div class="container">
    <div class="contact-booking__wrap js-anim" data-anim="animate__fadeInUp" data-once="true">
      <h2 class="sec-heading center">Alternativ direkt Termin buchen</h2>
      <p class="center">Wählen Sie direkt einen freien Slot. Die Buchung funktioniert als Gast, ohne Microsoft-Anmeldung.</p>

      <div class="contact-booking__embed">
        <iframe
          src="https://outlook.office.com/bookwithme/user/1536062ad5714a80976ffe478fb68e3c@kuventa.de/meetingtype/0Sv5L6jWt0ekIZy9r6D1Ug2?bookingcode=5cfeb36b-0bba-4165-bdfe-8f636d8a11f7&anonymous&ismsaljsauthenabled&ep=mlink"
          title="Microsoft Bookings Terminbuchung"
          width="100%"
          height="780"
          style="border:0;"
          loading="lazy"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen="">
        </iframe>
      </div>

      <div class="contact-booking__fallback center">
        <a class="btn btn-secondary" href="https://outlook.office.com/bookwithme/user/1536062ad5714a80976ffe478fb68e3c@kuventa.de/meetingtype/0Sv5L6jWt0ekIZy9r6D1Ug2?bookingcode=5cfeb36b-0bba-4165-bdfe-8f636d8a11f7&amp;anonymous&amp;ismsaljsauthenabled&amp;ep=mlink" target="_blank" rel="noopener noreferrer">
          Bookings in neuem Tab öffnen
        </a>
      </div>
    </div>
  </div>
</section>

<div class="contact-map js-anim" data-anim="animate__fadeIn" data-once="true">
  <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9480.905566193474!2d10.00365!3d53.553726!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f7c0c27bc85%3A0x963d45ff81f73c8!2skuventa%20GmbH!5e0!3m2!1sen!2sus!4v1771402993844!5m2!1sen!2sus" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<script>
document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll("[data-copy]");
  if (!copyButtons.length) return;

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "absolute";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
  }

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const value = btn.getAttribute("data-copy") || "";
      try {
        await copyText(value);
        const label = btn.getAttribute("data-copy-label") || "Wert";
        const old = btn.textContent;
        btn.textContent = `${label} kopiert`;
        btn.classList.add("is-copied");
        setTimeout(() => {
          btn.textContent = old;
          btn.classList.remove("is-copied");
        }, 1400);
      } catch (_) {
        alert("Kopieren hat nicht funktioniert. Bitte manuell markieren und kopieren.");
      }
    });
  });
});
</script>
