import { conexionApi } from "./conexion.js"

const form = document.querySelector("#form__create")

form.addEventListener("submit", e => crearProducto(e))

async function crearProducto(e){
    e.preventDefault()
    const nombre = form.querySelector("#nombre").value
    const precio = form.querySelector("#precio").value
    const imagen = form.querySelector("#imagen").value

    try{
        await conexionApi.enviarProducto(nombre, precio, imagen)
        window.location.reload()
    }
    catch(err){
        alert("Error al guardar el producto "+err)
    }
}