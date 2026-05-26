const targetDate = new Date("2026-06-01T00:00:00");

const loginBox = document.querySelector(".login-box");
const timerOverlay = document.getElementById("timerOverlay");
const timerText = document.getElementById("timerText");

function updateTimer() {
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    timerText.textContent = "SYNCHRONISATION TERMINÉE";
    loginBox.classList.remove("blurred");

    setTimeout(() => {
      timerOverlay.classList.add("hidden");
    }, 1500);

    return;
  }

  loginBox.classList.add("blurred");
  timerOverlay.classList.remove("hidden");

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  timerText.textContent =
    String(hours).padStart(2, "0") + ":" +
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0");
}

setInterval(updateTimer, 1000);
updateTimer();
