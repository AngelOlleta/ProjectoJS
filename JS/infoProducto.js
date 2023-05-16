const user = JSON.parse(localStorage.getItem("usuario_logueado")) || false;
if (!user) {
  window.location.href = "login.html";
}
