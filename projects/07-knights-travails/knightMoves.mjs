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
          legalMovesMap.set(JSON.stringify(current), new Set());
        }
        const moveSet = legalMovesMap.get(JSON.stringify(current));
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

    return legalMovesMap;
  }

  knightMoves(origin, target) {
    const queue = [];
    queue.push([origin]);

    while (queue.length > 0) {
      const currentPath = queue.shift();
      const currentLocation = currentPath[currentPath.length - 1];
      if (JSON.stringify(currentLocation) === JSON.stringify(target)) {
        console.log(
          `You made it in ${currentPath.length - 1} moves! Here's your path:`
        );
        return currentPath;
      }

      // no solution yet, so construct new paths from the legal moves available
      //  from currentLocation, and put them back in the queue
      const legalMoves = this.movesMap.get(JSON.stringify(currentLocation));
      legalMoves.forEach((move) => {
        const newPath = [...currentPath];
        newPath.push(move);
        queue.push(newPath);
      });
    }
  }
}

export default KnightMoves;
