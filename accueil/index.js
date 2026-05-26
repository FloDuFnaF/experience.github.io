function login() {
  const user = document.getElementById("user").value;
  const pass = document.getElementById("pass").value;

  const box = document.querySelector(".login-box");
  const overlay = document.getElementById("overlay");

  if (user === "admin" && pass === "L17-ORIGIN") {

    // flou + effet système
    box.style.transition = "1s ease";
    box.style.filter = "blur(6px)";
    box.style.opacity = "0.4";

    setTimeout(() => {
      overlay.classList.remove("hidden");
      startTimer("2026-06-01T00:00:00"); // date ARG
    }, 1200);

  } else {
    document.getElementById("error").innerText = "accès refusé";
  }
}


// TIMER ARG
function startTimer(targetDate) {
  const timer = document.getElementById("timer");
  const target = new Date(targetDate).getTime();

  setInterval(() => {
    const now = Date.now();
    const diff = target - now;

    const h = Math.floor(diff / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    timer.textContent =
      `${h.toString().padStart(2,"0")}:` +
      `${m.toString().padStart(2,"0")}:` +
      `${s.toString().padStart(2,"0")}`;
  }, 1000);
}
