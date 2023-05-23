let userAdmin = {
  name: "admin",
  email: "admin@gmail.com",
  password: "administrador",
};
const productoFavoritoLS = JSON.parse(localStorage.getItem("favoritos")) || [];
let usuarioLogueado =
  JSON.parse(localStorage.getItem("usuario_logueado")) || false;
let user = JSON.parse(localStorage.getItem("user")) || "";

const cards = document.querySelector(".card-producto");
// let favsProductos = JSON.parse(localStorage.getItem("favoritos")) || [];
const contFav = document.querySelector(".contFav");
contFav.innerHTML = productoFavoritoLS.length;
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
  if (user.name === userAdmin.name) {
    linkAdmin.className = "nav-item";

    btnDeslogueo.className = "";
    contFav.className = "d-none";
    btnLogueo.innerHTML = user.name;
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

productoFavoritoLS.map((info) => {
  cards.innerHTML += `
  <div class="col-md-6 col-lg-3">
    <div class="card h-50">
      <a href="./infoProducto.html">
        <img
          src="${info.imagen}"
          class="card-img-top "
          alt="${info.nombre}"
        />
      </a>
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <h5 >${info.nombre}</h5>
          
          <a onclick="eliminarFavorito(${info.id})" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="corazon"
              width="25"
              height="25"
              fill="secundaryColor"
              class="bi bi-suit-heart p-1 botonAgregar"
              type="submit"
              viewBox="0 0 16 16"
            >
              <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z" />
            </svg>
          </a>
          
        </div>
        <p >${info.precio}</p>
      </div>
    </div>
  </div>
  `;
});

const eliminarFavorito = (id) => {
  // console.log(id);

  let favsProductos = JSON.parse(localStorage.getItem("favoritos")) || [];

  // const productoSeleccionado = productos.find((producto) => producto.id === id);

  const isfav = favsProductos.find((fav) => fav.id === id);

  if (isfav) {
    favsProductos = favsProductos.filter((elimino) => elimino.id !== id);
    swal("Oh no!", "Se elimino de favoritos!", "info");
  }
  localStorage.setItem("favoritos", JSON.stringify(favsProductos));
  contFav.innerHTML = productoFavoritoLS.length;
  setTimeout(() => {
    window.location.reload();
  }, 3000);
  // console.log(favsProductos);
};
