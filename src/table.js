const Table = require('cli-table3');

class TableGenerator {
  static generateTable(moves) {
    const n = moves.length;

    const table = new Table({
      head: ['v PC | User >', ...moves.map(move => move.charAt(0).toUpperCase() + move.slice(1))],
      style: { head: ['cyan'] }
    });

    for (let i = 0; i < n; i++) {
      const row = [moves[i].charAt(0).toUpperCase() + moves[i].slice(1)];
      for (let j = 0; j < n; j++) {
        const result = calculateResult(i + 1, j + 1, n);
        row.push(result);
      }
      table.push(row);
    }

    return table.toString();
  }
}

function calculateResult(i, j, n) {
  if (i === j) return 'Draw';

  const diff = (j - i + n) % n;
  if (diff <= n / 2) return 'Win';
  return 'Lose';
}

module.exports = TableGenerator;
