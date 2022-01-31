
//html elements
const msgButton = document.getElementById('msgButton')
const messageWindow = document.getElementById('message')
let nouns = []
let verbs = []
let adjectives = []
loadData()

// load data JSON file
async function loadData() {
	fetch('./data.json')
		.then(resp => resp.json())
		.then(data => {
			data.map(datum => {
				if (datum.noun) nouns.push(datum.noun)
				if (datum.verb) verbs.push(datum.verb)
				if (datum.adjective) adjectives.push(datum.adjective)
			})
		})
}

// For message & button animation
function buttonDisappears() {
	msgButton.style.animation = 'fadeOut 0.7s ease-in 0s'
	setTimeout(() => {
		msgButton.style.display = 'none'
	}, 700)
	setTimeout(() => {
		displayMessage()
	}, 1500)
	return
}

function displayMessage() {
	messageWindow.style.display = 'flex'
	messageWindow.style.animation = 'fadeIn 1s ease-in 0s'
	let n = Math.floor(Math.random() * nouns.length)
	let v = Math.floor(Math.random() * verbs.length)
	let a = Math.floor(Math.random() * adjectives.length)

	const phrases = [
		`Your ${nouns[n]} will be ${adjectives[a]} today!`,
		`You will ${verbs[v]} today!`,
		`Your ${nouns[n]} looks ${adjectives[a]} today.`,
	]

	let p = Math.floor(Math.random() * 3)
	messageWindow.innerHTML = `<p>${phrases[p]}</p>`
}