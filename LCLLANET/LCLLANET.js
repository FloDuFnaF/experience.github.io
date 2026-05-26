document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("passBtn");
  const input = document.getElementById("passInput");
  const msg = document.getElementById("systemMsg");
  const container = document.querySelector(".container");

  const PASSWORD = "NODAL-Δ3";

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
        <strong style="letter-spacing:2px; opacity:0.95;">
          CLÉ D’ACCÈS IDENTIFIÉE : POST-STRUCTURE
        </strong>
      </p>
  
      <p class="note">
        Note personnelle : les archives semblent se modifier entre deux consultations.
      </p>
  
    </div>
  `;

  btn.addEventListener("click", () => {

    if (!container) {
      console.log("Container introuvable");
      return;
    }

    const value = input.value.trim();

    if (value === PASSWORD) {

      msg.textContent = "clé acceptée — ouverture du canal Δ-3";

      setTimeout(() => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = fragment2;

        const node = wrapper.querySelector(".fragment-message");

        if (!node) return;

        node.style.opacity = "0";
        node.style.transform = "translateY(10px)";

        container.appendChild(node);

        requestAnimationFrame(() => {
          node.style.transition = "0.8s ease";
          node.style.opacity = "1";
          node.style.transform = "translateY(0)";
        });

      }, 700);
    }

    else {
      msg.textContent = "clé invalide — tentative enregistrée";
    }
  });
});
