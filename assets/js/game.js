let grid = document.querySelector('.grid')
let spanPlayer = document.querySelector('.player')
let spanTimer = document.querySelector('.timer')

let characters = [
  'card1',
  'card2',
  'card3',
  'card4',
  'card5',
  'card6',
  'card7',
  'card8',
  'card9',
  'card10' 
]

let createElement = (tag, className) =>{
    let element = document.createElement(tag)
    element.className = className
    return element;
}

let firstCard = ''
let secondCard = ''

let checkEndGame = ()=>{
    let disabledCards = document.querySelectorAll('.disabled-card')

    if(disabledCards.length === 20){
        clearInterval(this.loop)
        alert(`Parabéns ${spanPlayer.innerHTML}! seu tempo: ${spanTimer.innerHTML}`)
    }
}

let checkCards = () =>{
    let firstCharacter = firstCard.getAttribute('data-character')
    let secondCharacter = secondCard.getAttribute('data-character')

    if(firstCharacter === secondCharacter){

        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

         firstCard = ''
         secondCard = ''

         checkEndGame()

    }else{

        setTimeout(() =>{
            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''
        }, 500)
    }
}

 let revealCard = ({target}) =>{
    if(target.parentNode.className.includes('reveal-card')){
        return;
    }

    if(firstCard === ''){
        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
    } else if(secondCard === ''){
        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()
    }

    
 }

let createCard = (character) => {
    let card = createElement('div', 'card')
    let front = createElement('div', 'face front')
    let back = createElement('div', 'face back')

    front.style.backgroundImage = `url(/assets/img/${character}.jpg)`

    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)
    card.setAttribute('data-character', character)

    return card;
}

let loadGame = () =>{

    let duplicateCaracters = [... characters, ... characters]

    let shuffledArray = duplicateCaracters.sort(() => Math.random() - 0.5)

    shuffledArray.forEach((character)=>{
        
        let card = createCard(character)
        grid.appendChild(card)
    })
}

// o sinal de + tenta converter a string spantimer pra numero.

let startTimer = () => {
  this.loop =  setInterval(() =>{

        let currentTime = +spanTimer.innerHTML
        spanTimer.innerHTML = currentTime + 1

    }, 1000)
}

window.onload = () =>{

    spanPlayer.innerHTML = localStorage.getItem('player')

    startTimer()
    loadGame()
}

function sair(){
    window.location.href = '/index.html'
} 
