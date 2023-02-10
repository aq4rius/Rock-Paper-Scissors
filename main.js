//Function to randomly select Rock/Paper/Scissor
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissor";
}

//Function that plays a single round
function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Rock") return "Draw!";
      else if (computerSelection === "Paper")
        return "You Lose! Paper beats Rock";
      else return "You Win! Rock beats Scissors";

    case "Paper":
      if (computerSelection === "Paper") return "Draw!";
      else if (computerSelection === "Scissors")
        return "You Lose! Scissors beat Paper";
      else return "You Win! Paper beats Rock";

    case "Scissors":
      if (computerSelection === "Scissors") return "Draw!";
      else if (computerSelection === "Rock")
        return "You Lose! Rock beats Scissors";
      else return "You Win! Scissors beat Paper";
  }
}

function getplayerChoice(e) {
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  if (e.target === rock) {
    return "Rock";
    //console.log("Rock");
  } else if (e.target === paper) {
    return "Paper";
    //console.log("Paper");
  } else if (e.target === scissors) {
    return "Scissors";
    //console.log("Scissors");
  } else return;
}

window.addEventListener("pointerdown", function (e) {
  const playerChoice = getplayerChoice(e);
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  console.log(result);
});
