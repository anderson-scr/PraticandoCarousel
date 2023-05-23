// Import dos elementos
import { usersList } from './usersList.js'
import { buildCard } from './buildCard.js'

// Seleciona o container onde vai cada card, card selecionado atual e quantidade maxima
let listaDeTodosCards
let indexCardAtual = 0
const maxIndex = usersList.length - 1
const containerCards = document.querySelector(".containerCarousel")


window.addEventListener("DOMContentLoaded", () => {
  preencheCarousel()
})

function preencheCarousel() {
  usersList.forEach((userCard, index) => {
    containerCards.innerHTML += buildCard(
      userCard.img, 
      userCard.name,
      userCard.bio,
      index
    )

    preencheListaDeElementosCards()

    // Podemos passar 0 pois é no carregamento da pagina, entao o primeiro deve ser selecionado
    atualizaClasseAtual(indexCardAtual)
  })
}

function atualizaClasseAtual(index) {
  listaDeTodosCards.forEach(card => {
    card.classList.remove("selected")
  })

  listaDeTodosCards[index].classList.add("selected")
  indexCardAtual = index
}

// Depois que adiciona os elementos na tela chama a funcao de salvar uma lista deles
function preencheListaDeElementosCards() {
  listaDeTodosCards = document.querySelectorAll(".containerCard")
}

function alinhaElementoNoCentro() {
  listaDeTodosCards[indexCardAtual].scrollIntoView({
    inline: "center",
    behavior: "smooth"
  })
}


// Adiciona a funcao do arrow Left
document.querySelector(".arrowLeft").addEventListener("click", () => {
  if(indexCardAtual == 0) {
    indexCardAtual = maxIndex
  } else {
    indexCardAtual -= 1
  }
  
  atualizaClasseAtual(indexCardAtual)
  alinhaElementoNoCentro()
  console.log(indexCardAtual)
})

// Adiciona a funcao do arrow right
document.querySelector(".arrowRight").addEventListener("click", () => {
  if(indexCardAtual == maxIndex) {
    indexCardAtual = 0
  } else {
    indexCardAtual += 1
  }

  atualizaClasseAtual(indexCardAtual)
  alinhaElementoNoCentro()
  console.log(indexCardAtual)
})