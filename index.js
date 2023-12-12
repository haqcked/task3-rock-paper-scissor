const readline = require('readline');
const Game = require('./src/game');
const Table = require('./src/table');

const moves = process.argv.slice(2);

if (moves.length % 2 !== 1 || moves.length < 3 || new Set(moves).size !== moves.length) {
  console.error('Incorrect number of arguments. Please provide an odd number ( >= 3 ) of non-repeating strings.');
  console.error('Example: node index.js rock paper scissors');
  process.exit(1);
}

const game = new Game(moves);

console.log("Welcome to the Rock-Paper-Scissors Game!");
console.log("Let's play. Choose a move:");
moves.forEach((move, index) => {
  console.log(`${index + 1} - ${move.charAt(0).toUpperCase() + move.slice(1)}`);
});
console.log('0 - EXIT');
console.log('9 - HELP');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Your move: ', (userMove) => {
  if (userMove === '0' || userMove.toLowerCase() === 'exit') {
    console.log('Goodbye!');
    rl.close();
    return;
  }

  if (userMove === '9' || userMove.toLowerCase() === 'help') {
    console.log(Table.generateTable(moves));
    rl.close();
    return;
  }

  const userMoveIndex = parseInt(userMove);

  if (isNaN(userMoveIndex) || userMoveIndex < 1 || userMoveIndex > moves.length) {
    console.error('Invalid move. Please choose a valid move (number).');
    console.error('Please try again');
    rl.close();
    return;
  }

  console.log(`You chose: ${moves[userMoveIndex - 1].toUpperCase()}`);

  game.play(userMoveIndex.toString());
  rl.close();
});
