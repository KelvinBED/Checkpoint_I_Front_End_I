let formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
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
  function insereCard() {
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

let dados = [
  { nome: "Ninja 400", marca: "Kawasaki", urlImg: "https://content2.kawasaki.com/ContentStorage/KMB/Products/5444/f68ae52b-446f-430e-ae5e-85e24f8b1985.png?w=767", modelo: "Sport", descricao: "Media cilindrada" },
  { nome: "NINJA ZX-6R", marca: "Kawasaki", urlImg: "https://content2.kawasaki.com/ContentStorage/KMB/ProductTrimGroup/32/2c8805b2-e2e4-4651-8c87-1dbd123cd689.jpg?w=750", modelo: "Sport", descricao: "NINJA ZX-6R KRT EDITION 636cc" },
  { nome: "NINJA 650 KRT EDITION", marca: "Kawasaki", urlImg: "https://content2.kawasaki.com/ContentStorage/KMB/Products/5435/e90e5683-bd33-4653-a4ab-63962e898571.jpg", modelo: "Sport", descricao: "NINJA 650 KRT EDITION 650cc" },
  { nome: "Z1000 UNLEASH", marca: "Kawasaki", urlImg: "https://content2.kawasaki.com/ContentStorage/KMB/Products/5447/9295dc8f-2de4-48c2-97b1-dc76297d939a.jpg", modelo: "Naked", descricao: "Quatro cilindros em linha com refrigeração líquida, 4 tempos" },
  { nome: "VULCAN S CAFE", marca: "Kawasaki", urlImg: "https://content2.kawasaki.com/ContentStorage/KMB/Products/5453/d9506bf6-6ee9-44c1-b574-43d195332270.png?w=675", modelo: "Cruiser", descricao: "VULCAN S CAFE BOLD BY DESIGN" },
  { nome: "S 1000 RR", marca: "BMW", urlImg: "https://portallubes.com.br/wp-content/uploads/2020/03/nova-bmw-s1000rr-2020-preco-01-600x400-1.jpg", modelo: "Sport", descricao: "1000cc" },
  { nome: "Daytona 675", marca: "Triumph", urlImg: "https://http2.mlstatic.com/D_NQ_NP_948260-MLB26249080546_102017-O.jpg", modelo: "Sport", descricao: "DAYTONA 675 R 2015 PRETA" },

];

function sortearDados(){
  min = Math.ceil(1);
  max = Math.floor(dados.length);

  let numeroSorteado = Math.floor(Math.random() * (max - min) + min);



  formulario["titulo-moto"].value = dados[numeroSorteado].nome
  formulario["marca"].value = dados[numeroSorteado].marca
  formulario["img-perfil"].value = dados[numeroSorteado].urlImg
  formulario["modelo"].value = dados[numeroSorteado].modelo
  formulario["desc"].value = dados[numeroSorteado].descricao

}


let enviar = document.getElementById('send');
enviar.onclick = function fechar() {
  modal.style.display = "none";
}