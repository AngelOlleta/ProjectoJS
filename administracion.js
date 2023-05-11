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
    <td class="areaEliminar"><button id="eliminarProdBtn" class="eliminar" data-id="${producto.codigo}"><i class="fa-sharp fa-regular fa-circle-xmark fa-2xs" style="color: #ff0000;"></i></button></td>`;
    
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