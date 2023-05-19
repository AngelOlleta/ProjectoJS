const userLog = JSON.parse(localStorage.getItem("usuario_logueado")) || false;
if (!userLog) {
  window.location.href = "login.html";
}
let userAdmin = {
  name: "admin",
  email: "admin@gmail.com",
  password: "administrador",
};
let usuarioLogueado =
  JSON.parse(localStorage.getItem("usuario_logueado")) || false;
let user= JSON.parse(localStorage.getItem("user")) ||"";
const cerrarSesion = () => {
  if (usuarioLogueado) {
    usuarioLogueado = false;
    localStorage.setItem("usuario_logueado", JSON.stringify(usuarioLogueado));
    localStorage.removeItem("user");
    localStorage.removeItem("usuario_logueado");
    localStorage.removeItem("favoritos");
    window.location.replace("index.html");
  } else {
    window.location.reload();
  }
};

if (usuarioLogueado) {
  if (user.name === userAdmin.name) {
    linkAdmin.className = "nav-item";
    btnRegistro.className = "d-none";
    btnDeslogueo.className = "";
    contFav.className = "d-none";
    btnLogueo.innerHTML = user.name;
    btnLogueo.className = "px-3 nav-link active ";
    btnLogueo.removeAttribute("href");
    btnDeslogueo.addEventListener("click", cerrarSesion);
  } else {
    btnRegistro.className = "d-none";
    btnDeslogueo.className = " px-1 ";
    btnLogueo.innerHTML = usuarioLogueado.nickName;
    btnLogueo.className = "px-3 nav-link active ";
    btnLogueo.removeAttribute("href");
    btnDeslogueo.addEventListener("click", cerrarSesion);
  }
}
// const adminLog = JSON.parse(localStorage.getItem("user")) || false;
// if (!adminLog) {
//   alert("solo accede usuario admin");
//   window.location.href = "index.html";
// }