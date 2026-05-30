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

    setTimeout(() => {

      if (id === 2) {
        window.location.href =
          "https://flodufnaf.github.io/experience.github.io/PSFRAG2/";
      }

      else if (id === 3) {
        window.location.href =
          "https://flodufnaf.github.io/experience.github.io/SNFRAG3/home/";
      }

    }, 500);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "mot de passe incorrect";
  }
}
