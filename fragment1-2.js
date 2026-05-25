const phrase = "RECONSTRUCTION DE LA SEQUENCE";

function caesar(str, shift) {
  return str.replace(/[A-Z]/g, c =>
    String.fromCharCode((c.charCodeAt(0) - 65 + shift) % 26 + 65)
  );
}

// texte affiché
document.getElementById("cipherText").innerText = caesar(phrase, 3);

function normalize(str) {
  return str
    .toUpperCase()
    .trim()
    .replace(/\s+/g, " ");
}

function validate() {
  const input = document.getElementById("input").value;
  const error = document.getElementById("error");

  if (normalize(input) === phrase) {

    error.style.color = "#6CFF6C";
    error.innerText = "VALIDATION OK";

    setTimeout(() => {
      window.location.href = "fragment2.html";
    }, 800);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "ECHEC DE DECODAGE";
  }
}

const phrase = "L17 OBSERVEUR NON AUTORISE";

// exemple texte décodé (lore)
const loreText = `
L’observation a commencé avant la mise en place du protocole.
Certains éléments ne devraient pas être visibles.

Le système L17 conserve des fragments dispersés dans les couches mémoire.
Aucune confirmation officielle n’existe.

Nous avons identifié une anomalie dans la séquence centrale.
Elle ne répond plus aux règles de classification.

Toute tentative de suppression entraîne une réaction du système.
`;

function validate() {
  const input = document.getElementById("input").value.trim().toUpperCase();
  const error = document.getElementById("error");

  if (input === phrase) {

    document.getElementById("cipherText").style.display = "none";
    document.getElementById("input").style.display = "none";
    document.querySelector("button").style.display = "none";

    error.style.color = "#6CFF6C";
    error.innerText = "DÉCRYPTAGE RÉUSSI";

    setTimeout(() => {
      showLore();
    }, 800);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "ÉCHEC DE DÉCODAGE";
  }
}

function showLore() {
  const container = document.querySelector(".card");

  const loreDiv = document.createElement("div");
  loreDiv.className = "lore";

  loreDiv.innerHTML = `
    <p class="lore-text">${loreText}</p>

    <p class="hidden-link">
      https://flodufnaf.github.io/experience.github.io/
      <span class="glitch-url">XXXXXXXX</span>
    </p>
  `;

  container.appendChild(loreDiv);
}
