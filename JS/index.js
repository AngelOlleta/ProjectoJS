const logueo = document.querySelector("#logueo");
logueo.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("usuario_logueado")) || false;
  if (!user) {
    window.location.href = "login.html";
  } else {
    alert("Hasta pronto!");
    localStorage.removeItem("usuario_logueado");
    window.location.href = "login.html";
  }
});
