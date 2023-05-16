let userAdmin = {
  name: "admin",
  email: "admin@gmail.com",
  password: "administrador",
};
let sesionIniciada = false;
const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validarUsuario = Users.find(
    (user) => user.email === email && user.password === password
  );
  if (email === userAdmin.email) {
    if (password === userAdmin.password) {
      sesionIniciada = true;
      localStorage.setItem("usuario_logueado", JSON.stringify(sesionIniciada));
      localStorage.setItem("user", JSON.stringify(userAdmin));
      window.location.replace("index.html");
    } else {
      alert("Mail y/o contraseña incorrectos");
    }
  } else if (!validarUsuario) {
    alert("Mail y/o contraseña incorrectos! ");
  }
  alert(`Bienvenido ${validarUsuario.name}`);
  localStorage.setItem("usuario_logueado", JSON.stringify(validarUsuario));
  window.location.href = "index.html";
});
