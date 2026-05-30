window.addEventListener("DOMContentLoaded", () => {

  const captchaText = document.getElementById("captchaText");
  const input = document.getElementById("captchaInput");
  const error = document.getElementById("error");
  const timerEl = document.getElementById("timer");
  const button = document.querySelector("button");

  // 🧨 sécurité DOM (important)
  if (!captchaText || !input || !error || !timerEl || !button) {
    console.error("L17 ERROR: éléments DOM manquants");
    return;
  }

  const answer = "OBSERVEUR NON AUTORISE";

  // affichage captcha garanti
  captchaText.textContent = answer;

  // anti collage propre
  ["paste", "copy", "cut"].forEach(evt => {
    input.addEventListener(evt, e => {
      e.preventDefault();
      error.textContent = "ACTION BLOQUÉE";
    });
  });

  // timer stable
  let time = 20;

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

      setTimeout(() => {
        window.location.href = "fragment1-2.html";
      }, 2000);

    } else {
      error.textContent = "ÉCHEC DE VALIDATION";
    }

  });

});
