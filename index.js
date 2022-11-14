// Bulls and Cows
// Get library for user input
// we need to keep the next line, so we can prompt the user for input
const rs = require('readline-sync');

let secretNumber = () => {
  let result = [];
  do {
    let randomNum = Math.floor(Math.random() * 10);
    if (!result.includes(randomNum)) {
      result.push(randomNum);
    }
  } while (result.length < 4);

  return (result.join(""));
};
let secretGuess = secretNumber();

console.log('secretGuess :>> ', secretGuess);
let userGuess = rs.question('Please enter guessed Number: ');

let checkUserUniqueInput = () => {
    let someObj = {}
    for (let i = 0; i <userGuess.length; i++){
        let char = userGuess[i]
        if(someObj[char]) return false;
        someObj[char] = true;
    }
    return true;
}

console.log('userGuess :>> ', userGuess);
let checkUserInput = () => {
if (userGuess === '' || userGuess.length <4 || !checkUserUniqueInput()) {
    console.log('Error :>> ', 'Error');
 }
}
checkUserInput()
let bullsAndCows = () => {
 let cows = 0;
 let bulls = 0;

for (let i = 0; i < userGuess.length; i++) {
  if (secretGuess[i] === userGuess[i]) {
    bulls++;
  } else if (secretGuess.includes(userGuess[i])){
    cows++;
  }
}
return `cows: ${cows}, bulls ${bulls}`
}

console.log(bullsAndCows())
if (secretGuess === userGuess) {
    console.log('Congratulations')
}