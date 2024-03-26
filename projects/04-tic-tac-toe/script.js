"use strict";

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  // initialize empty board as 3x3 matrix with Cells
  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let col = 0; col < columns; col++) {
      board[row].push(Cell())
    }
  }

  const getBoard = () => board;

  const printBoard = () => {
    const boardByRow = board.map((row) => row.map((cell) => cell.getValue()));
    console.log(boardByRow);
  }

  const makeMove = (row, col, player) => {
    const targetCell = board[row][col]
    if (targetCell.getValue() === 0) {
      targetCell.addMove(player)
    }
  }

  return {
    getBoard, printBoard, makeMove
  }
}


function Cell() {
  let value = 0;

  const addMove = (player) => {
    value = player;
  };

  const getValue = () => value;

  return {
    addMove, getValue
  };
}


function GameController() {
  const board = Gameboard();
  const players = [
    {
      name: playerOneName,
      token: 1
    },
    {
      name: playerTwoName,
      token: 2
    }
  ];
}