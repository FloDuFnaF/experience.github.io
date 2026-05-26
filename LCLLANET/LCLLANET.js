document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("passBtn");
  const input = document.getElementById("passInput");
  const msg = document.getElementById("systemMsg");
  const container = document.querySelector(".container");
  const fragment2 = document.getElementById("fragment2");

  const PASSWORD = "POST-STRUCTURE";

  let unlocked = false;

  if (!btn || !input || !container || !fragment2) {
    console.log("Erreur : éléments manquants");
    return;
  }

  btn.addEventListener("click", () => {

    if (unlocked) return;

    const value = input.value.trim();

    if (value === PASSWORD) {

      unlocked = true;

      msg.textContent = "clé acceptée — ouverture du canal Δ-3";

      setTimeout(() => {

        revealFragment(fragment2);

      }, 600);

    } else {
      msg.textContent = "clé invalide — tentative enregistrée";
    }
  });

});

function revealFragment(node) {

  node.classList.remove("hidden");

  node.style.opacity = "0";
  node.style.transform = "translateY(10px)";

  requestAnimationFrame(() => {
    node.style.transition = "0.8s ease";
    node.style.opacity = "1";
    node.style.transform = "translateY(0)";
  });

  startGlitch(node);
}

console.log("[L-17] Δ-3 channel initialized");
