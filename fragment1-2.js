const phrase = "RECONSTRUCTION DE LA SEQUENCE";

function caesar(str, shift) {
  return str.replace(/[A-Z]/g, c =>
    String.fromCharCode((c.charCodeAt(0) - 65 + shift) % 26 + 65)
  );
}

// texte affiché
document.getElementById("cipherText").innerText = caesar(phrase, 3);

function normalize(str) {
  return str
    .toUpperCase()
    .trim()
    .replace(/\s+/g, " ");
}

function validate() {
  const input = document.getElementById("input").value;
  const error = document.getElementById("error");

  if (normalize(input) === phrase) {

    error.style.color = "#6CFF6C";
    error.innerText = "VALIDATION OK";

    setTimeout(() => {
      window.location.href = "fragment2.html";
    }, 800);

  } else {
    error.style.color = "#FF4C4C";
    error.innerText = "ECHEC DE DECODAGE";
  }
}
