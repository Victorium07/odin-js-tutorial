function getComputerChoice() {
    let valueRPS = Math.floor(Math.random() * 10);
    if (valueRPS > 6) {return("rock")}
    else if (valueRPS < 6 && valueRPS > 3) {return("scissors")}
    else {return("paper")}
}

function adjustWord(word) {
    let adjustedWord = word.toLowerCase();
    return(adjustedWord)
}

let repetitions = parseInt(window.prompt("How many times do you wanna play?"));
let playerSelection = adjustWord(window.prompt("Pick your option! (Rock, paper or scissors)"));

for (let i = 0; i < repetitions; i++) {alert(getComputerChoice())}

