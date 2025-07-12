// let compChoice = 0;
// let playerChoice;

// let compScore = 0;
// let playerScore = 0;


/* BASIC CODE FOR COMPUTER CHOICE 
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};


function getComputerChoice() {
    let compChoice;
    compChoice = getRandomInt(3)
    switch(compChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
        default:
            break;
    };
}; */

// BETTER CODE FOR COMPUTER CHOICE:

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let playerChoice = prompt(`Make a choice!`).toLowerCase();
    while(!['rock','paper','scissors'].includes(playerChoice)) {
        playerChoice = prompt('Invalid Choice! Try again!').toLowerCase();
    }
    return playerChoice;
};

function displayScores() {
   return `Player Score: ${playerScore} | Computer Score: ${compScore}`;
};

// console.log(getComputerChoice())
// console.log(getPlayerChoice())

function playRound () {
    
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    // simple/initial logic

    // if (playerChoice == computerChoice) {
    //     console.log(`${playerChoice} and ${computerChoice}, it's a tie!`);
    //     console.log(displayScores());
    // } 
    // else if (playerChoice == "rock" && computerChoice == "paper" || playerChoice == "paper" && computerChoice == "scissors" || playerChoice == "scissors" && computerChoice == "rock" ) {
    //     console.log(`${computerChoice} beats ${playerChoice}! You lose!`);
    //     compScore++;
    //     console.log(displayScores());
    // } else {
    //     console.log(`${playerChoice} beats ${computerChoice}! You win!`);
    //     playerScore++;
    //     console.log(displayScores());
    // };

    // cleaner code:
    
    const winConditions = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (playerChoice === computerChoice) {
        console.log(`Tie! Both Chose ${playerChoice}`);
        console.log(displayScores());
    } else if (winConditions[playerChoice] === computerChoice){
        console.log(`${playerChoice} beats ${computerChoice}! You win!`);
        playerScore++;
        console.log(displayScores());
    } else {
        console.log(`${computerChoice} beats ${playerChoice}! You Lose!`);
        compScore++;
        console.log(displayScores());
    }
};

function playGame() {
    compScore = 0;
    playerScore = 0;
    for(let i = 0; i < 5; i++) {
        console.log(`Round ${i+1}: `)
        playRound();
    }
    console.log("Game over!")
    if(compScore > playerScore) {
        console.log ("Computer wins! Final Score: ")
        console.log(displayScores());
        console.log("Rematch?");
    } else if (playerScore > compScore) {
        console.log ("You win! Final Score: ");
        console.log(displayScores());
        console.log("Play again?");
    } else {
        console.log("It's a draw! Final Score: ");
        console.log(displayScores());
        console.log("Play again?");
    };
};

playGame();


