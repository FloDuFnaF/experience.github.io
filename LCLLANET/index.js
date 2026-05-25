// =============================
// L-17 // LCLLANET - FRAGMENT 2
// =============================

// MESSAGE FRAGMENT 2 (transmission interne)
const messageHTML = `
  <div class="card system-log fragment-message">

    <h2>TRANSMISSION INTERNE // ARCHIVE NON INDEXÉE</h2>

    <p style="opacity:0.7;">
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

    <p style="opacity:0.5;">
      POST-STRUCTURE // REQUEST INITIATED<br>
      [ ACCÈS CONDITIONNEL : EN ATTENTE ]
    </p>

    <p style="margin-top:10px; opacity:0.4;">
      Note personnelle : certaines sections semblent se réécrire entre deux consultations.
    </p>

  </div>
`;


// =============================
// APPARITION DU FRAGMENT 2
// =============================

// délai d’activation (simulation système instable)
setTimeout(() => {
  const container = document.querySelector(".container");

  const block = document.createElement("div");
  block.innerHTML = messageHTML;

  container.appendChild(block);

}, 2500);


// =============================
// OPTION : effet "instabilité système"
// =============================

setInterval(() => {
  const glitchElements = document.querySelectorAll(".fragment-message p");

  glitchElements.forEach(el => {
    if (Math.random() > 0.97) {
      el.style.opacity = "0.3";

      setTimeout(() => {
        el.style.opacity = "";
      }, 150);
    }
  });

}, 400);
