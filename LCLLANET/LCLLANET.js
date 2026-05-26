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
        Les données issues du cycle L-17 ne correspondent plus aux modèles initiaux.
        Des reconstructions non prévues apparaissent dans les flux.
      </p>

      <p>
        Les archives LCLLANET présentent une divergence persistante.
      </p>

      <p>
        Le système semble fonctionner hors stabilisation.
      </p>

      <p style="opacity:0.5;">
        ACCÈS VALIDÉ — NIVEAU POST-STRUCTURE
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
