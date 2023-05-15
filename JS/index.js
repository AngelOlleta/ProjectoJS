let userAdmin = {
  name: "admin",
  email: "admin@gmail.com",
  password: "administrador",
};
let usuarioLogueado =
  JSON.parse(localStorage.getItem("usuario_logueado")) || false;
let user = JSON.parse(localStorage.getItem("user")) || "";
let linkAdmin = document.getElementById("linkAdmin");
let btnLogueo = document.getElementById("btnLogueo");
let btnDeslogueo = document.getElementById("btnDeslogueo");
let btnRegistro = document.getElementById("btnRegistro");
let contFav = document.getElementById("contFav");
// usuarioLogueado.addEventListener("click", () => {

const cerrarSesion = () => {
  if (usuarioLogueado) {
    usuarioLogueado = false;
    localStorage.setItem("usuario_logueado", JSON.stringify(usuarioLogueado));
    localStorage.removeItem("user");
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

// window.location.href = "login.html";
// } else {
//   alert("Hasta pronto!");
//   localStorage.removeItem("usuario_logueado");
//   window.location.href = "login.html";
// }
// });
