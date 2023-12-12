const HMAC = require('./hmac');
const Rules = require('./rules');
const Table = require('./table');

class Game {
  constructor(moves) {
    this.moves = moves;
    this.key = HMAC.generateKey();
  }

  generateComputerMove() {
    return this.getRandomMove();
  }

  getRandomMove() {
    const randomIndex = Math.floor(Math.random() * this.moves.length);
    return this.moves[randomIndex];
  }

  play(userMove) {
    const computerMove = this.generateComputerMove();
    const hmac = HMAC.calculateHMAC(computerMove, this.key);
    const result = Rules.determineWinner(userMove, computerMove, this.moves);

    // console.log(`HMAC: ${hmac}`);
    console.log(`Computer move: ${computerMove.toUpperCase()}`);

    if (result === 'Draw') {
      console.log(`You ${result}!`);
    } else {
      console.log(`You ${result}!`);
    }
    console.log(`HMAC key: ${this.key}`);
  }
}

module.exports = Game;
