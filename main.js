//Function to randomly select Rock/Paper/Scissor
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) return "Rock";
  else if (randomNumber === 2) return "Paper";
  else return "Scissor";
}

//Change user's input to be in this form: "first letter uppercase, the rest lowercase"
function addjustCase(word) {
  return (word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

//Function that plays a single round
function playRound(playerSelection, computerSelection) {
  playerSelection = addjustCase(playerSelection);

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

// Function to start a 5 round game and keep score of it
function game() {
  let playerPoints = 0;
  let computerPoints = 0;
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Choose Rock/Paper/Scissors !");
    //Check if the player wrote anything and if the input is correct
    if (playerSelection === null) {
      break;
    } else if (
      addjustCase(playerSelection) === "Rock" ||
      addjustCase(playerSelection) === "Paper" ||
      addjustCase(playerSelection) === "Scissors"
    ) {
      let result = playRound(playerSelection, getComputerChoice());

      if (result.slice(0, 5) === "Draw!") {
        // No points granted!
        // playerPoints++;
        // computerPoints++;
      } else if (result.slice(0, 8) === "You Win!") playerPoints++;
      else computerPoints++;

      console.clear();
      console.log(`${result}
    Your points: ${playerPoints}
    Computer points: ${computerPoints}`);
    } else {
      alert("Incorrect input! Try Again");
      i--;
    }
  }
  if ((playerPoints || computerPoints) != 0) {
    if (playerPoints === computerPoints) console.log("Draw!");
    else if (playerPoints > computerPoints) console.log("You Won!");
    else console.log("You lost!");
  }
}

game();
