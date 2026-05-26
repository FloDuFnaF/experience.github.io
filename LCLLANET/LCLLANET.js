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
// ÉTAT GLOBAL
// =============================

let fragment2Shown = false;


// =============================
// INITIALISATION
// =============================

document.addEventListener("DOMContentLoaded", () => {

  console.log("LCLLANET INITIALIZED");

  const secretFolder = document.getElementById("secretFolder");

  if (!secretFolder) {
    console.error("secretFolder introuvable");
    return;
  }

  // ouverture du dossier secret
  secretFolder.addEventListener("toggle", () => {

    // uniquement quand ouvert
    if (secretFolder.open && !fragment2Shown) {

      console.log("ARCHIVE NON INDEXÉE OUVERTE");

      // petit délai système
      setTimeout(() => {
        revealFragment2();
      }, 1800);
    }

  });

});


// =============================
// RÉVÉLATION FRAGMENT 2
// =============================

function revealFragment2() {

  if (fragment2Shown) return;

  fragment2Shown = true;

  console.log("FRAGMENT 2 TRIGGERED");

  const container = document.querySelector(".container");

  if (!container) {
    console.error("container introuvable");
    return;
  }

  // création wrapper
  const wrapper = document.createElement("div");

  wrapper.innerHTML = fragment2;

  const node = wrapper.firstElementChild;

  // animation initiale
  node.style.opacity = "0";
  node.style.transform = "translateY(20px)";
  node.style.transition = "all 0.8s ease";

  // ajout DOM
  container.appendChild(node);

  // animation apparition
  requestAnimationFrame(() => {
    node.style.opacity = "1";
    node.style.transform = "translateY(0)";
  });

  // démarrage glitch
  startGlitch(node);
}


// =============================
// GLITCH SAFE
// =============================

function startGlitch(root) {

  const paragraphs = root.querySelectorAll("p");

  const interval = setInterval(() => {

    // sécurité suppression
    if (!document.body.contains(root)) {
      clearInterval(interval);
      return;
    }

    paragraphs.forEach(p => {

      // faible chance de glitch
      if (Math.random() > 0.985) {

        const oldOpacity = p.style.opacity;
        const oldTransform = p.style.transform;

        p.style.opacity = "0.25";
        p.style.transform = "translateX(2px)";

        setTimeout(() => {
          p.style.opacity = oldOpacity || "";
          p.style.transform = oldTransform || "";
        }, 120);
      }

    });

  }, 350);
}
