'use strict';

import KnightMoves from './knightMoves.mjs';

const board = new KnightMoves();
console.log(board.knightMoves([0, 0], [3, 3]));
console.log(board.knightMoves([3, 3], [0, 0]));
console.log(board.knightMoves([3, 3], [4, 3]));
console.log(board.knightMoves([0, 0], [7, 7]));
