class Rules {
  static determineWinner(userMove, computerMove, moves) {
    const index = moves.indexOf(userMove);
    const half = Math.floor(moves.length / 2);

    const winningMoves = moves.slice(index + 1, index + 1 + half);
    const losingMoves = moves.slice(index - half, index);

    if (winningMoves.includes(computerMove)) {
      return 'Win';
    } else if (losingMoves.includes(computerMove)) {
      return 'Lose';
    } else {
      return 'Draw';
    }
  }
}

module.exports = Rules;
