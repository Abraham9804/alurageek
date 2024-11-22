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


export const conexionApi = {
    listarProductos
} 