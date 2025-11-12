const playerChoice = prompt("shteki leda day");
console.log(playerChoice);
const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);
if (playerChoice === computerChoice) {
  return "it's a tie";
} else if (playerChoice === "rock") {
  return computerChoice === "scissors" ? "player" : "computer";
}
