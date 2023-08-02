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
    return(response);
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
    let compWinStatement = "You lose! " + comp + " beats " + player + "!";
    let playerWinStatement = "You win! " + player + " beats " + comp + "!";
    if (comp === player) {return("Draw")}
    else if (comp === "rock") {
        if (player === "scissors") {return(compWinStatement)}
        else {return(playerWinStatement)}
    }
    else if (comp === "scissors") {
        if (player === "paper") {return(compWinStatement)}
        else {return(playerWinStatement)}
    }
    else if (comp === "paper") {
        if (player === "rock") {return(compWinStatement)}
        else {return(playerWinStatement)}
    }
}

let repetitions = parseInt(window.prompt("How many times do you wanna play?"));


for (let i = 0; i < repetitions; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getPlayerSelection();
    let gameResult = evaluateGame(computerSelection, playerSelection);
    alert(gameResult);
}
