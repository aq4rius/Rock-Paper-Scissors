//Function to randomly select Rock/Paper/Scissor
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissors";
}

// Player choice selection
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
const computerSpan = document.querySelector(".computer");
const playerSpan = document.querySelector(".player");
const displayResult = document.querySelector(".results");
const scoreBoard = document.querySelector("#score");
const selectButton = document.querySelectorAll(".button");

function game(results) {
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

  //display the result and disable selection after reaching 5 points
  if (playerScore === 5) {
    displayResult.textContent = "You won the game!";
    for (let i = 0; i < selectButton.length; i++) {
      selectButton[i].classList.add("disable");
    }
    return playerScore;
  } else if (computerScore === 5) {
    displayResult.textContent = "You lost the game!";
    for (let i = 0; i < selectButton.length; i++) {
      selectButton[i].classList.add("disable");
    }
    return computerScore;
  }
}

window.addEventListener("pointerdown", function (e) {
  if (playerScore === 5 || computerScore === 5) {
    return;
  }

  const playerChoice = getplayerChoice(e);
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);

  if (game(result) === 5) {
    let resetButton = document.querySelector(".btn");
    if (!resetButton) {
      resetButton = document.createElement("button");
      resetButton.classList.add("btn");
      resetButton.textContent = "Restart";
      scoreBoard.appendChild(resetButton);

      resetButton.addEventListener("pointerdown", () => {
        playerScore = 0;
        computerScore = 0;
        computerSpan.textContent = `Computer Score: ${computerScore}`;
        playerSpan.textContent = `Player Score: ${playerScore}`;

        this.setTimeout(() => {
          resetButton.remove();
          displayResult.textContent = "New Game!";
          for (let i = 0; i < selectButton.length; i++) {
            selectButton[i].classList.remove("disable");
          }
        }, 800);
      });
    }
  }
});
