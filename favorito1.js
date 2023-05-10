// cuando se pulsa en "agregar a favoritos"

const agregarFavoritos = document.querySelector("#agregar-favoritos")
agregarFavoritos.addEventListener("submit",(e)=> {
    e.preventDefault()
    let datos = {

        nombre: document.getElementById("producto-nombre").value,
        precio: document.getElementById("precioProducto").value,
        imagen: document.getElementById("imagenProducto").value,
      };
    // hacemos que no se ejecute el enlace
    
    const nombreProducto = document.querySelector("#producto-nombre").value;
    const precioProducto = document.querySelector("#precioProducto").value;
    const imagenProducto = document.querySelector("#imagenProducto").value;
    
    const Favoritos = JSON.parse(localStorage.getItem("favoritos")) || "[]";
    // const productoAgregado = Favoritos.find((favorito) => favorito.nombreProducto === nombreProducto)

    // if(productoAgregado){
    //     return alert("El producto ya esta agregado")
        
    // }else{
    // }
    Favoritos.push(datos)

    

     // guardamos la lista de favoritos 
     localStorage.setItem("favs", JSON.stringify(Favoritos));
  
    });

    


  
    // leemos los datos clave del producto y los guardamos en un objeto
    /*let datos = {

      nombre: document.getElementById("producto-nombre").value,
      precio: document.getElementById("precioProducto").value,
      imagen: document.getElementById("imagenProducto").value,
    };*/
  
    // leemos los favoritos del localStorage
    //let favoritos = JSON.parse(localStorage.getItem("favoritos")) || "[]";
     
    // buscamos el producto en la lista de favoritos
    /*      const posLista = favoritos.findIndex(function(e) { return e.nombre === datos.nombre; });
    if (posLista > -1) {
      // si está, lo quitamos
      favoritos.splice(posLista, 1);
    } else {
      // si no está, lo añadimos
      favoritos.push(datos);
    } */
  
   