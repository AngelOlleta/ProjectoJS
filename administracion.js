let productos = []

const listado = document.getElementById(`tablaDeProd`)
const listadoEliminar = document.getElementById(`tablaDeProdEliminar`)
const listadoEditar = document.getElementById(`tablaDeProdEditar`)
const nombreDeProducto = document.getElementById(`nombre`)
const precioDeProducto = document.getElementById(`precio`)
const descripcionDeProducto = document.getElementById(`descripcion`)
const añadirBoton = document.getElementById(`enviarproducto`)
const formulario = document.getElementById(`formularioproducto`)
const tbodylistado = document.getElementById(`bodytexto`)
const tbodylistadoEliminar = document.getElementById(`bodytextoEliminar`)
const tbodylistadoEditar = document.getElementById(`bodytextoEditar`)



//FUNCION AÑADIR
añadirBoton.addEventListener(`click`, (e) => {
    e.preventDefault();

    const nombre = nombreDeProducto.value
    const precio = precioDeProducto.value
    const descripcion = descripcionDeProducto.value
    const codigo = uuidv4();
    const producto = { codigo, nombre, precio, descripcion };
    productos.push(producto);
    console.log(productos);
    localStorage.setItem(`productos`, JSON.stringify(productos));

    mostrarProd();
    mostrarProdEnEliminar();
    mostrarProdEnEditar();
    formulario.reset();
});

//FUNCION MOSTRAR
function mostrarProd() {
  listado.querySelector("tbody").innerHTML = ""

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
  listadoEliminar.querySelector("tbody").innerHTML = ""

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
  return 'xxxxxx'.replace(/[x]/g, function(c) {
    const r = Math.random() *9 | 0;
    const v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(+16);
});

}



//FUNCION ELIMINAR
listadoEliminar.addEventListener("click", (e) => {
  if (e.target.classList.contains("eliminar")) {
    const id = e.target.dataset.id;
    const index = productos.findIndex((producto) => producto.codigo === id);
    if (index !== -1) {
      productos.splice(index, 1);
      
      mostrarProd();
      mostrarProdEnEliminar();
      mostrarProdEnEditar();
    }
  }
});

function mostrarProdEnEditar() {
  listadoEditar.querySelector("tbody").innerHTML = ""

  productos.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>#${producto.codigo}</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>
    <td><button id="eliminarProdBtn" class="eliminar" data-id="${producto.codigo}"><i class="fa-regular fa-pen-to-square"></i></button></td>`;
    
    tbodylistadoEditar.appendChild(tr);
    
  });
}

//  VALIDACIONES DE FORMULARIO AGREGAR:

const nombreInput = document.getElementById('nombre');
const precioInput = document.getElementById('precio');
const urlimagenInput = document.getElementById('urlimagen');
const descripcionInput = document.getElementById('descripcion');
const enviarBtn = document.getElementById('enviarproducto');

// Validaciones:

enviarBtn.addEventListener('click', function(event) {

  if (nombreInput.value === '') {
    alert('Por favor, ingresa un nombre para el producto');
    event.preventDefault(); 
    return;
  }
  if (precioInput.value === '') {
    alert('Por favor, ingresa un precio para el producto');
    event.preventDefault();
    return;
  }
  if (urlimagenInput.value === '') {
    alert('Por favor, ingresa una URL de imagen para el producto');
    event.preventDefault();
    return;
  }
  if (descripcionInput.value === '') {
    alert('Por favor, ingresa una descripción para el producto');
    event.preventDefault();
    return;
  }
});


