let productos = []

const listado = document.getElementById(`tablaDeProd`)
const nombreDeProducto = document.getElementById(`nombre`)
const precioDeProducto = document.getElementById(`precio`)
const descripcionDeProducto = document.getElementById(`descripcion`)
const codigoDeProducto = document.getElementById(`codigo`)
const añadirBoton = document.getElementById(`enviarproducto`)
const formulario = document.getElementById(`formularioproducto`)
const tbodylistado = document.getElementById(`bodytexto`)

añadirBoton.addEventListener(`click`, (e) => {
    e.preventDefault();

    const nombre = nombreDeProducto.value
    const precio = precioDeProducto.value
    const descripcion = descripcionDeProducto.value
    const codigo = codigoDeProducto.value
    const producto = { nombre, precio, descripcion };
    productos.push(producto);
    console.log(productos);
    localStorage.setItem(`productos`, JSON.stringify(productos));
    mostrarProd();
    formulario.reset();
    
});


function mostrarProd() {
  listado.querySelector("tbody").innerHTML = ""

  productos.forEach((producto) => {
    const tr = document.createElement(`tr`);
    tr.innerHTML = `
    <td>codigo</td>
    <td>${producto.nombre}</td>
    <td>${producto.precio}</td>
    <td>${producto.descripcion}</td>`;
    tbodylistado.appendChild(tr);

  });
}

function generateUniqueCode() {
  const digitos = "0123456789";
  let codigoRandom = "#";
  
  for (var i = 0; i < 5; i++) {
    codigoRandom += digitos[Math.floor(Math.random() * 10)];
  }
  
  return codigoRandom;
}
let codigoGenerados = new Set();

let codigoRandom = generateUniqueCode();
while (codigoGenerados.has(codigoRandom)) {
  codigoRandom = generateUniqueCode();
}
codigoGenerados.add(codigoRandom);
console.log(codigoRandom);