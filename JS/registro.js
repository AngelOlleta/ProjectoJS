const formRegistro = document.querySelector("#formRegistro");
formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreCompleto = document.querySelector("#nombreCompleto").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const nombreUsuario = document.querySelector("#nombreUsuario").value;
  const telefono = document.querySelector("#telefono");
  const domicilio = document.querySelector("#domicilio").value;
  const codigoPostal = document.querySelector("#codigoPostal").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistred = Users.find((user) => user.email === email);
  if (isUserRegistred) {
    return swal("El usuaria ya esta registrado");
  }
  Users.push({
    name: nombreCompleto,
    email: email,
    nickName: nombreUsuario,
    password: password,
    telefono: telefono,
    domicilio: domicilio,
    codigoPostal: codigoPostal,
  });
  localStorage.setItem("users", JSON.stringify(Users));
  alert("Registro existoso! ");
  window.location.href = "login.html";
});
