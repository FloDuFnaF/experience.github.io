window.addEventListener("DOMContentLoaded", () => {

  const captchaText = document.getElementById("captchaText");
  const input = document.getElementById("captchaInput");
  const error = document.getElementById("error");
  const timerEl = document.getElementById("timer");

  const answer = "OBSERVEUR NON AUTORISE";

  // ===== génération du texte (effet système) =====
  const noiseVariants = [
    "OBSERVEUR NON AUTORISE",
    "OB5ERVEUR N0N AUT0RI5E",
    "OBSERVEUR-NULL-AUTH",
    "OBSERVEUR NON AUTORISE"
  ];

  captchaText.innerText =
    noiseVariants[Math.floor(Math.random() * noiseVariants.length)];

  // ===== anti triche (copie / collage) =====
  ["paste", "copy", "cut"].forEach(evt => {
    input.addEventListener(evt, (e) => {
      e.preventDefault();
      error.innerText = "ACTION BLOQUÉE : INTÉGRITÉ REQUISE";
      error.style.color = "#FF4C4C";
    });
  });

  // ===== timer système =====
  let time = 20;

  const interval = setInterval(() => {
    time--;

    timerEl.innerText = `verrouillage automatique dans ${time}s`;

    if (time <= 0) {
      clearInterval(interval);
      input.disabled = true;
      error.innerText = "SESSION EXPIRÉE — RECHARGEMENT REQUIS";
      error.style.color = "#FF4C4C";
    }
  }, 1000);

  // ===== validation =====
  window.validateCaptcha = function () {

    const value = input.value.trim().toUpperCase();

    if (value === answer) {

      error.style.color = "#6CFF6C";
      error.innerText = "ACCÈS AUTORISÉ";

      input.disabled = true;

      setTimeout(() => {
        error.innerText = "DÉVERROUILLAGE DU NŒUD...";
      }, 800);

      setTimeout(() => {
        error.innerText = "CONNEXION STABILISÉE";
      }, 1600);

      setTimeout(() => {
        window.location.href = "fragment1-2.html"; // ou ton prochain node
      }, 2500);

    } else {
      error.style.color = "#FF4C4C";
      error.innerText = "ÉCHEC DE VALIDATION";
    }
  };

});
