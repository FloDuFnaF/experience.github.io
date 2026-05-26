document.addEventListener("DOMContentLoaded", () => {
  const secret = document.getElementById("secretFolder");
  const fragment = document.getElementById("fragment2");

  if (!secret || !fragment) return;

  secret.addEventListener("toggle", () => {
    if (secret.open) {
      fragment.classList.remove("hidden");
      fragment.style.opacity = "1";
      fragment.style.transform = "translateY(0)";
    }
  });
});
