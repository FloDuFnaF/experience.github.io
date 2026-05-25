const phrase = "L17 OBSERVEUR NON AUTORISÉ";

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

function validateCaptcha() {
  const input = document.getElementById("captchaInput").value;
  const error = document.getElementById("error");

  if (input === phrase) {
    clearInterval(interval);
    error.style.color = "#6CFF6C";
    error.innerText = "VALIDÉ";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 800);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "INTRUSION NON VALIDÉE";
  }
}

const phrase = "L17 OBSERVEUR NON AUTORISÉ";

// affichage progressif (optionnel mais stylé)
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

function normalize(str) {
  return str
    .trim()
    .replace(/\s+/g, " ")
    .toUpperCase();
}

function validateCaptcha() {
  const input = document.getElementById("captchaInput").value;
  const error = document.getElementById("error");

  if (normalize(input) === normalize(phrase)) {
    clearInterval(interval);

    error.style.color = "#6CFF6C";
    error.innerText = "VALIDÉ";

    setTimeout(() => {
      window.location.href = "home.html";
    }, 800);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "INTRUSION NON VALIDÉE";
  }
}
