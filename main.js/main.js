const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "scissors" ? "computer" : "player";
  } else {
    return computer === "rock" ? "computer" : "player";
  }
};

const showResult = (result) => {
  if (result === "player") {
    console.log("you won");
    playerScore++;
  } else if (result === "computer") {
    console.log("computer won");
    computerScore++;
  } else {
    console.log("it's a tie");
  }
  console.log(`Your score is: ${playerScore}`);
  console.log(`Computer score is: ${computerScore}`);
  console.log("------------------------------------");
};

const play = () => {
  const playerChoice = prompt("shteki leda day");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose ${playerChoice.toLowerCase()}`);
  } else {
    console.log("You cheated");
    return;
  }
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(`computer chooses ${computerChoice}`);
  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  play()
};

play();
