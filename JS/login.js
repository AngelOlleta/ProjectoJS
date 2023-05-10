const loginForm = document.querySelector("#loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAdmin = {
    nombreUsuario: "admin",
    email: "admin@gmail.com",
    password: "administrador",
  };
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const validarUsuario = Users.find(
    (user) => user.email === email && user.password === password
  );

  if (!validarUsuario) {
    alert("Mail y/o contraseña incorrectos! ");
  }
  alert(`Bienvenido ${validarUsuario.name}`);
  localStorage.setItem("usuario_logueado", JSON.stringify(validarUsuario));
  window.location.href = "index.html";
});
