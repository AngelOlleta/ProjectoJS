const formRegistro = document.querySelector("#formRegistro");
formRegistro.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const apellido = document.querySelector("#apellido").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const nombreUsuario = document.querySelector("#nombreUsuario").value;
  const telefono = document.querySelector("#telefono");
  const domicilio = document.querySelector("#domicilio").value;
  const codigoPostal = document.querySelector("#codigoPostal").value;

  const Users = JSON.parse(localStorage.getItem("users")) || [];
  const isUserRegistred = Users.find((user) => user.email === email);
  if (isUserRegistred) {
    return Swal.fire("El usuario ya esta registrado");
  }
  Users.push({
    name: nombre,
    lastName: apellido,
    email: email,
    nickName: nombreUsuario,
    password: password,
    telefono: telefono,
    domicilio: domicilio,
    codigoPostal: codigoPostal,
  });
  localStorage.setItem("users", JSON.stringify(Users));
  Swal.fire("Registro existoso! ");
  window.location.href = "login.html";
});

function validarTextoSinNumeros(input) {
  let valor = input.value;
  let regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?0-9]+/; // Expresión regular para buscar numeros y caracteres especiales

  if (regex.test(valor)) {
    input.value = valor.replace(regex, ''); // Elimina cualquier numero o caracter especial
  }
}

function validarSoloNumeros(input) {
  let valor = input.value;
  let regex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?A-Za-záéíóúÁÉÍÓÚñÑüÜ\s]+/; // Expresion regular para buscar letras y caracteres especiales

  if (regex.test(valor)) {
    input.value = valor.replace(regex, ''); // Elimina cualquier letra o caracter especial
  }
}
