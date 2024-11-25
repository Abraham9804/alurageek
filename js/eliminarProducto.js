import { conexionApi } from "./conexion.js";

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.querySelector(".list__products")
  lista.addEventListener("click",async(event)=>{
    if(event.target.classList.contains("fa-trash")){
      const idProducto = event.target.closest(".price__container").querySelector("input[type='hidden']").id
      console.log("producto a eliminar: "+idProducto)

      try{
        await conexionApi.solicitudEliminar(idProducto)
        event.target.closest("li").remove()
      }
      catch(err){
        alert("Ocurrio un error: "+err)
      }
    }
  })
});
