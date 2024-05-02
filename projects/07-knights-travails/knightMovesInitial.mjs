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

    // console.log(legalMovesMap);
    return legalMovesMap;
  }

  knightMoves(origin, target) {
    console.log(`origin: ${origin}, target: ${target}`);

    const queue = [];
    let pathsTravelled = [];
    const visited = new Set();
    const solutions = new Set();

    // initial path of [[origin]]
    pathsTravelled.push([origin]);
    visited.add(JSON.stringify(origin));

    let legalMoveSet = this.movesMap.get(JSON.stringify(origin));
    legalMoveSet.forEach((move) => {
      queue.push(move);
    });

    let numSolutionMoves = 1; // think this is redundant
    let numMovesToTest = queue.length;

    // with BFS, can more easily track how many moves made (levelSize)
    //  i.e. per level, queue contains ALL possible moves we need to check that
    //  are "levelSize" away from target
    // only pop out "levelSize" moves from queue at a time
    //  check if they are viable solutions, if so add them
    // TODO: need like a PATH array -> something to add to solutions Set
    while (solutions.size <= 0) {
      for (let i = 0; i < numMovesToTest; i++) {
        const current = queue.shift();
        visited.add(JSON.stringify(current));
        pathsTravelled = this.updatePaths(pathsTravelled, current, visited);

        if (JSON.stringify(current) === JSON.stringify(target)) {
          // iterate through pathsTravelled
          //  get path travelled, check for last index being === target
          //  once found, return that path
          pathsTravelled.forEach((path) => {
            if (
              JSON.stringify(path[path.length - 1]) === JSON.stringify(target)
            ) {
              console.log(path);
            }
          });
          solutions.add('found it baybe');
          break;
        }

        // console.log(legalMoveSet);
        legalMoveSet = this.movesMap.get(JSON.stringify(current));
        legalMoveSet.forEach((move) => {
          if (!visited.has(JSON.stringify(move))) {
            queue.push(move);
          }
        });
      }

      numSolutionMoves++;
      console.log(queue);
      numMovesToTest = queue.length;
    }

    console.log(solutions);
    return solutions;
  }

  // need method to give paths travelled s.t. only contains paths where path[last]
  //  is as legal move from path[last - 1], and a path is only ever added if the [next]
  //  location has NOT already been visited (to prevent looping back)
  updatePaths(pathsTravelled, next, visited) {
    const newPaths = [];

    pathsTravelled.forEach((path) => {
      console.log(path);
      const last = path[path.length - 1];
      if (this.movesMap.get(JSON.stringify(last)).has(next)) {
        console.log(`${next} is legal move from ${last}`);
        const nextPath = [...path];
        // console.log(nextPath);
        nextPath.push(next);
        // console.log(nextPath);
        newPaths.push(nextPath);
      }
    });

    return newPaths;
  }
}

export default KnightMoves;
