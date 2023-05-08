let productos = []

const nombreDeProducto = document.getElementById(`nombre`)
const precioDeProducto = document.getElementById(`precio`)
const descripcionDeProducto = document.getElementById(`descripcion`)
const codigoDeProducto = document.getElementById(`codigo`)
const añadirBoton = document.getElementById(`Guardar`)

añadirBoton.addEventListener(`click`, (e) => {
    e.preventDefault();

    const nombre = nombreDeProducto.value
    const precio = precioDeProducto.value
    const descripcion = descripcionDeProducto.value
    const codigo = codigoDeProducto.value


});

const { v4: uuidv4 } = require('uuid');

// Genera un código único de 5 dígitos utilizando la librería uuid
function generateUniqueCode() {
  var code = "#" + uuidv4().slice(0, 5);
  return code;
}

// Llama a la función para generar el código
var code = generateUniqueCode();
console.log(code);