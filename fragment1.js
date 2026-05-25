document.addEventListener("DOMContentLoaded", () => {
  const phrase = "L17 OBSERVEUR NON AUTORISE";

  document.getElementById("captchaText").innerText = phrase;

  let timeLeft = 10;
  const timerEl = document.getElementById("timer");

  timerEl.innerText = "Temps restant : " + timeLeft + "s";

  const interval = setInterval(() => {
    timeLeft--;
    timerEl.innerText = "Temps restant : " + timeLeft + "s";

    if (timeLeft <= 0) {
      clearInterval(interval);
      window.location.href = "index.html";
    }
  }, 1000);

  window.validateCaptcha = function () {
    const input = document.getElementById("captchaInput").value;
    const error = document.getElementById("error");

    function normalize(str) {
      return str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .replace(/\s+/g, " ")
        .toUpperCase();
    }

    if (normalize(input) === normalize(phrase)) {
      clearInterval(interval);

      error.style.color = "#6CFF6C";
      error.innerText = "VALIDÉ";

      setTimeout(() => {
        window.location.href = "fragment1-2.html";
      }, 800);
    } else {
      error.style.color = "#FF4C4C";
      error.innerText = "INTRUSION NON VALIDÉE";
    }
  };
});
