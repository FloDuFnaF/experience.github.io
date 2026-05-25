
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
      Plusieurs ensembles d’informations semblent se réécrire en dehors des phases de stabilisation prévues.
    </p>

    <p>
      Les archives précédentes (incluant LCLLANET / segments classifiés) ne peuvent plus être considérées comme constantes.
      Une divergence critique a été détectée dans la structure de reconstruction des séquences.
    </p>

    <p>
      Les résultats ne dérivent plus d’un état initial stable, mais d’une variation interne persistante.
      Ce comportement ne figure dans aucun protocole connu.
    </p>

    <p class="warning">
      POST-STRUCTURE // REQUEST INITIATED<br>
      [ ACCÈS CONDITIONNEL : EN ATTENTE ]
    </p>

    <p class="note">
      Note personnelle : certaines sections semblent se réécrire entre deux consultations.
    </p>

  </div>
`;


// =============================
// APPARITION CONTRÔLÉE
// =============================

function revealFragment2() {
  const container = document.querySelector(".container");

  if (!container) return;

  const wrapper = document.createElement("div");
  wrapper.innerHTML = fragment2;

  const node = wrapper.firstElementChild;

  // état initial invisible (animation propre CSS plus tard)
  node.style.opacity = "0";
  node.style.transform = "translateY(10px)";

  container.appendChild(node);

  // apparition progressive (effet système)
  requestAnimationFrame(() => {
    node.style.transition = "0.8s ease";
    node.style.opacity = "1";
    node.style.transform = "translateY(0)";
  });

  startGlitch(node);
}


// =============================
// GLITCH LIGHT (PROPRE)
// =============================

function startGlitch(root) {
  const paragraphs = root.querySelectorAll("p");

  setInterval(() => {
    paragraphs.forEach(p => {
      if (Math.random() > 0.985) {
        const old = p.style.opacity;

        p.style.opacity = "0.35";

        setTimeout(() => {
          p.style.opacity = old || "";
        }, 120);
      }
    });
  }, 500);
}


// =============================
// LANCEMENT
// =============================

setTimeout(revealFragment2, 2500);
