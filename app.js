const cardArr = [ 
    { name: 'apple', img: 'pics/apple.png'},
    { name: 'apple', img: 'pics/apple.png'},
    {name: 'banana', img: 'pics/banana.png'},
    {name: 'banana', img: 'pics/banana.png'},
    {name: 'cherry', img: 'pics/cherry.png'},
    {name: 'cherry', img: 'pics/cherry.png'},
    {name: 'pineapple', img: 'pics/pineapple.png'},
    {name: 'pineapple', img: 'pics/pineapple.png'},
    {name: 'orange', img: 'pics/orange.png'},
    {name: 'orange', img: 'pics/orange.png'},
    {name: 'watermelon', img: 'pics/watermelon.png'},
    {name: 'watermelon', img: 'pics/watermelon.png'}
]

cardArr.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const showResults = document.querySelector('#result')
var chosenCards = []
var chosenCardsId = []
var cardsWon = []

function gameBoard() {
    for(let i=0; i < cardArr.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src', 'pics/front.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function match() {
    const cards = document.querySelectorAll('img')
    const card1Id = chosenCardsId[0]
    const card2Id = chosenCardsId[1]
    if (chosenCards[0] === chosenCards[1]){
        cards[card1Id].setAttribute('src', 'pics/blank.png')
        cards[card2Id].setAttribute('src', 'pics/blank.png')
        cardsWon.push(chosenCards)
    } else {
        cards[card1Id].setAttribute('src', 'pics/front.png')
        cards[card2Id].setAttribute('src', 'pics/front.png')
    }
    chosenCards = []
    chosenCardsId = []
    showResults.textContent = cardsWon.length
    if (cardsWon.length === cardArr.length/2){
        showResults.textContent = ' 💯 Well done, you captured all the fruits. Smoothie Time! 🍹'
        const gif = document.createElement('img')
        gif.id = "gif"
        gif.setAttribute('src', 'pics/catninja.gif')
        grid.parentNode.replaceChild(gif, grid)
    }
}

function flipCard() {
    const cardId = this.getAttribute('data-id')
    chosenCards.push(cardArr[cardId].name)
    chosenCardsId.push(cardId)
    this.setAttribute('src', cardArr[cardId].img)
    if (chosenCards.length === 2){
        setTimeout(match, 500)
    }
}

gameBoard()












