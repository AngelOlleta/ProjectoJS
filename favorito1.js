localStorage.setItem("favorito", "añadir favorito")

const nombre=document.querySelector("#productoNombre").textContent;
const precio=document.getElementById("precioProducto").textContent;
const imagen= document.getElementById("imagenProducto").src;
const botonagregar=document.getElementById("agregar-favoritos");
const favorito=document.getElementById("productosFavoritos");


// cuando se pulsa en "agregar a favoritos"
botonagregar.addEventListener("click",(e)=>{
  e.preventDefault();
  swal ( "¡Genial! " , "¡Se agrego a favoritos! " , "success" );

let producto=[nombre,precio,imagen]

 localStorage.setItem("favorito:",producto,)
 const productoFavoritoLS=localStorage.getItem("favorito");
 productoFavoritoLS.innerHTML="Favorito: ${productoFavoritoLS}";
})

 






// producto.forEach((producto) => {
//   producto.addEventListener('click', (evento) => {
//     evento.preventDefault();
//     const nuevoFavorito = document.createElement('li');
//     nuevoFavorito.innerHTML = evento.target.innerHTML;
//     listaFavoritos.appendChild(nuevoFavorito);
//   });
// });

// function actualizarFavoritos() {
//   const favoritos = Array.from(listaFavoritos.children).map((li) => li.innerHTML);
//   localStorage.setItem('favoritos', JSON.stringify(favoritos));
// }

// function cargarFavoritos() {
//   const favoritos = JSON.parse(localStorage.getItem('favoritos'));
//   if (favoritos) {
//     favoritos.forEach((favorito) => {
//       const nuevoFavorito = document.createElement('li');
//       nuevoFavorito.innerHTML = favorito;
//       listaFavoritos.appendChild(nuevoFavorito);
//     });
//   }
// }

// cargarFavoritos();


// //const favoritos = (localStorage.getItem("favoritos")) || "[]";




// // // cuando se pulsa en "agregar a favoritos"

// // const agregarFavoritos = document.querySelector("#agregar-favoritos")
// // agregarFavoritos.addEventListener("submit",(e)=> {
// //     e.preventDefault()
// //     let datos = {

// //         nombre: document.getElementById("productoNombre").value,
// //         precio: document.getElementById("precioProducto").value,
// //         imagen: document.getElementById("imagenProducto").value,
// //       };
// //     // hacemos que no se ejecute el enlace
    
// //     const nombreProducto = document.querySelector("#producto-nombre").value;
// //     const precioProducto = document.querySelector("#precioProducto").value;
// //     const imagenProducto = document.querySelector("#imagenProducto").value;
    
// //     const Favoritos = JSON.parse(localStorage.getItem("favoritos")) || "[]";
// //     // const productoAgregado = Favoritos.find((favorito) => favorito.nombreProducto === nombreProducto)

// //     // if(productoAgregado){
// //     //     return alert("El producto ya esta agregado")
        
// //     // }else{
// //     // }
// //     Favoritos.push(datos)

    

// //      // guardamos la lista de favoritos 
// //      localStorage.setItem("favs", JSON.stringify(Favoritos));
  
// //     });

    


  
// //     // leemos los datos clave del producto y los guardamos en un objeto
// //     /*let datos = {

// //       nombre: document.getElementById("producto-nombre").value,
// //       precio: document.getElementById("precioProducto").value,
// //       imagen: document.getElementById("imagenProducto").value,
// //     };*/
  
// //     // leemos los favoritos del localStorage
// //     //let favoritos = JSON.parse(localStorage.getItem("favoritos")) || "[]";
     
// //     // buscamos el producto en la lista de favoritos
// //     /*      const posLista = favoritos.findIndex(function(e) { return e.nombre === datos.nombre; });
// //     if (posLista > -1) {
// //       // si está, lo quitamos
// //       favoritos.splice(posLista, 1);
// //     } else {
// //       // si no está, lo añadimos
// //       favoritos.push(datos);
// //     } */
  
   