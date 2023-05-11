const productoFavoritoLS = JSON.parse(localStorage.getItem("favoritos"));
console.log(productoFavoritoLS);

// En tu JavaScript, accede a los datos almacenados en localStorage

// Verifica si hay datos almacenados antes de intentar mostrarlos
if (productoFavoritoLS) {
  // Si hay datos almacenados, conviértelos de cadena JSON a un objeto JavaScript

  // Actualiza el contenido del elemento HTML para mostrar los datos
  document.getElementById("productos").innerHTML =
    "Los datos almacenados son: " + productoFavoritoLS;
} else {
  // Si no hay datos almacenados, muestra un mensaje de error en el elemento HTML
  document.getElementById("productos").innerHTML =
    "No se encontraron datos almacenados.";
}