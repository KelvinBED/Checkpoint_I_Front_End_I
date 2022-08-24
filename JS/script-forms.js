let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
   event.preventDefault()

   console.log('formulario enviado');
   let tituloMoto = formulario["titulo-moto"].value
   let descricao = formulario["desc"].value
   let imagem = formulario["img-perfil"].value
   let modelo = formulario["modelo"].value
   let cilindradas = formulario["cilindradas"].value
   console.log(tituloMoto)
   console.log(descricao)
   console.log(imagem)
   console.log(modelo)
   console.log(cilindradas)
   
})

let enviar = document.getElementById('send');
enviar.onclick = function fechar(){
    modal.style.display = "none";
}

