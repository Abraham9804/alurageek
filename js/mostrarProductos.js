import { conexionApi } from "./conexion.js";

const lista = document.querySelector(".list__products")

function crearProducto(nombre, precio, imagen){
    const producto = document.createElement("li")
    producto.innerHTML = `<img class="img__products" src="${imagen}">
                            <p class="name_product">${nombre}</p>
                            <div class="price__container">
                                <p class="price__product">${precio}</p> <i class="fa-solid fa-trash"></i>
                            </div>`
    return producto
}

async function mostrarProducto(){
    try{
        const listaProductos = await conexionApi.listarProductos(); 
        listaProductos.forEach(producto => {
            lista.appendChild(crearProducto(producto.nombre, producto.precio, producto.imagen))
        });
    }
    catch(error){
        console.log("Error al mostrar el producto")
    }
}

mostrarProducto()