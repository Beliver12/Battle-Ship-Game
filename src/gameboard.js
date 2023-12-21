import Ship from './ship';
import { player } from './player';
import  createBoard  from './dom';

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

    if (board.some((row) => row.includes(ship))) {
      console.log('Allready have that ship');
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

  const hitSpots = (board) => {
    const hitSpot = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 'miss') {
          hitSpot.push(i, j);
        }
      }
    }
    return hitSpot;
  };
  const missedShots = (board) => {
    const missSpot = [];
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 'miss') {
          missSpot.push(i, j);
        }
      }
    }
    return missSpot;
  };

  const recieveAttack = (x, y) => {
    if (board[x][y] !== false && board[x][y] !== 'hit') {
      const temp = board[x][y];
      temp.hit(temp);
      board[x][y] = 'hit';
    } if (board[x][y] === false && board[x][y] !== 'miss' && board[x][y] !== 'hit') {
      board[x][y] = 'miss';
    }
    return 'that position is allready hit';
  };

  const status = (board) => {
    let hits = 0;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (board[i][j] === 'hit') {
          hits++;
        }
      }
    }
    if (hits === 17) {
      return 'all ships have been sunk';
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
    hitSpots, 
    missedShots,
  };
}
const board = Gameboard();
const carrier = Ship('Carrier', 5);
const battleship = Ship('Battleship', 4);
const cruiser = Ship('Cruiser', 3);
const submarine = Ship('Submarine', 3);
const destroyer = Ship('Destroyer', 2);
const board2 = Gameboard();
board2.recieveAttack(8, 6);

board.placeShip(carrier, [0, 0], [0, 4]);
createBoard();
const missed = board2.missedShots(board2.board);
console.log(missed)
board2.status(board2.board);

export {
  board, board2, carrier, battleship, destroyer, submarine, cruiser,
};
