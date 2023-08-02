function getComputerChoice() {
    let valueRPS = Math.floor(Math.random() * 10);
    if (valueRPS > 6) {return("rock")}
    else if (valueRPS < 6 && valueRPS > 3) {return("scissors")}
    else {return("paper")}
}

function getPlayerSelection() {window.prompt("Pick your option! (Rock, paper or scissors)")}

function adjustWord(word) {
    let adjustedWord = word.toLowerCase();
    return(adjustedWord)
}

function evaluateGame(comp, player) {
    if (comp === player) {return("Draw")}
    else if (comp === "rock") {
        if (player === "scissors") {return("Computer wins!")}
        else {return("Player wins!")}
    }
    else if (comp === "scissors") {
        if (player === "paper") {return("Computer wins!")}
        else {return("Player wins!")}
    }
    else if (comp === "paper") {
        if (player === "rock") {return("Computer wins!")}
        else {return("Player wins!")}
    }
}

let repetitions = parseInt(window.prompt("How many times do you wanna play?"));
let computerSelection = getComputerChoice();
let playerSelection = adjustWord(getPlayerSelection());
let gameResult = evaluateGame(computerSelection, playerSelection);

for (let i = 0; i < repetitions; i++) {alert(getComputerChoice())}
