let time = 8;
const timerEl = document.getElementById("timer");

const interval = setInterval(() => {
  time--;

  if (time >= 10) {
    timerEl.innerText = "00:" + time;
  } else {
    timerEl.innerText = "00:0" + time;
  }

  if (time <= 0) {
    clearInterval(interval);

    // TIMEOUT → retour accueil
    window.location.href = "https://flodufnaf.github.io/experience.github.io/accueil/";
  }
}, 1000);

function validate(correct) {
  const result = document.getElementById("result");

  if (correct) {
    result.innerText = "VALIDATION ACCEPTÉE";
    result.style.color = "#6CFF6C";

    setTimeout(() => {
      window.location.href = "https://flodufnaf.github.io/experience.github.io/PSFRAG2/home";
    }, 600);

  } else {
    result.innerText = "CORRUPTION DÉTECTÉE";
    result.style.color = "#FF4C4C";
  }
}
