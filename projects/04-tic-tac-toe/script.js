"use strict";

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];
  let moves = 0;
  const MAX_MOVES = 9;

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
  };

  const makeMove = (row, col, player) => {
    const targetCell = board[row][col]
    if (targetCell.getValue() === 0) {
      targetCell.addMove(player);
      moves++;
    }
  };

  // returns either -1 (no winner), 0 (tie), 1 (player 1 win), 2 (player 2 win)
  const checkGameEnd = () => {
    // let maxScore = 0;
    // let winner = -1; // no winner state

    // rows
    for (let row = 0; row < rows; row++) {
      const currentRow = board[row];
      if (currentRow[0].getValue() !== 0 
          && currentRow[0].getValue() === currentRow[1].getValue() 
          && currentRow[1].getValue() === currentRow[2].getValue()) {
        return currentRow[0].getValue();
      }
    }

    // cols
    for (let col = 0; col < columns; col++) {
      if (board[0][col].getValue() != 0 
          && board[0][col].getValue() === board[1][col].getValue() 
          && board[1][col].getValue() === board[2][col].getValue()) {
        return board[0][col].getValue();
      }
    }

    // diagonals
    if (board[0][0].getValue() !== 0
        && board[0][0].getValue() === board[1][1].getValue()
        && board[1][1].getValue() === board[2][2].getValue()) {
      return board[0][0].getValue();
    
    } else if (board[2][0].getValue() !== 0
        && board[2][0].getValue() === board[1][1].getValue()
        && board[1][1].getValue() === board[0][2].getValue()) {
      return board[2][0].getvalue();
    }

    // no player winner, now check for tie state
    return moves === MAX_MOVES ? 0 : -1;
  };

  return {
    getBoard, printBoard, makeMove, checkGameEnd
  };
}

function GameController(
  playerOneName = "P1",
  playerTwoName = "P2"
) {
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

  let activePlayer = players[0];
  
  const getActivePlayer = () => activePlayer;

  const switchPlayerTurn = () => {
    activePlayer = getActivePlayer() === players[0] ? players[1] : players[0];
  };

  const printRoundInfo = () => {
    board.printBoard();
    console.log(`${getActivePlayer().name}'s turn`);
  };

  const printGameEnd = (winner) => {
    board.printBoard();
    if (winner === 0) {
      console.log(`The game ends in a tie!`);
    } else if (winner === 1) {
      console.log(`${players[0].name} has won the game!`);
    } else if (winner === 2) {
      console.log(`${players[1].name} has won the game!`);
    }
  }

  const playRound = (row, col) => {
    console.log(``)
    board.makeMove(row, col, getActivePlayer().token);

    // check for winner
    const winner = board.checkGameEnd()
    if (winner < 0) {
      switchPlayerTurn();
      printRoundInfo();
    } else {
      printGameEnd(winner);
    }
  };

  // prints initial round info on game creation
  printRoundInfo();

  return {
    playRound, 
    getActivePlayer,
    getBoard: board.getBoard
  };
}

function ScreenController() {
  const game = GameController();

  const turnDiv = document.querySelector(".turn");
  const boardDiv = document.querySelector(".board");

  const updateScreen = () => {
    boardDiv.replaceChildren(); // clear boardstate
    // boardDiv.textContent = ""; // clear boardstate
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();
    turnDiv.textContent = `${activePlayer.name}'s turn`;

    // console.log(board)
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellButton = document.createElement("button");
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        cellButton.classList.add("cell", "active");

        const cellValue = cell.getValue();
        if (cellValue > 0) {
          cellButton.textContent = cellValue === 1 ? "X" : "O";
          cellButton.classList.replace("active", "inactive")
        } 

        // only add event listeners to active buttons
        if (cellButton.classList.contains("active")) {
          cellButton.addEventListener("click", (e) => {
            const selectedCell = e.target;
            console.log(selectedCell)
            // console.log(selectedCell.dataset.row)
            game.playRound(selectedCell.dataset.row, selectedCell.dataset.column);
            updateScreen();
          });
        }

        boardDiv.appendChild(cellButton);
      })
    });
  }

  updateScreen();
}

ScreenController();