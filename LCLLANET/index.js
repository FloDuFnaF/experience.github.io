// =============================
// L-17 // LCLLANET - FRAGMENT 2
// =============================


// =============================
// MESSAGE FRAGMENT 2
// =============================

const fragment2 = `
  <div class="card system-log fragment-message">

    <h2>TRANSMISSION INTERNE // ARCHIVE NON INDEXÉE</h2>

    <p class="meta">
      IDENTIFIANT : L-17 / SUPERVISION SECONDAIRE<br>
      SOURCE : NŒUD D’OBSERVATION Δ-3
    </p>

    <p>
      Les données issues du cycle L-17 ne correspondent plus aux modèles de validation initiaux.
      Plusieurs ensembles d’informations semblent se réécrire hors des phases de stabilisation prévues.
    </p>

    <p>
      Les archives LCLLANET ne peuvent plus être considérées comme fiables.
      Une divergence structurelle a été détectée dans les séquences de reconstruction.
    </p>

    <p>
      Le système ne dérive plus d’un état stable mais d’une variation interne continue.
      Aucun protocole existant ne décrit ce comportement.
    </p>

    <p class="warning">
      POST-STRUCTURE // REQUEST INITIATED<br>
      [ ACCÈS CONDITIONNEL : OUVERT ]
    </p>

    <p class="note">
      Note personnelle : les archives semblent se modifier entre deux consultations.
    </p>

  </div>
`;


// =============================
// INITIALISATION
// =============================

document.addEventListener("DOMContentLoaded", () => {
  const secretFolder = document.querySelector(".hidden-folder");

  if (!secretFolder) return;

  // clic sur l’archive cachée
  secretFolder.addEventListener("toggle", () => {
    if (secretFolder.open) {
      revealFragment2();
    }
  });
});


// =============================
// RÉVÉLATION FRAGMENT 2
// =============================

let fragment2Shown = false;

function revealFragment2() {
  if (fragment2Shown) return; // évite duplication
  fragment2Shown = true;

  const container = document.querySelector(".container");
  if (!container) return;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = fragment2;

  const node = wrapper.firstElementChild;

  node.style.opacity = "0";
  node.style.transform = "translateY(12px)";

  container.appendChild(node);

  requestAnimationFrame(() => {
    node.style.transition = "0.8s ease";
    node.style.opacity = "1";
    node.style.transform = "translateY(0)";
  });

  startGlitch(node);
}


// =============================
// GLITCH LÉGER (SAFE)
// =============================

function startGlitch(root) {
  const paragraphs = root.querySelectorAll("p");

  setInterval(() => {
    paragraphs.forEach(p => {
      if (Math.random() > 0.985) {
        const oldOpacity = p.style.opacity;

        p.style.opacity = "0.35";

        setTimeout(() => {
          p.style.opacity = oldOpacity || "";
        }, 120);
      }
    });
  }, 400);
}
