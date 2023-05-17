let productosLocalStorage = JSON.parse(localStorage.getItem("productos")) || [];
let userAdmin = {
  name: "admin",
  email: "admin@gmail.com",
  password: "administrador",
};
let usuarioLogueado =
  JSON.parse(localStorage.getItem("usuario_logueado")) || false;
let user = JSON.parse(localStorage.getItem("user")) || "";
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
  if (
user.name
 === 
userAdmin.name
) {
    linkAdmin.className = "nav-item";
    btnRegistro.className = "d-none";
    btnDeslogueo.className = "";
    contFav.className = "d-none";
    btnLogueo.innerHTML = 
user.name
;
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
const adminLog = JSON.parse(localStorage.getItem("user")) || false;
if (!adminLog) {
  alert("solo accede usuario admin");
  window.location.href = "index.html";
}
// let productos = [];

const listado = document.getElementById(`tablaDeProd`);
const listadoEliminar = document.getElementById(`tablaDeProdEliminar`);
const listadoEditar = document.getElementById(`tablaDeProdEditar`);
const nombreDeProducto = document.getElementById(`nombre`);
const precioDeProducto = document.getElementById(`precio`);
const descripcionDeProducto = document.getElementById(`descripcion`);
const añadirBoton = document.getElementById(`enviarproducto`);
const formulario = document.getElementById(`formularioproducto`);
const tbodylistado = document.getElementById(`bodytexto`);
const tbodylistadoEliminar = document.getElementById(`bodytextoEliminar`);
const tbodylistadoEditar = document.getElementById(`bodytextoEditar`);
const formularioEditar = document.getElementById(`formularioEditar`);
const urlImagen = document.getElementById(`urlImagen`);
const nombreEditar = document.getElementById(`nombreEditar`);
const precioEditar = document.getElementById(`precioEditar`);
const descripcionEditar = document.getElementById(`descripcionEditar`);

productosLocalStorage.forEach((producto) => {
  const tr = document.createElement(`tr`);
  tr.innerHTML = `
  <td>#${producto.codigo}</td>
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  <td>${producto.descripcion}</td>`;
  tbodylistado.appendChild(tr);
});
productosLocalStorage.forEach((producto) => {
  const tr = document.createElement(`tr`);
  tr.innerHTML = `
  <td>#${producto.codigo}</td>
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  <td>${producto.descripcion}</td>
  <td class="areaEliminar"><button id="eliminarProdBtn" type="button" class="btn btn-outline-danger eliminar" data-id="${producto.codigo}"><svg xmlns="
http://www.w3.org/2000/svg
" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" id="botoneliminari">
  <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>Eliminar</button></td>`;

  tbodylistadoEliminar.appendChild(tr);
});
productosLocalStorage.forEach((producto) => {
  const tr = document.createElement(`tr`);
  tr.innerHTML = `
  <td>#${producto.codigo}</td>
  <td>${producto.nombre}</td>
  <td>${producto.precio}</td>
  <td>${producto.descripcion}</td>
  <td class="areaEditar"><button id="editarProdBtn" class="editar btn btn-outline-info" data-id="${producto.codigo}" data-bs-toggle="modal" data-bs-target="#editarFormModal" ><svg xmlns="
http://www.w3.org/2000/svg
" id="botoneditari" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>Editar</button></td>`;
  tbodylistadoEditar.appendChild(tr);
});

//CODIGO RANDOM

function uuidv4() {
  return "xxxxxx".replace(/[x]/g, function (c) {
    const r = (Math.random() * 9) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(+16);
  });
}
//FUNCION MOSTRAR:
function mostrarProd() {
  listado.querySelector("tbody").innerHTML = "";
  productosLocalStorage.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>`;
    tbodylistado.appendChild(tr);
  });
}
//FUNCION AÑADIR:
añadirBoton.addEventListener(`click`, (e) => {
  e.preventDefault();
  const nombre = nombreDeProducto.value;
  const precio = precioDeProducto.value;
  const descripcion = descripcionDeProducto.value;
  const imagen = urlImagen.value;
  const codigo = uuidv4();

  // VALIDACIONES DE FUNCION AÑADIR:
  if (
    nombre.trim() === "" ||
    precio.trim() === "" ||
    imagen.trim() === "" ||
    descripcion.trim() === ""
  ) {
    
Swal.fire
({
      icon: "error",
      title: "Por favor, completa todos los campos",
    });
    e.preventDefault();
    return;
  }
  if (nombre.length < 3 || nombre.length > 30) {
    
Swal.fire
({
      icon: "error",
      title: "Nombre: debe tener más de 3 caracteres",
    });
    e.preventDefault();
    return;
  }
  if (!/^\d+(\.\d+)?$/.test(precio)) {
    
Swal.fire
({
      icon: "error",
      title: "Precio solo admite caracteres numéricos",
    });
    e.preventDefault();
    return;
  }
  const urlRegex = /^(http|https):\/\/[^ "]+$/;
  if (!urlRegex.test(imagen)) {
    
Swal.fire
({
      icon: "error",
      title: "La imagen no es una URL válida",
    });
    return;
  }
  if (descripcion.length < 15 || descripcion.length > 100) {
    
Swal.fire
({
      icon: "error",
      title: "Descripción: debe tener un mínimo de 15 caracteres",
    });
    e.preventDefault();
    return;
  } // FIN DE VALIDACION

  // const producto = { codigo, nombre, precio, descripcion, imagen };
  productosLocalStorage.push({ codigo, nombre, precio, descripcion, imagen });
  console.log(productosLocalStorage);
  localStorage.setItem(`productos`, JSON.stringify(productosLocalStorage));
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });
  
Toast.fire
({
    icon: "success",
    title: "El Producto se agrego Correctamente",
  });
  mostrarProd();
  mostrarProdEnEliminar();
  mostrarProdEnEditar();
  formulario.reset();
});

function mostrarProdEnEliminar() {
  listadoEliminar.querySelector("tbody").innerHTML = "";
  productosLocalStorage.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td class="areaEliminar"><button id="eliminarProdBtn" type="button" class="btn btn-outline-danger eliminar" data-id="${producto.codigo}"><svg xmlns="
http://www.w3.org/2000/svg
" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" id="botoneliminari">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>Eliminar</button></td>`;

    tbodylistadoEliminar.appendChild(tr);
  });
}

//FUNCION ELIMINAR
listadoEliminar.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const id = 
e.target.dataset.id
;
    const index = productosLocalStorage.findIndex(
      (producto) => producto.codigo === id
    );
    if (index !== -1) {
      
Swal.fire
({
        title: "¿Estás seguro de eliminar este producto?",
        text: "No podrás revertir esto",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          productosLocalStorage.splice(index, 1);

          const productosActualizados = productosLocalStorage.filter(
            (producto) => producto.codigo !== id
          );
          localStorage.setItem(
            "productos",
            JSON.stringify(productosActualizados)
          );
          mostrarProd();
          mostrarProdEnEliminar();
          mostrarProdEnEditar();
          
Swal.fire
("¡Eliminado!", "El producto ha sido eliminado.", "success");
        } else {
          
Swal.fire
(
            "Eliminación cancelada",
            "El producto no ha sido eliminado.",
            "info"
          );
        }
      });
    }
  }
});

//MOSTRAR EN EDITAR
function mostrarProdEnEditar() {
  listadoEditar.querySelector("tbody").innerHTML = "";
  productosLocalStorage.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td class="areaEditar"><button id="editarProdBtn" class="editar btn btn-outline-info" data-id="${producto.codigo}" data-bs-toggle="modal" data-bs-target="#editarFormModal" ><svg xmlns="
http://www.w3.org/2000/svg
" id="botoneditari" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>Editar</button></td>`;
    tbodylistadoEditar.appendChild(tr);
  });
}

const editarproductoboton = document.getElementById(`editarproductoboton`);

//EDITAR PRODUCTO

editarproductoboton.addEventListener("click", (e) => {
  const id = listadoEditar.dataset.editId;
  const producto =
    productosLocalStorage.find((producto) => producto.codigo === id) || false;
  let index = productosLocalStorage.findIndex(
    (producto) => producto.codigo === id
  );

  if (producto) {
    const nuevoNombre = nombreEditar.value;
    const nuevoPrecio = precioEditar.value;
    const nuevaImagen = urlimagenEditar.value;
    const nuevaDescripcion = descripcionEditar.value;

    // VALIDACIONES DE FUNCION EDITAR:
    if (
      nuevoNombre.trim() === "" ||
      nuevoPrecio.trim() === "" ||
      nuevaImagen.trim() === "" ||
      nuevaDescripcion.trim() === ""
    ) {
      
Swal.fire
({
        icon: "error",
        title: "Por favor, completa todos los campos",
      });
      e.preventDefault();
      return;
    }
    if (nuevoNombre.length < 3 || nuevoNombre.length > 30) {
      
Swal.fire
({
        icon: "error",
        title: "Nombre: debe tener más de 3 caracteres",
      });
      e.preventDefault();
      return;
    }
    if (!/^\d+(\.\d+)?$/.test(nuevoPrecio)) {
      
Swal.fire
({
        icon: "error",
        title: "Precio solo admite caracteres numéricos",
      });
      e.preventDefault();
      return;
    }
    const urlRegex = /^(http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(nuevaImagen)) {
      
Swal.fire
({
        icon: "error",
        title: "La imagen no es una URL válida",
      });
      return;
    }
    if (nuevaDescripcion.length < 15 || nuevaDescripcion.length > 50) {
      
Swal.fire
({
        icon: "error",
        title: "Descripción: debe tener un mínimo de 15 caracteres",
      });
      e.preventDefault();
      return;
    } // FIN DE VALIDACION

    // Actualizar el producto en JavaScript
    const productoActualizado = {
      codigo: producto.codigo,
      nombre: nuevoNombre,
      precio: nuevoPrecio,
      imagen: nuevaImagen,
      descripcion: nuevaDescripcion,
    };
    productosLocalStorage[index] = productoActualizado;

    // Actualizar el producto en el Local Storage
    localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
    
Swal.fire
({
      icon: "success",
      title: "Producto modificado",
    });
    mostrarProd();
    mostrarProdEnEliminar();
    mostrarProdEnEditar();
    formularioEditar.reset();
  }
});

// Controlador de evento para el elemento listadoEditar
listadoEditar.addEventListener("click", (e) => {
  const id = 
e.target.dataset.id
;
  const producto = productosLocalStorage.find(
    (producto) => producto.codigo === id
  );
  let index = productosLocalStorage.findIndex(
    (producto) => producto.codigo === id
  );

  if (producto) {
    document.getElementById("nombreEditar").value = producto.nombre; // Seteamos el valor del input nombre
    document.getElementById("precioEditar").value = producto.precio; // Seteamos el valor del input precio
    document.getElementById("descripcionEditar").value = producto.descripcion; // Seteamos el valor del input descripcion
    document.getElementById("urlimagenEditar").value = producto.imagen;
    listadoEditar.dataset.editId = id; // Seteamos el id del producto a editar
  }
}); 



// let productosLocalStorage = JSON.parse(localStorage.getItem("productos"));
// let userAdmin = {
//   name: "admin",
//   email: "admin@gmail.com",
//   password: "administrador",
// };
// let usuarioLogueado =
//   JSON.parse(localStorage.getItem("usuario_logueado")) || false;
// let user = JSON.parse(localStorage.getItem("user")) || "";
// const cerrarSesion = () => {
//   if (usuarioLogueado) {
//     usuarioLogueado = false;
//     localStorage.setItem("usuario_logueado", JSON.stringify(usuarioLogueado));
//     localStorage.removeItem("user");
//     localStorage.removeItem("usuario_logueado");
//     localStorage.removeItem("favoritos");
//     window.location.replace("index.html");
//   } else {
//     window.location.reload();
//   }
// };

// if (usuarioLogueado) {
//   if (user.name === userAdmin.name) {
//     linkAdmin.className = "nav-item";
//     btnRegistro.className = "d-none";
//     btnDeslogueo.className = "";
//     contFav.className = "d-none";
//     btnLogueo.innerHTML = user.name;
//     btnLogueo.className = "px-3 nav-link active ";
//     btnLogueo.removeAttribute("href");
//     btnDeslogueo.addEventListener("click", cerrarSesion);
//   } else {
//     btnRegistro.className = "d-none";
//     btnDeslogueo.className = " px-1 ";
//     btnLogueo.innerHTML = usuarioLogueado.nickName;
//     btnLogueo.className = "px-3 nav-link active ";
//     btnLogueo.removeAttribute("href");
//     btnDeslogueo.addEventListener("click", cerrarSesion);
//   }
// }
// const adminLog = JSON.parse(localStorage.getItem("user")) || false;
// if (!adminLog) {
//   alert("solo accede usuario admin");
//   window.location.href = "index.html";
// }
// // let productos = [];

// const listado = document.getElementById(`tablaDeProd`);
// const listadoEliminar = document.getElementById(`tablaDeProdEliminar`);
// const listadoEditar = document.getElementById(`tablaDeProdEditar`);
// const nombreDeProducto = document.getElementById(`nombre`);
// const precioDeProducto = document.getElementById(`precio`);
// const descripcionDeProducto = document.getElementById(`descripcion`);
// const añadirBoton = document.getElementById(`enviarproducto`);
// const formulario = document.getElementById(`formularioproducto`);
// const tbodylistado = document.getElementById(`bodytexto`);
// const tbodylistadoEliminar = document.getElementById(`bodytextoEliminar`);
// const tbodylistadoEditar = document.getElementById(`bodytextoEditar`);
// const formularioEditar = document.getElementById(`formularioEditar`);
// const urlImagen = document.getElementById(`urlImagen`);
// const nombreEditar = document.getElementById(`nombreEditar`);
// const precioEditar = document.getElementById(`precioEditar`);
// const descripcionEditar = document.getElementById(`descripcionEditar`);

// productosLocalStorage.forEach((producto) => {
//   const tr = document.createElement(`tr`);
//   tr.innerHTML = `
//   <td>#${producto.codigo}</td>
//   <td>${producto.nombre}</td>
//   <td>${producto.precio}</td>
//   <td>${producto.descripcion}</td>`;
//   tbodylistado.appendChild(tr);
// });
// productosLocalStorage.forEach((producto) => {
//   const tr = document.createElement(`tr`);
//   tr.innerHTML = `
//   <td>#${producto.codigo}</td>
//   <td>${producto.nombre}</td>
//   <td>${producto.precio}</td>
//   <td>${producto.descripcion}</td>
//   <td class="areaEliminar"><button id="eliminarProdBtn" type="button" class="btn btn-outline-danger eliminar" data-id="${producto.codigo}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" id="botoneliminari">
//   <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
//   <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
// </svg>Eliminar</button></td>`;

//   tbodylistadoEliminar.appendChild(tr);
// });
// productosLocalStorage.forEach((producto) => {
//   const tr = document.createElement(`tr`);
//   tr.innerHTML = `
//   <td>#${producto.codigo}</td>
//   <td>${producto.nombre}</td>
//   <td>${producto.precio}</td>
//   <td>${producto.descripcion}</td>
//   <td class="areaEditar"><button id="editarProdBtn" class="editar btn btn-outline-info" data-id="${producto.codigo}" data-bs-toggle="modal" data-bs-target="#editarFormModal" ><svg xmlns="http://www.w3.org/2000/svg" id="botoneditari" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//   <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//   <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
// </svg>Editar</button></td>`;
//   tbodylistadoEditar.appendChild(tr);
// });

// //CODIGO RANDOM

// function uuidv4() {
//   return "xxxxxx".replace(/[x]/g, function (c) {
//     const r = (Math.random() * 9) | 0;
//     const v = c == "x" ? r : (r & 0x3) | 0x8;
//     return v.toString(+16);
//   });
// }
// //FUNCION MOSTRAR:
// function mostrarProd() {
//   listado.querySelector("tbody").innerHTML = "";
//   productosLocalStorage.forEach((producto) => {
//     const tr = document.createElement(`tr`);
//     tr.innerHTML = `
//     <td>#${producto.codigo}</td>
//     <td>${producto.nombre}</td>
//     <td>${producto.precio}</td>
//     <td>${producto.descripcion}</td>`;
//     tbodylistado.appendChild(tr);
//   });
// }
// //FUNCION AÑADIR:
// añadirBoton.addEventListener(`click`, (e) => {
//   e.preventDefault();
//   const nombre = nombreDeProducto.value;
//   const precio = precioDeProducto.value;
//   const descripcion = descripcionDeProducto.value;
//   const imagen = urlImagen.value;
//   const codigo = uuidv4();

//   // VALIDACIONES DE FUNCION AÑADIR:
//   if (
//     nombre.trim() === "" ||
//     precio.trim() === "" ||
//     imagen.trim() === "" ||
//     descripcion.trim() === ""
//   ) {
//     Swal.fire({
//       icon: "error",
//       title: "Por favor, completa todos los campos",
//     });
//     e.preventDefault();
//     return;
//   }
//   if (nombre.length < 3 || nombre.length > 30) {
//     Swal.fire({
//       icon: "error",
//       title: "Nombre: debe tener más de 3 caracteres",
//     });
//     e.preventDefault();
//     return;
//   }
//   if (!/^\d+(\.\d+)?$/.test(precio)) {
//     Swal.fire({
//       icon: "error",
//       title: "Precio solo admite caracteres numéricos",
//     });
//     e.preventDefault();
//     return;
//   }
//   const urlRegex = /^(http|https):\/\/[^ "]+$/;
//   if (!urlRegex.test(imagen)) {
//     Swal.fire({
//       icon: "error",
//       title: "La imagen no es una URL válida",
//     });
//     return;
//   }
//   if (descripcion.length < 15 || descripcion.length > 100) {
//     Swal.fire({
//       icon: "error",
//       title: "Descripción: debe tener un mínimo de 15 caracteres",
//     });
//     e.preventDefault();
//     return;
//   } // FIN DE VALIDACION

//   // const producto = { codigo, nombre, precio, descripcion, imagen };
//   productosLocalStorage.push({ codigo, nombre, precio, descripcion, imagen });
//   console.log(productosLocalStorage);
//   localStorage.setItem(`productos`, JSON.stringify(productosLocalStorage));
//   const Toast = Swal.mixin({
//     toast: true,
//     position: "top-end",
//     showConfirmButton: false,
//     timer: 3000,
//     timerProgressBar: true,
//     didOpen: (toast) => {
//       toast.addEventListener("mouseenter", Swal.stopTimer);
//       toast.addEventListener("mouseleave", Swal.resumeTimer);
//     },
//   });
//   Toast.fire({
//     icon: "success",
//     title: "El Producto se agrego Correctamente",
//   });
//   mostrarProd();
//   mostrarProdEnEliminar();
//   mostrarProdEnEditar();
//   formulario.reset();
// });

// function mostrarProdEnEliminar() {
//   listadoEliminar.querySelector("tbody").innerHTML = "";
//   productosLocalStorage.forEach((producto) => {
//     const tr = document.createElement(`tr`);
//     tr.innerHTML = `
//     <td>#${producto.codigo}</td>
//     <td>${producto.nombre}</td>
//     <td>${producto.precio}</td>
//     <td>${producto.descripcion}</td>
//     <td class="areaEliminar"><button id="eliminarProdBtn" type="button" class="btn btn-outline-danger eliminar" data-id="${producto.codigo}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" id="botoneliminari">
//     <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
//     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
//   </svg>Eliminar</button></td>`;

//     tbodylistadoEliminar.appendChild(tr);
//   });
// }

// //FUNCION ELIMINAR
// listadoEliminar.addEventListener("click", (e) => {
//   if (e.target.classList.contains("eliminar")) {
//     const id = e.target.dataset.id;
//     const index = productosLocalStorage.findIndex(
//       (producto) => producto.codigo === id
//     );
//     if (index !== -1) {
//       Swal.fire({
//         title: "¿Estás seguro de eliminar este producto?",
//         text: "No podrás revertir esto",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Sí, eliminar",
//         cancelButtonText: "Cancelar",
//       }).then((result) => {
//         if (result.isConfirmed) {
//           productosLocalStorage.splice(index, 1);

//           const productosActualizados = productosLocalStorage.filter(
//             (producto) => producto.codigo !== id
//           );
//           localStorage.setItem(
//             "productos",
//             JSON.stringify(productosActualizados)
//           );
//           mostrarProd();
//           mostrarProdEnEliminar();
//           mostrarProdEnEditar();
//           Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
//         } else {
//           Swal.fire(
//             "Eliminación cancelada",
//             "El producto no ha sido eliminado.",
//             "info"
//           );
//         }
//       });
//     }
//   }
// });

// //MOSTRAR EN EDITAR
// function mostrarProdEnEditar() {
//   listadoEditar.querySelector("tbody").innerHTML = "";
//   productosLocalStorage.forEach((producto) => {
//     const tr = document.createElement(`tr`);
//     tr.innerHTML = `
//     <td>#${producto.codigo}</td>
//     <td>${producto.nombre}</td>
//     <td>${producto.precio}</td>
//     <td>${producto.descripcion}</td>
//     <td class="areaEditar"><button id="editarProdBtn" class="editar btn btn-outline-info" data-id="${producto.codigo}" data-bs-toggle="modal" data-bs-target="#editarFormModal" ><svg xmlns="http://www.w3.org/2000/svg" id="botoneditari" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
//     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
//     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
//   </svg>Editar</button></td>`;
//     tbodylistadoEditar.appendChild(tr);
//   });
// }

// const editarproductoboton = document.getElementById(`editarproductoboton`);

// //EDITAR PRODUCTO

// editarproductoboton.addEventListener("click", (e) => {
//   const id = listadoEditar.dataset.editId;
//   const producto =
//     productosLocalStorage.find((producto) => producto.codigo === id) || false;
//   let index = productosLocalStorage.findIndex(
//     (producto) => producto.codigo === id
//   );

//   if (producto) {
//     const nuevoNombre = nombreEditar.value;
//     const nuevoPrecio = precioEditar.value;
//     const nuevaImagen = urlimagenEditar.value;
//     const nuevaDescripcion = descripcionEditar.value;

//     // VALIDACIONES DE FUNCION EDITAR:
//     if (
//       nuevoNombre.trim() === "" ||
//       nuevoPrecio.trim() === "" ||
//       nuevaImagen.trim() === "" ||
//       nuevaDescripcion.trim() === ""
//     ) {
//       Swal.fire({
//         icon: "error",
//         title: "Por favor, completa todos los campos",
//       });
//       e.preventDefault();
//       return;
//     }
//     if (nuevoNombre.length < 3 || nuevoNombre.length > 30) {
//       Swal.fire({
//         icon: "error",
//         title: "Nombre: debe tener más de 3 caracteres",
//       });
//       e.preventDefault();
//       return;
//     }
//     if (!/^\d+(\.\d+)?$/.test(nuevoPrecio)) {
//       Swal.fire({
//         icon: "error",
//         title: "Precio solo admite caracteres numéricos",
//       });
//       e.preventDefault();
//       return;
//     }
//     const urlRegex = /^(http|https):\/\/[^ "]+$/;
//     if (!urlRegex.test(nuevaImagen)) {
//       Swal.fire({
//         icon: "error",
//         title: "La imagen no es una URL válida",
//       });
//       return;
//     }
//     if (nuevaDescripcion.length < 15 || nuevaDescripcion.length > 50) {
//       Swal.fire({
//         icon: "error",
//         title: "Descripción: debe tener un mínimo de 15 caracteres",
//       });
//       e.preventDefault();
//       return;
//     } // FIN DE VALIDACION

//     // Actualizar el producto en JavaScript
//     const productoActualizado = {
//       codigo: producto.codigo,
//       nombre: nuevoNombre,
//       precio: nuevoPrecio,
//       imagen: nuevaImagen,
//       descripcion: nuevaDescripcion,
//     };
//     productosLocalStorage[index] = productoActualizado;

//     // Actualizar el producto en el Local Storage
//     localStorage.setItem("productos", JSON.stringify(productosLocalStorage));
//     Swal.fire({
//       icon: "success",
//       title: "Producto modificado",
//     });
//     mostrarProd();
//     mostrarProdEnEliminar();
//     mostrarProdEnEditar();
//     formularioEditar.reset();
//   }
// });

// // Controlador de evento para el elemento listadoEditar
// listadoEditar.addEventListener("click", (e) => {
//   const id = e.target.dataset.id;
//   const producto = productosLocalStorage.find(
//     (producto) => producto.codigo === id
//   );
//   let index = productosLocalStorage.findIndex(
//     (producto) => producto.codigo === id
//   );

//   if (producto) {
//     document.getElementById("nombreEditar").value = producto.nombre; // Seteamos el valor del input nombre
//     document.getElementById("precioEditar").value = producto.precio; // Seteamos el valor del input precio
//     document.getElementById("descripcionEditar").value = producto.descripcion; // Seteamos el valor del input descripcion
//     document.getElementById("urlimagenEditar").value = producto.imagen;
//     listadoEditar.dataset.editId = id; // Seteamos el id del producto a editar
//   }
// });
