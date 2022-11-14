const rs = require("readline-sync");
let playerName = rs.question("Hello, please enter your name: ");
if (playerName === '') {
  playerName = "Stranger"
}
let secretNumber = () => {
  let result = [];
  do {
    let randomNum = Math.floor(Math.random() * 10);
    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  } while (result.length < 4);

  return result.join("");
};
let secretGuess = secretNumber();
console.log("secretGuess :>> ", secretGuess);

let userGuess = "";
let round = 1;
let playingNumber = 0;
let startGame = () => {
  do {
    userGuess = rs.question("Please enter guessed Number: ");
    let checkUserUniqueInput = () => {
      let someObj = {};
      playingNumber++;
      for (let i = 0; i < userGuess.length; i++) {
        let char = userGuess[i];
        if (someObj[char]) return false;
        someObj[char] = true;
      }
      return true;
    };
    if (userGuess === "" || userGuess.length < 4 || !checkUserUniqueInput()) {
      console.log("Error Error");
    }
    let bullsAndCows = () => {
      let cows = 0;
      let bulls = 0;

      for (let i = 0; i < userGuess.length; i++) {
        if (secretGuess[i] === userGuess[i]) {
          bulls++;
        } else if (secretGuess.includes(userGuess[i])) {
          cows++;
        }
      }
      if (cows === 0 && bulls === 0) {
        return `You missed everything`;
      }
      return `cows: ${cows}, bulls ${bulls}`;
    };

    console.log(bullsAndCows());
    if (secretGuess === userGuess) {
      console.log(`Congratulations, you guessed with ${playingNumber} guesses`);
      let again = rs.question("Do you want to play again? Y/N ");
      if (again.toLowerCase() === "y") {
        round++
        secretGuess = secretNumber();
        console.log("secretGuess :>> ", secretGuess);
        startGame();
      }
      if (again.toLowerCase() === "n") {
        console.log(`Thanks ${playerName} for playing ${round} times`);
      }
    }
  } while (secretGuess !== userGuess);
};
startGame();
