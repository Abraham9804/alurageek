async function listarVideos(){
    try{
        const solicitudVideos = await fetch("http://localhost:3001/videos")
        if(!solicitudVideos.ok){
            throw new Error ("Error en la solicitud para listar videos")
        }
        const solicitudVideosJson = await solicitudVideos.json()
        console.log(solicitudVideosJson)
    }
    catch(error){
        console.log(error)
    }
} 