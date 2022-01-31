//html elements
const msgButton = document.getElementById('msgButton')
const messageWindow =  document.getElementById('message')


// load data JSON file
const data = require('./data.json')
// push nouns, verbs and adjectives
// into their own arrays
const nouns = []
const verbs = []
const adjectives = []
data.map(datum => {
	if (datum.noun) nouns.push(datum.noun)
	if (datum.verb) verbs.push(datum.verb)
	if (datum.adjective) adjectives.push(datum.adjective)
})
console.log(nouns)
console.log(verbs)
console.log(adjectives)


// For message & button animation 
function buttonDisappears() {
    msgButton.style.animation = 'fadeOut 0.7s ease-in 0s'
    setTimeout(() => {
        msgButton.style.display = 'none';
    }, 700)
    setTimeout(() => {
        displayMessage();
    }, 1500)
	return;
}

function displayMessage() {    
    messageWindow.style.display = 'flex';
    messageWindow.style.animation ='fadeIn 1s ease-in 0s';
    
}