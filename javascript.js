function getComputerChoice(max) {
    return Math.floor(Math.random() * max);
}

function getHumanChoice() {
    do {
        x = parseInt(prompt("Please choose 1=Rock, 2=Paper, 3=Scissors"));
        if (x < 1 || x > 3) (
            alert("Please enter a valid number!")
        )
    }
    while (x < 1 || x > 3)
    return x - 1
}

let humanScore = 0;
let computerScore = 0;
// console.log(humanScore, computerScore);

function playRound(humanChoice, computerChoice) {
    switch(true) {
        case (humanChoice == 0 && computerChoice == 2
            || humanChoice == 1 && computerChoice == 0
            || humanChoice == 2 && computerChoice == 1):
            console.log("Human wins!" + ++humanScore);
            break;
        case (humanChoice == 0 && computerChoice == 2
            || humanChoice == 1 && computerChoice == 0
            || humanChoice == 2 && computerChoice == 1):
            console.log("Computer wins!" + ++computerScore);
            break;
        }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

function playGame() {
    for (let i = 0; i <= 5; i++) {
        playRound(humanSelection, computerSelection);
        alert("Human Choice: " + humanSelection + " Computer Choice: " + computerSelection);
    }
}

playGame();