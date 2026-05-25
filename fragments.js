function checkPass(id) {
  const input = document.getElementById("pass" + id);

  if (id === 1 && input.value === "L17-ORIGIN") {
    window.location.href = "fragment1.html";
  } else {
    document.getElementById("err" + id).innerText = "mot de passe incorrect";
  }
}
