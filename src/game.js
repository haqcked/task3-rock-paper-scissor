// game.js
const HMAC = require('./hmac');
const Rules = require('./rules');
const Table = require('./table');

class Game {
  constructor(moves) {
    this.moves = moves;
    this.key = HMAC.generateKey();
    this.computerMove = this.getRandomMove();
  }

  getRandomMove() {
    const randomIndex = Math.floor(Math.random() * this.moves.length);
    return this.moves[randomIndex];
  }

  play(userMove) {
    const hmac = HMAC.calculateHMAC(this.computerMove, this.key);
    const result = Rules.determineWinner(userMove, this.computerMove, this.moves);

    console.log(`HMAC: ${hmac}`);

    if (result === 'Draw') {
      console.log(`Computer move: ${this.computerMove}`);
      console.log(`You ${result}!`);
      console.log(`HMAC key: ${this.key}`);
    } else {
      console.log(`Computer move: ${this.computerMove}`);
      console.log(`You ${result}!`);
      console.log(`HMAC key: ${this.key}`);
    }
  }
}

module.exports = Game;
