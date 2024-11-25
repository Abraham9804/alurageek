async function listarProductos(){
    try{
        const solicitudVideos = await fetch("http://localhost:3001/productos")
        if(!solicitudVideos.ok){
            throw new Error ("Error en la solicitud para listar videos")
        }
        const solicitudVideosJson = await solicitudVideos.json()
        return solicitudVideosJson
    }
    catch(error){
        console.log(error)
    }
} 


async function enviarProducto(nombre, precio, imagen){
        const solicitudCrear = await fetch("http://localhost:3001/productos",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                nombre, precio, imagen
            })
        })
        if(!solicitudCrear.ok){
            throw new Error ("Error al enviar el producto para crear")
        }
    
}

async function solicitudEliminar(id){
    const fetchEliminar = await fetch(`http://localhost:3001/productos/${id}`,{
        method:"DELETE"
    })
    if(!solicitudEliminar.ok){
        throw new Error("Error en la solicitud para eliminar")
    }
    const fetchEliminarJson = fetchEliminar.json()
   console.log(fetchEliminarJson)

}

export const conexionApi = {
    listarProductos, enviarProducto, solicitudEliminar
} 