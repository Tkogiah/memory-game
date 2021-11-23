function log(a) {
    console.log(a)
}

const score = document.getElementById('score')
const display = document.getElementById('display')
const refresh = document.getElementById('refresh')
let cardDeck = new Array()

function fillArray(array) {
    for(let i = 0; i < 12; i++) {
        array[i] = new Image()
    }
    array[0].src = 'images/abra.png'
    array[1].src = 'images/abra.png'
    array[2].src = 'images/squirtle.png'
    array[3].src = 'images/squirtle.png'
    array[4].src = 'images/charmander.png'
    array[5].src = 'images/charmander.png'
    array[6].src = 'images/bulbasaur.png'
    array[7].src = 'images/bulbasaur.png'
    array[8].src = 'images/pikachu.png'
    array[9].src = 'images/pikachu.png'
    array[10].src = 'images/dratini.png'
    array[11].src = 'images/dratini.png'

}
fillArray(cardDeck)

function shuffledDeck(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
}

shuffledDeck(cardDeck)
const currentCards = []
let counter = 0
let totalScore = 0

//HERE HERE HERE
function createDisplay() {
    for(let i = 0; i < 12; i++) {
        let cardDiv = document.createElement('div')
        let cardFront = document.createElement('img')
        cardFront.src = cardDeck[i].src
        cardFront.id = i
        cardFront.classList.add('hidden')
        cardFront.classList.add('card-front')
        let cardBack = document.createElement('img')
        cardBack.src = '/images/pokeball.png'
        cardBack.classList.add('card-back')
        display.appendChild(cardDiv)
        cardDiv.appendChild(cardBack)
        cardDiv.appendChild(cardFront)
        cardBack.addEventListener('click', function() {
            if(counter <= 1) {
                counter = counter + 1
                currentCards.push(cardFront)
                currentCards.push(cardBack)
                cardFront.classList.remove('hidden')
                cardBack.classList.add('hidden')
            }
            if(counter == 2 && currentCards[0].src == currentCards[2].src) {
                totalScore = totalScore + 10;
                score.innerHTML = `SCORE ${totalScore}`
                counter = 0
                currentCards.pop()
                currentCards.pop()
                currentCards.pop()
                currentCards.pop()
            }
            if(counter == 2 && currentCards[0].src != currentCards[2].src) {
                totalScore = totalScore - 5
                score.innerHTML = `SCORE ${totalScore}`
                setTimeout(function() {
                    counter = 0
                    currentCards[0].classList.add('hidden')
                    currentCards[1].classList.remove('hidden')
                    currentCards[2].classList.add('hidden')
                    currentCards[3].classList.remove('hidden')
                    currentCards.pop()
                    currentCards.pop()
                    currentCards.pop()
                    currentCards.pop()
                  }, 1000);
                
            }
        })
    }
}
createDisplay()

refresh.addEventListener('click', function() {
    window.location.reload()
})