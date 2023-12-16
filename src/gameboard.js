import myShip1 from './ship';

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
  return {
    get board() {
      return board;
    },
    createBoard,
  };
}
const temp = Gameboard();
console.log(temp.board)
export default temp;
