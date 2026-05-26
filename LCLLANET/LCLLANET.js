document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("passBtn");
  const input = document.getElementById("passInput");
  const msg = document.getElementById("systemMsg");
  const container = document.querySelector(".container");

  const PASSWORD = "POST-STRUCTURE";

  const fragment2 = `
    <div class="card system-log fragment-message">

      <h2>TRANSMISSION INTERNE // ARCHIVE NON INDEXÉE</h2>

      <p class="meta">
        IDENTIFIANT : L-17 / SUPERVISION SECONDAIRE<br>
        SOURCE : NŒUD D’OBSERVATION Δ-3
      </p>

      <p>
        Les données du cycle L-17 ne correspondent plus aux modèles initiaux.
      </p>

      <p>
        Les archives présentent une divergence structurelle persistante.
      </p>

      <p>
        Le système dérive d’une variation interne non documentée.
      </p>

      <p style="opacity:0.5;">
        POST-STRUCTURE VALIDÉE
      </p>

    </div>
  `;

  btn.addEventListener("click", () => {
    const value = input.value.trim();

    if (value === PASSWORD) {
      msg.textContent = "accès validé... reconstruction en cours";

      setTimeout(() => {
        const wrapper = document.createElement("div");
        wrapper.innerHTML = fragment2;
        container.appendChild(wrapper.firstElementChild);
      }, 800);

    } else {
      msg.textContent = "clé invalide — tentative enregistrée";
    }
  });
});
