import Ship from './ship';
import Createboard, { imgContainer, players } from './dom.js';

export default function Gameboard() {
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

    if (board.some((row) => row.includes(ship))) {
      alert('Allready have that ship');
      return false;
    }

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
    return true;
  };

  const recieveAttack = (x, y) => {
    const activePlayer = players.getActivePlayer();
    if (board[x][y] !== false && board[x][y] !== 'hit' && board[x][y] !== 'miss') {
      const temp = board[x][y];
      temp.hit(temp);
      board[x][y] = 'hit';
      alert(`${activePlayer.name} hit a target`);
    } else if (board[x][y] === false && board[x][y] !== 'miss' && board[x][y] !== 'hit' && typeof board[x][y] !== 'object') {
      board[x][y] = 'miss';
      alert(`${activePlayer.name} missed a target`);
    } else if (board[x][y] === 'miss' || board[x][y] === 'hit') {
      alert('that position is allready hit');
      return false;
    }
  };
  const status = (board) => {
    let hits = 0;
    let ships = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 'hit') {
          hits++;
          ships++;
        }
        if (typeof board[i][j] === 'object') {
          ships++;
        }
      }
    }
   // if (ships === 0) {
   //   return 'board has no ships';
   // }
    if (hits === 17) {
      return 'all ships have been sunk';
    }
    if (ships !== 17) {
      return false;
    }
    return 'keep playing';
  };
  return {
    get board() {
      return board;
    },
    createBoard,
    placeShip,
    recieveAttack,
    status,
  };
}

const carrier = Ship('carrier', 5);
const battleship = Ship('battleship', 4);
const cruiser = Ship('cruiser', 3);
const submarine = Ship('submarine', 3);
const destroyer = Ship('destroyer', 2);

/* board.placeShip(carrier, [4, 0], [0, 0]);
board.placeShip(battleship, [7, 5], [7, 9]);
board.placeShip(cruiser, [5, 5], [5, 7]);
board.placeShip(submarine, [2, 2], [2, 4]);
board.placeShip(destroyer, [8, 5], [8, 6]);
board2.placeShip(carrier, [4, 0], [0, 0]);
board2.placeShip(battleship, [7, 5], [7, 9]);
board2.placeShip(cruiser, [5, 5], [5, 7]);
board2.placeShip(submarine, [2, 2], [2, 4]);
board2.placeShip(destroyer, [8, 5], [8, 6]);
// board2.recieveAttack(8, 6); */

export {
  Gameboard, battleship, destroyer, submarine, cruiser, carrier,
};
