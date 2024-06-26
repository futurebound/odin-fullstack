'use strict';

function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];
  let moves = 0;
  const MAX_MOVES = 9;
  let gameIsOver = false;

  function Cell() {
    let value = 0;

    const addMove = (player) => {
      value = player;
    };

    const getValue = () => value;

    return {
      addMove,
      getValue,
    };
  }

  // initialize empty board as 3x3 matrix with Cells
  for (let row = 0; row < rows; row++) {
    board[row] = [];
    for (let col = 0; col < columns; col++) {
      board[row].push(Cell());
    }
  }

  const getBoard = () => board;
  const getGameOver = () => gameIsOver;

  const printBoard = () => {
    const boardByRow = board.map((row) => row.map((cell) => cell.getValue()));
    console.log(boardByRow);
  };

  const makeMove = (row, col, player) => {
    const targetCell = board[row][col];
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
      if (
        currentRow[0].getValue() !== 0 &&
        currentRow[0].getValue() === currentRow[1].getValue() &&
        currentRow[1].getValue() === currentRow[2].getValue()
      ) {
        gameIsOver = true;
        return currentRow[0].getValue();
      }
    }

    // cols
    for (let col = 0; col < columns; col++) {
      if (
        board[0][col].getValue() != 0 &&
        board[0][col].getValue() === board[1][col].getValue() &&
        board[1][col].getValue() === board[2][col].getValue()
      ) {
        gameIsOver = true;
        return board[0][col].getValue();
      }
    }

    // diagonals
    if (
      board[0][0].getValue() !== 0 &&
      board[0][0].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[2][2].getValue()
    ) {
      gameIsOver = true;
      return board[0][0].getValue();
    } else if (
      board[2][0].getValue() !== 0 &&
      board[2][0].getValue() === board[1][1].getValue() &&
      board[1][1].getValue() === board[0][2].getValue()
    ) {
      gameIsOver = true;
      return board[2][0].getValue();
    }

    // no player winner, now check for tie state
    if (moves === MAX_MOVES) {
      gameIsOver = true;
      return 0;
    } else {
      return -1;
    }
  };

  return {
    getBoard,
    getGameOver,
    printBoard,
    makeMove,
    checkGameEnd,
  };
}

function GameController(playerOneName = 'P1', playerTwoName = 'P2') {
  const board = Gameboard();
  const players = [
    {
      name: playerOneName,
      token: 1,
    },
    {
      name: playerTwoName,
      token: 2,
    },
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
      return `The game ends in a tie!`;
    } else if (winner === 1) {
      console.log(`${players[0].name} has won the game!`);
      return `${players[0].name} has won the game!`;
    } else if (winner === 2) {
      console.log(`${players[1].name} has won the game!`);
      return `${players[1].name} has won the game!`;
    }
  };

  const playRound = (row, col) => {
    board.makeMove(row, col, getActivePlayer().token);

    // check for winner
    const winner = board.checkGameEnd();
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
    printGameEnd,
    getBoard: board.getBoard,
    getGameOver: board.getGameOver,
    checkGameEnd: board.checkGameEnd,
  };
}

function ScreenController() {
  let game = GameController();

  const modal = document.querySelector('.modal');
  const openModal = document.querySelectorAll('.open-button');
  const startButton = document.querySelector('.start-button');

  const turnDiv = document.querySelector('.turn');
  const boardDiv = document.querySelector('.board');
  const winnerModal = document.querySelector('.winner-modal');
  const winnerDisplay = document.querySelector('.winner-display');

  const updateScreen = () => {
    boardDiv.replaceChildren(); // clear boardstate
    // boardDiv.textContent = ""; // clear boardstate
    const board = game.getBoard();
    const activePlayer = game.getActivePlayer();
    turnDiv.textContent = `${activePlayer.name}'s turn`;

    // console.log(board)
    board.forEach((row, rowIndex) => {
      row.forEach((cell, colIndex) => {
        const cellButton = document.createElement('button');
        cellButton.dataset.row = rowIndex;
        cellButton.dataset.column = colIndex;
        cellButton.classList.add('cell', 'active');

        const cellValue = cell.getValue();
        if (cellValue > 0) {
          if (cellValue === 1) {
            cellButton.textContent = 'X';
            cellButton.classList.add('player-one');
          } else {
            cellButton.textContent = 'O';
            cellButton.classList.add('player-two');
          }
          // cellButton.textContent = cellValue === 1 ? "X" : "O";
          cellButton.classList.replace('active', 'inactive');
        }

        // only add event listeners to active buttons
        if (cellButton.classList.contains('active')) {
          cellButton.addEventListener('click', (e) => {
            const selectedCell = e.target;
            console.log(selectedCell);
            // console.log(selectedCell.dataset.row)
            game.playRound(
              selectedCell.dataset.row,
              selectedCell.dataset.column
            );
            updateScreen();
          });
        }

        boardDiv.appendChild(cellButton);
      });
    });

    displayGameOver();
  };

  const displayGameOver = () => {
    const winner = game.checkGameEnd();
    if (winner > 0) {
      winnerModal.showModal();
      winnerDisplay.textContent = game.printGameEnd(winner);
    }
  };

  const resetScreen = (playerOneName = 'p11', playerTwoName = 'p22') => {
    game = GameController(playerOneName, playerTwoName);
    updateScreen();
  };

  openModal.forEach((openButton) => {
    openButton.addEventListener('click', () => {
      modal.showModal();
    });
  });

  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    const playerOneName = document.querySelector('#player-one-name').value;
    const playerTwoName = document.querySelector('#player-two-name').value;
    resetScreen(playerOneName, playerTwoName);
    modal.close();
    winnerModal.close();
  });

  // initial screen by triggering user name input
  document.addEventListener('DOMContentLoaded', modal.showModal());
}

ScreenController();
