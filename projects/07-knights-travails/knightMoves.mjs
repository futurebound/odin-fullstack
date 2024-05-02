'use strict';

class KnightMoves {
  constructor() {
    this.size = 8;
    this.movesMap = this.populateLegalMovesMap();
  }

  populateLegalMovesMap() {
    const legalMovesMap = new Map();
    const possibleKnightMoves = [
      [-2, -1],
      [-2, 1],
      [-1, -2],
      [-1, 2],
      [1, -2],
      [1, 2],
      [2, -1],
      [2, 1],
    ];

    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        const current = [x, y];
        if (!legalMovesMap.has(current)) {
          legalMovesMap.set(current, new Set());
        }
        const moveSet = legalMovesMap.get(current);
        possibleKnightMoves.forEach((move) => {
          const nextX = current[0] + move[0];
          const nextY = current[1] + move[1];
          if (
            nextX >= 0 &&
            nextX < this.size &&
            nextY >= 0 &&
            nextY < this.size
          ) {
            moveSet.add([nextX, nextY]);
          }
        });
      }
    }

    console.log(legalMovesMap);
    return legalMovesMap;
  }
}

export default KnightMoves;
