import { generateWithState } from "../utils/generate.js";

// Define a Tic Tac Toe game state and actions
function ticTacToeGame(state, currentPlayer) {
  // Initialize the board if it's not provided
  if (!state) {
    state = {
      board: [
        [" ", " ", " "],
        [" ", " ", " "],
        [" ", " ", " "],
      ],
      currentPlayer: "X",
      winner: false,
      gameOver: false,
    };
  }

  // Check for a winner or a draw
  function checkWinner(board) {
    // Check rows, columns, and diagonals for a win
    // For simplicity, we're not checking for a draw here
    // You can add that logic if needed.
    return (
      (board[0][0] !== " " &&
        board[0][0] === board[0][1] &&
        board[0][1] === board[0][2]) ||
      (board[1][0] !== " " &&
        board[1][0] === board[1][1] &&
        board[1][1] === board[1][2]) ||
      (board[2][0] !== " " &&
        board[2][0] === board[2][1] &&
        board[2][1] === board[2][2]) ||
      (board[0][0] !== " " &&
        board[0][0] === board[1][0] &&
        board[1][0] === board[2][0]) ||
      (board[0][1] !== " " &&
        board[0][1] === board[1][1] &&
        board[1][1] === board[2][1]) ||
      (board[0][2] !== " " &&
        board[0][2] === board[1][2] &&
        board[1][2] === board[2][2]) ||
      (board[0][0] !== " " &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2]) ||
      (board[0][2] !== " " &&
        board[0][2] === board[1][1] &&
        board[1][1] === board[2][0])
    );
  }

  // Check for a winner
  state.winner = checkWinner(state.board);

  // Determine if the game is over
  state.gameOver =
    state.winner || state.board.flat().every((cell) => cell !== " ");

  // Switch to the next player if the game is not over
  if (!state.gameOver) {
    state.currentPlayer = state.currentPlayer === "X" ? "O" : "X";
  }

  return state;
}

// Initialize the generator with an initial state
const initialState = () => ticTacToeGame();

const ticTacToeGenerator = generateWithState(ticTacToeGame, initialState);

// Simulate a player's move
function makeMove(board, player, row, col) {
  if (row >= 0 && row < 3 && col >= 0 && col < 3 && board[row][col] === " ") {
    board[row][col] = player;
    return true; // Valid move
  }
  return false; // Invalid move
}

// Function to make a move in the Tic Tac Toe game
function playMove(generator, row, col) {
  const { board, currentPlayer, gameOver, winner } = generator.next((state) => {
    return {
      ...state,
      board: makeMove(state.board, state.currentPlayer, row, col),
    };
  }).value;

  console.log(
    `Player ${currentPlayer} makes a move at row ${row}, col ${col}:`
  );
  console.log(board.map((row) => row.join(" ")).join("\n"));

  if (gameOver) {
    if (winner) {
      console.log(`Player ${winner} wins!`);
    } else {
      console.log("It's a draw!");
    }
  }
}

// Simulate a sequence of moves in the Tic Tac Toe game
playMove(ticTacToeGenerator, 0, 0);
playMove(ticTacToeGenerator, 1, 1);
playMove(ticTacToeGenerator, 0, 1);
playMove(ticTacToeGenerator, 1, 0);
playMove(ticTacToeGenerator, 0, 2);
playMove(ticTacToeGenerator, 2, 0);
playMove(ticTacToeGenerator, 1, 2);
playMove(ticTacToeGenerator, 2, 1);
playMove(ticTacToeGenerator, 2, 2);
