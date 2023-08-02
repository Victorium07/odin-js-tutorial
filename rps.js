function getComputerChoice() {
    let valueRPS = Math.floor(Math.random() * 10);
    if (valueRPS > 6) {return("rock")}
    else if (valueRPS < 6 && valueRPS > 3) {return("scissors")}
    else {return("paper")}
}

function getPlayerSelection() {
    let response = adjustWord(window.prompt("Pick your option! (Rock, paper or scissors)"));
    while (!responseCheck(response)) {
        response = window.prompt("Please select one of the three options: Rock, paper or scissors");
    }
}

function responseCheck(response) {
    if (response === "paper" || response === "rock" || response === "scissors") {
        return(true)
    }
    else {return(false)}
}

function adjustWord(word) {
    let adjustedWord = word.toLowerCase();
    return(adjustedWord);
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


for (let i = 0; i < repetitions; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();
    let gameResult = evaluateGame(computerSelection, playerSelection);
    alert(gameResult);
}
