//Function to randomly select Rock/Paper/Scissor
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissors";
}

function getplayerChoice(e) {
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  if (e.target === rock) {
    return "Rock";
  } else if (e.target === paper) {
    return "Paper";
  } else if (e.target === scissors) {
    return "Scissors";
  } else return;
}

//Function that plays a single round
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection);
  console.log(computerSelection);
  switch (playerSelection) {
    case "Rock": {
      if (computerSelection === "Rock") return "Draw!";
      else if (computerSelection === "Paper") return "Lose1";
      else return "Win1";
    }
    case "Paper": {
      if (computerSelection === "Paper") return "Draw!";
      else if (computerSelection === "Scissors") return "Lose2";
      else return "Win2";
    }
    case "Scissors": {
      if (computerSelection === "Scissors") return "Draw!";
      else if (computerSelection === "Rock") return "Lose3";
      else return "Win3";
    }
  }
}

let playerScore = 0;
let computerScore = 0;

function game(results) {
  const computerSpan = document.querySelector(".computer");
  const playerSpan = document.querySelector(".player");
  const displayResult = document.querySelector(".results");
  const scoreBoard = document.querySelector("#score");
  console.log(results);
  switch (results) {
    case "Win1": {
      playerScore++;
      playerSpan.textContent = `Player Score: ${playerScore}`;
      displayResult.textContent = "You Win! Rock beats Scissors";
      break;
    }
    case "Win2": {
      playerScore++;
      playerSpan.textContent = `Player Score: ${playerScore}`;
      displayResult.textContent = "You Win! Paper beats Rock";
      break;
    }
    case "Win3": {
      playerScore++;
      playerSpan.textContent = `Player Score: ${playerScore}`;
      displayResult.textContent = "You Win! Scissors beat Paper";
      break;
    }
    case "Lose1": {
      computerScore++;
      computerSpan.textContent = `Computer Score: ${computerScore}`;
      displayResult.textContent = "You Lose! Paper beats Rock";
      break;
    }
    case "Lose2": {
      computerScore++;
      computerSpan.textContent = `Computer Score: ${computerScore}`;
      displayResult.textContent = "You Lose! Scissors beat Paper";
      break;
    }
    case "Lose3": {
      computerScore++;
      computerSpan.textContent = `Computer Score: ${computerScore}`;
      displayResult.textContent = "You Lose! Rock beats Scissors";
      break;
    }
    case "Draw!": {
      displayResult.textContent = "Draw!";
      break;
    }
  }

  if (playerScore === 5) {
    displayResult.textContent = "You won the game!";
    let resetButton = document.querySelector(".btn");
    if (!resetButton) {
      resetButton = document.createElement("button");
      resetButton.classList.add("btn");
      resetButton.textContent = "Reset";
      scoreBoard.appendChild(resetButton);
    }
  } else if (computerScore === 5) {
    displayResult.textContent = "You lost the game!";
    let resetButton = document.querySelector(".btn");
    if (!resetButton) {
      resetButton = document.createElement("button");
      resetButton.classList.add("btn");
      resetButton.textContent = "Reset";
      scoreBoard.appendChild(resetButton);
    }
  }
}

window.addEventListener("pointerdown", function (e) {
  const playerChoice = getplayerChoice(e);
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);

  game(result);
});
