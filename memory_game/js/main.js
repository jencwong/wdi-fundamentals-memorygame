//console.log("Up and running!")

var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png",
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png", 
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png",
}
];

//Initialize array
var cardsInPlay = [];
var clickedCards = document.getElementsByClassName("clicked"); // for keeping track of which cards have been clicked, so we can turn them over
var score = 0; 
var scoreElement = document.querySelector('.score');
var resetButton = document.getElementById('resetButton');


//Check for match and display message
function checkForMatch(){
if(cardsInPlay.length % 2 === 0) {
	if(cardsInPlay[0] === cardsInPlay[1] || cardsInPlay[2] === cardsInPlay[3]){
		score += 1;
		alert("You found a match! Your score is" + " " + score);
		scoreElement.innerHTML = "You Score: " + score;
		} else {
		alert("Sorry, try again. Your score is" + " " + score);
		scoreElement.innerHTML =  "You Score: " + score;
		}
	};
};

//flips back cards after theyve been flipped, could be fixed - see comment in checkForMatch
function flipBack (){
	cardsInPlay = [];
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
};

function delayedFlipBack (){
	var timeoutID = window.setTimeout(flipBack, 800);
};

//When user clickc a card, it will flip and display the value
function flipCard (){
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	delayedFlipBack();
};
	console.log("User flipped" + " " + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
}


function createBoard (){
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	};
};

function resetGame() {
	cardsInPlay.length = 0;
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src','images/back.png');
};

createBoard();
resetButton.addEventListener('click', resetGame);

