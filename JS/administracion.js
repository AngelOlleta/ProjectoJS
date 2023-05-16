let productos = [];

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

//FUNCION AÑADIR
añadirBoton.addEventListener(`click`, (e) => {
  e.preventDefault();

  const nombre = nombreDeProducto.value;
  const precio = precioDeProducto.value;
  const descripcion = descripcionDeProducto.value;
  const imagen = urlImagen.value;
  const codigo = uuidv4();

  //  VALIDACIONES DE FUNCION AÑADIR:
  if (
    nombre.trim() === "" ||
    precio.trim() === "" ||
    descripcion.trim() === ""
  ) {
    alert("Por favor, compete todos los campos");
    e.preventDefault();
    return;
  }
  if (nombre.length < 3 || descripcion.length > 50) {
    alert("Nombre: debe tener mas de 3 caracteres");
    e.preventDefault();
    return;
  }
  if (!/^\d+(\.\d+)?$/.test(precio)) {
    alert("Precio solo adminte caracteres numericos");
    e.preventDefault();
    return;
  }
  if (descripcion.length < 15 || descripcion.length > 100) {
    alert("Descripcion: debe tener un minimo de 20 caracteres");
    e.preventDefault();
    return;
  }
  // FIN DE VALIDACION

  const producto = { codigo, nombre, precio, descripcion, imagen };
  productos.push(producto);
  console.log(productos);
  localStorage.setItem(`productos`, JSON.stringify(productos));

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

  Toast.fire({
    icon: "success",
    title: "El Producto se agrego Correctamente",
  });

  mostrarProd();
  mostrarProdEnEliminar();
  mostrarProdEnEditar();
  formulario.reset();
});

//FUNCION MOSTRAR
function mostrarProd() {
  listado.querySelector("tbody").innerHTML = "";

  productos.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>`;
    tbodylistado.appendChild(tr);
  });
}

function mostrarProdEnEliminar() {
  listadoEliminar.querySelector("tbody").innerHTML = "";

  productos.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td class="areaEliminar"><button id="eliminarProdBtn" type="button" class="btn btn-outline-danger eliminar" data-id="${producto.codigo}"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16" id="botoneliminari">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
  </svg>Eliminar</button></td>`;

    tbodylistadoEliminar.appendChild(tr);
  });
}

//CODIGO RANDOM
function uuidv4() {
  return "xxxxxx".replace(/[x]/g, function (c) {
    const r = (Math.random() * 9) | 0;
    const v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(+16);
  });
}

//FUNCION ELIMINAR
//FUNCION ELIMINAR
listadoEliminar.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const id = e.target.dataset.id;
    const index = productos.findIndex((producto) => producto.codigo === id);
    if (index !== -1) {
      Swal.fire({
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
          productos.splice(index, 1);
          const productosLocalStorage = JSON.parse(
            localStorage.getItem("productos")
          );
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

          Swal.fire("¡Eliminado!", "El producto ha sido eliminado.", "success");
        } else {
          Swal.fire(
            "Eliminación cancelada",
            "El producto no ha sido eliminado.",
            "info"
          );
        }
      });
    }
  }
});

//Muestra en Editar
function mostrarProdEnEditar() {
  listadoEditar.querySelector("tbody").innerHTML = "";

  productos.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td class="areaEditar"><button id="editarProdBtn" class="editar btn btn-outline-info" data-id="${producto.codigo}" data-bs-toggle="modal" data-bs-target="#editarFormModal" ><svg xmlns="http://www.w3.org/2000/svg" id="botoneditari" width="20" height="20" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
  </svg>Editar</button></td>`;

    tbodylistadoEditar.appendChild(tr);
  });
}

const editarproductoboton = document.getElementById(`editarproductoboton`);

//EDITAR PRODUCTO

listadoEditar.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  const producto = productos.find((producto) => producto.codigo === id);
  let index = productos.findIndex((producto) => producto.codigo === id);
  if (producto) {
    document.getElementById("nombreEditar").value = producto.nombre; // Seteamos el valor del input nombre
    document.getElementById("precioEditar").value = producto.precio; // Seteamos el valor del input precio
    document.getElementById("descripcionEditar").value = producto.descripcion; // Seteamos el valor del input descripcion
    document.getElementById("urlimagenEditar").value = producto.imagen;
    listadoEditar.dataset.editId = id; // Seteamos el id del producto a editar
    editarproductoboton.addEventListener("click", (e) => {
      const nuevoNombre = nombreEditar.value;
      const nuevoPrecio = precioEditar.value;
      const nuevaDescripcion = descripcionEditar.value;
      const nuevaImagen = urlimagenEditar.value;

      //  VALIDACIONES DE FUNCION AÑADIR:
      if (
        nuevoNombre.trim() === "" ||
        nuevoPrecio.trim() === "" ||
        nuevaDescripcion.trim() === ""
      ) {
        alert("Por favor, compete todos los campos");
        e.preventDefault();
        return;
      }
      if (nuevoNombre.length < 3 || nuevaDescripcion.length > 50) {
        alert("Nombre: debe tener mas de 3 caracteres");
        e.preventDefault();
        return;
      }
      if (!/^\d+(\.\d+)?$/.test(nuevoPrecio)) {
        alert("Precio solo adminte caracteres numericos");
        e.preventDefault();
        return;
      }
      if (nuevaDescripcion.length < 15 || nuevaDescripcion.length > 100) {
        alert("Descripcion: debe tener un minimo de 20 caracteres");
        e.preventDefault();
        return;
      }
      productos[index].nombre = nuevoNombre;
      productos[index].descripcion = nuevaDescripcion;
      productos[index].precio = nuevoPrecio;
      productos[index].imagen = nuevaImagen;
      localStorage.setItem("productos", JSON.stringify(productos));

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

      Toast.fire({
        icon: "success",
        title: "El producto se modifico Correctamente",
      });

      mostrarProd();
      mostrarProdEnEliminar();
      mostrarProdEnEditar();
      formularioEditar.reset();
    });
  }
});
