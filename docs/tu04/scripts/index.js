'use strict';

let exit, userTry, invalid;

do {
  let cont = 0;
  let secretNum = parseInt(Math.random() * 1000) + 1;
  do {
    do {
      const userInput = prompt('Guess the number between 1 and 1000');
      userTry = +userInput;
      invalid = !userTry || userTry <= 0 || userTry > 1000;
      exit = userInput == null;
      !exit && invalid && alert('Invalid number');
    } while (!exit && invalid);

    cont++;
    if (!exit) {
      if (secretNum > userTry)
        alert('The number I picked is higher than your guess');
      else if (secretNum < userTry)
        alert('The number I picked is lower than your guess ');
    }
  } while (!exit && userTry != secretNum);
  !exit && alert(`You guessed it in ${cont} tries: `);
} while (!exit && confirm('Do you want to play again?'));

if (exit) console.log('Game cancelled');
else console.log('Thanks for playing');
