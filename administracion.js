let productos = []

const nombreDeProducto = document.getElementById(`nombre`)
const precioDeProducto = document.getElementById(`precio`)
const descripcionDeProducto = document.getElementById(`descripcion`)
const codigoDeProducto = document.getElementById(`codigo`)
const añadirBoton = document.getElementById(`enviarproducto`)
const formulario = document.getElementById(`formularioproducto`)
const tablaDeProd = Document.getElementById(`tablaDeProd`)

añadirBoton.addEventListener(`click`, (e) => {
    e.preventDefault();

    const nombre = nombreDeProducto.value
    const precio = precioDeProducto.value
    const descripcion = descripcionDeProducto.value
    // const codigo = codigoDeProducto.value
    const producto = { nombre, precio, descripcion };
    productos.push(producto);
    // console.log(productos);
    localStorage.setItem(`productos`, JSON.stringify(productos));
    formulario.reset();
});