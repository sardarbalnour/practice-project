const randomNumber = Math.ceil(Math.random() * 100);
// console.log(randomNumber);
let numberOfGuess = 0;

const validateNumber = (value) => {
  if (isNaN(value)) {
    return "Please enter a valid number";
  } else if (+value < 1 || +value > 100) {
    return "Please enter a number between 1 and 100";
  }
};

const checkGuess = (guess) => {
  numberOfGuess++;
  if (guess === randomNumber) {
    console.log("You guessed corectly");
  } else if (guess < randomNumber) {
    console.log("Too low, try again!");
    play();
  } else {
    console.log("Too high, try again!!");
    play();
  }
};

const play = () => {
  const userNumber = prompt("Enter a number between 1 and 100");

  if (userNumber === null) return;

  if (numberOfGuess >= 10) {
    console.log("Game over");
    return;
  }

  const validation = validateNumber(userNumber);
  if (validation) {
    console.log(validation);
    return play();
  }

  checkGuess(+userNumber);
};

play();
