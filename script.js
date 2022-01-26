const nouns = ["smile", "eyes", "paper", "project"];
const verbs = ["amaze", "thrill", "thrive", "crush"];
const adjectives = ["lively", "dynamic", "playful", "brave", "pleasant"];

let n = Math.floor(Math.random() * (nouns.length-1));
let v = Math.floor(Math.random() * (verbs.length-1));
let a = Math.floor(Math.random() * (adjectives.length-1));

const phrases = [`Your ${nouns[n]} will be ${adjectives[a]} today!`, `You will ${verbs[v]} today!`, `Your ${nouns[n]} looks ${adjectives[a]} today.`]

let p = Math.floor(Math.random() * 3);

function randomPhrase() {
    //console.log(phrases[p]);
    return phrases[p]
};

htmlElement.addEventListener("click", randomPhrase());