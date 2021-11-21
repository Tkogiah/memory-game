function log(a) {
    console.log(a)
}

const display = document.getElementById('display')
let cardArray = new Array()

function fillArray(array) {
    for(let i = 0; i < 12; i++) {
        array[i] = new Image()
    }
    cardArray[0].src = 'images/abra.png'
    cardArray[1].src = 'images/abra.png'
    cardArray[2].src = 'images/squirtle.png'
    cardArray[3].src = 'images/squirtle.png'
    cardArray[4].src = 'images/charmander.png'
    cardArray[5].src = 'images/charmander.png'
    cardArray[6].src = 'images/bulbasaur.png'
    cardArray[7].src = 'images/bulbasaur.png'
    cardArray[8].src = 'images/pikachu.png'
    cardArray[9].src = 'images/pikachu.png'
    cardArray[10].src = 'images/dratini.png'
    cardArray[11].src = 'images/dratini.png'
}
fillArray(cardArray)
//HERE HERE HERE
function createDisplay() {
    for(let i = 0; i < 12; i++) {
        let card = document.createElement('img')
        card.src = cardArray[i].src
        card.id = i
        card.classList.add('pokeball-bkimg')
        display.appendChild(card)
        card.addEventListener('click', function() {
            log(`hello from the ${i} card!`)
            card.classList.remove('pokeball-bkimg')
        })
    }
}
createDisplay()


//set random