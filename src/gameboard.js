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
  const placeShip = (ship, start, end) => {
    if (end[1] > start[1]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0]][start[1] + i] = true;
      }
    } else if (end[0] > start[0]) {
      for (let i = 0; i < ship.length; i++) {
        board[start[0] + i][start[1]] = true;
      }
    }
  };
  return {
    get board() {
      return board;
    },
    createBoard,
    placeShip,
  };
}
const board = Gameboard();
const carrier = Ship('Carrier', 5);
board.placeShip(carrier, [5, 5], [5, 9]);
export default board;
