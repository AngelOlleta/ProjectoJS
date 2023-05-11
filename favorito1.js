// cuando se pulsa en "agregar a favoritos"
const botonAgregar = document.getElementById("botonAgregar");
botonAgregar.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#productoNombre").textContent;
  const precio = document.getElementById("precioProducto").textContent;
  const imagen = document.getElementById("imagenProducto").src;
  // const favorito = document.getElementById("productosFavoritos");
  const productoFavoritoLS =
    JSON.parse(localStorage.getItem("favoritos")) || [];
  const productoAgregado = productoFavoritoLS.find(
    (favorito) => favorito.nombre === nombre
  );
  if (productoAgregado) {
    return alert("el producto ya fue marcado como favorito ");
  }
  productoFavoritoLS.push({
    nombre: nombre,
    precio: precio,
    imagen: imagen,
  });

  localStorage.setItem("favoritos", JSON.stringify(productoFavoritoLS));
  // alert("se agrego el producto a favoritos");
  swal("¡Genial! ", "¡Se agrego a favoritos! ", "success");

  productoFavoritoLS.innerHTML = "Favorito: ${productoFavoritoLS}";
});
const botonAgregar2 = document.getElementById("botonAgregar2");
botonAgregar2.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#productoNombre2").textContent;
  const precio = document.getElementById("precioProducto2").textContent;
  const imagen = document.getElementById("imagenProducto2").src;
  // const favorito = document.getElementById("productosFavoritos");
  const productoFavoritoLS =
    JSON.parse(localStorage.getItem("favoritos")) || [];
  const productoAgregado = productoFavoritoLS.find(
    (favorito) => favorito.nombre === nombre
  );
  if (productoAgregado) {
    return alert("el producto ya fue marcado como favorito ");
  }
  productoFavoritoLS.push({
    nombre: nombre,
    precio: precio,
    imagen: imagen,
  });

  localStorage.setItem("favoritos", JSON.stringify(productoFavoritoLS));
  // alert("se agrego el producto a favoritos");
  swal("¡Genial! ", "¡Se agrego a favoritos! ", "success");

  productoFavoritoLS.innerHTML = "Favorito: ${productoFavoritoLS}";
});
const botonAgregar3 = document.getElementById("botonAgregar3");
botonAgregar3.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#productoNombre3").textContent;
  const precio = document.getElementById("precioProducto3").textContent;
  const imagen = document.getElementById("imagenProducto3").src;
  // const favorito = document.getElementById("productosFavoritos");
  const productoFavoritoLS =
    JSON.parse(localStorage.getItem("favoritos")) || [];
  const productoAgregado = productoFavoritoLS.find(
    (favorito) => favorito.nombre === nombre
  );
  if (productoAgregado) {
    return alert("el producto ya fue marcado como favorito ");
  }
  productoFavoritoLS.push({
    nombre: nombre,
    precio: precio,
    imagen: imagen,
  });

  localStorage.setItem("favoritos", JSON.stringify(productoFavoritoLS));
  // alert("se agrego el producto a favoritos");
  swal("¡Genial! ", "¡Se agrego a favoritos! ", "success");

  productoFavoritoLS.innerHTML = "Favorito: ${productoFavoritoLS}";
});

const botonAgregar4 = document.getElementById("botonAgregar4");
botonAgregar4.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#productoNombre4").textContent;
  const precio = document.getElementById("precioProducto4").textContent;
  const imagen = document.getElementById("imagenProducto4").src;
  // const favorito = document.getElementById("productosFavoritos");
  const productoFavoritoLS =
    JSON.parse(localStorage.getItem("favoritos")) || [];
  const productoAgregado = productoFavoritoLS.find(
    (favorito) => favorito.nombre === nombre
  );
  if (productoAgregado) {
    return alert("el producto ya fue marcado como favorito ");
  }
  productoFavoritoLS.push({
    nombre: nombre,
    precio: precio,
    imagen: imagen,
  });

  localStorage.setItem("favoritos", JSON.stringify(productoFavoritoLS));
  // alert("se agrego el producto a favoritos");
  swal("¡Genial! ", "¡Se agrego a favoritos! ", "success");

  productoFavoritoLS.innerHTML = "Favorito: ${productoFavoritoLS}";
});