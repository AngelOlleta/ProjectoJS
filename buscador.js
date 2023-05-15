//Buscador de contenido

//Ejecutando funciones
document.getElementById("busqueda").addEventListener("click", mostrar_buscador);
document
  .getElementById("ocultarBusqueda")
  .addEventListener("click", ocultar_buscador);

//Declarando variables
bars_search = document.getElementById("barraBusqueda");
ocultarBusqueda = document.getElementById("ocultarBusqueda");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");

//Funcion para mostrar el buscador
function mostrar_buscador() {
  bars_search.style.top = "0px";
  ocultarBusqueda.style.display = "block";
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";
  }
}

//Funcion para ocultar el buscador
function ocultar_buscador() {
  bars_search.style.top = "0px";
  ocultarBusqueda.style.display = "none";
  inputSearch.value = "";
  box_search.style.display = "none";
}

//Creando filtrado de busqueda

document
  .getElementById("inputSearch")
  .addEventListener("keyup", buscador_interno);

function buscador_interno() {
  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");

  //Recorriendo elementos a filtrar mediante los "li"
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;

    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";

      if (inputSearch.value === "") {
        box_search.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}