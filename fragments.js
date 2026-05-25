function checkPass(id) {
  const input = document.getElementById("pass" + id);
  const error = document.getElementById("err" + id);

  let correct = "";

  if (id === 1) correct = "L17-ORIGIN";
  if (id === 2) correct = "POST-STRUCTURE";
  if (id === 3) correct = "SIGNAL-NULL";

  if (input.value === correct) {
    error.style.color = "#6CFF6C";
    error.innerText = "accès validé";

    // petite latence pour effet ARG (optionnel mais stylé)
    setTimeout(() => {
      window.location.href = `fragment${id}.html`;
    }, 500);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "mot de passe incorrect";
  }
}
