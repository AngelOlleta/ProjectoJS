let productos = []

const listado = document.getElementById(`tablaDeProd`)
const listadoEliminar = document.getElementById(`tablaDeProdEliminar`)
const nombreDeProducto = document.getElementById(`nombre`)
const precioDeProducto = document.getElementById(`precio`)
const descripcionDeProducto = document.getElementById(`descripcion`)
const codigoDeProducto = document.getElementById(`codigo`)
const añadirBoton = document.getElementById(`enviarproducto`)
const formulario = document.getElementById(`formularioproducto`)
const tbodylistado = document.getElementById(`bodytexto`)
const tbodylistadoEliminar = document.getElementById(`bodytextoEliminar`)
// const codigo = uuidv4();
//     console.log("#"+codigo);

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
    mostrarProdEnEliminar()
    formulario.reset();
});


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
    <td><button>Eliminar</button></td>`;
    
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
