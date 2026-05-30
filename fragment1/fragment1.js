window.addEventListener("DOMContentLoaded", () => {

  const captchaText = document.getElementById("captchaText");
  const input = document.getElementById("captchaInput");
  const error = document.getElementById("error");
  const timerEl = document.getElementById("timer");
  const button = document.getElementById("validateBtn");

  // sécurité DOM
  if (!captchaText || !input || !error || !timerEl || !button) {
    console.error("L17 ERROR: éléments DOM manquants");
    return;
  }

  const answer = "OBSERVEUR NON AUTORISE";

  // affichage captcha
  captchaText.textContent = answer;

  // anti-collage propre
  ["paste", "copy", "cut"].forEach(evt => {
    input.addEventListener(evt, e => {
      e.preventDefault();
      error.textContent = "ACTION BLOQUÉE";
    });
  });

  // 🔥 TIMER CORRIGÉ (10s comme tu voulais)
  let time = 10;

  const interval = setInterval(() => {

    timerEl.textContent = `verrouillage automatique dans ${time}s`;

    time--;

    if (time < 0) {
      clearInterval(interval);
      input.disabled = true;
      button.disabled = true;
      error.textContent = "SESSION EXPIRÉE — RECHARGEMENT REQUIS";
    }

  }, 1000);

  // validation
  button.addEventListener("click", () => {

    const value = input.value.trim().toUpperCase();

    if (value === answer) {

      error.textContent = "ACCÈS AUTORISÉ";

      input.disabled = true;
      button.disabled = true;

      clearInterval(interval); // 🔥 IMPORTANT FIX

      setTimeout(() => {
        window.location.href = "https://flodufnaf.github.io/experience.github.io/fragment1-2";
      }, 2000);

    } else {
      error.textContent = "ÉCHEC DE VALIDATION";
    }

  });

});
