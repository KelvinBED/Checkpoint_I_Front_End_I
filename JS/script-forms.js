let formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
   event.preventDefault()

   let addCard = document.getElementById('cards')

   console.log('formulario enviado');

   let tituloMoto = formulario["titulo-moto"].value
   let marca = formulario["marca"].value
   let imagem = formulario["img-perfil"].value
   let modelo = formulario["modelo"].value
   let descricao = formulario["desc"].value
   console.log(tituloMoto)
   console.log(marca)
   console.log(imagem)
   console.log(modelo)
   console.log('essa é a descrição +++ === ' + descricao)

    //funcção que insere o nome da moto
    function insereCard (){
     console.log('aqui estão os values dos inputs ' + tituloMoto, descricao, imagem, modelo, marca)
        //add novo card
    let newCard = document.createElement('div')
    newCard.classList.add('card')

    addCard.appendChild(newCard)

      // add modelo moto
    let modeloMoto = document.createElement('h2')
    modeloMoto.setAttribute('class', 'motorcycle-model')

    newCard.appendChild(modeloMoto)

    let modeloMototxt = document.createTextNode(modelo)
    modeloMoto.appendChild(modeloMototxt)

      //add imagem ao card
    let cardImagem = document.createElement('div')
    cardImagem.classList.add('img')
    
    newCard.appendChild(cardImagem)
    
    let imagemMoto = document.createElement('img')
    imagemMoto.setAttribute('id', 'img-moto')
    imagemMoto.src = imagem
    
    cardImagem.appendChild(imagemMoto)

         //add div details
    let descMoto = document.createElement('div')
    descMoto.classList.add('card-datails')

    newCard.appendChild(descMoto)

     //add titulo(nome da moto) ao card
    let titulo = document.createElement('h4')
    titulo.classList.add('motorcycle-name')

    descMoto.appendChild(titulo)

    let tituloNome = document.createTextNode(tituloMoto)

    titulo.appendChild(tituloNome)

      //add marca da moto
    let marcaMoto = document.createElement('p')
    marcaMoto.setAttribute('class', 'motorcycle-brand')
      
    descMoto.appendChild(marcaMoto)

    let marcaMototxt = document.createTextNode(marca)
    marcaMoto.appendChild(marcaMototxt)

      //add descrição moto

    let descricaoMoto = document.createElement('p')
    descricaoMoto.setAttribute('class', 'descricao')
      
    descMoto.appendChild(descricaoMoto)

     let descMotoTxt = document.createTextNode(descricao)
     descricaoMoto.appendChild(descMotoTxt)

     }

    insereCard()
    
})

let enviar = document.getElementById('send');
enviar.onclick = function fechar(){
    modal.style.display = "none";
}