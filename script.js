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
