import Ship from './ship';

function Gameboard() {
  const createBoard = (arr = []) => {
    const rows = 10;
    const columns = 10;
    for (let i = 0; i < rows; i++) {
      arr[i] = [];
      for (let j = 0; j < columns; j++) {
        arr[i][j] = false;
      }
    }
    return arr;
  };
  const board = createBoard();
  const placeShip = (ship, pointA, pointB) => {
    let start = pointA;
    let end = pointB;
    if (pointB[0] < pointA[0] || pointB[1] < pointA[1]) {
      start = pointB;
      end = pointA;
    }

    if (end[1] > start[1]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0]][start[1] + i] = ship;
      }
    } else if (end[0] > start[0]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0] + i][start[1]] = ship;
      }
    }
  };
  const recieveAttack = (x, y) => {
    if (board[x][y] !== false) {
      const temp = board[x][y];
      temp.hit(temp);
      board[x][y] = 'hit';
    } else {
    board[x][y] = 'miss';
    }
  };
  return {
    get board() {
      return board;
    },
    createBoard,
    placeShip,
    recieveAttack,
  };
}
const board = Gameboard();
const carrier = Ship('Carrier', 5);
const board2 = Gameboard();
board2.placeShip(carrier, [4, 0], [0, 0]);
board2.recieveAttack(4, 0);
board.placeShip(carrier, [5, 5], [5, 9]);
console.log(board.board);
console.log(board2.board)
export { board, board2 };
