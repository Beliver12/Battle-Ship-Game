import {
  board, board2, carrier, battleship, destroyer, submarine, cruiser,
} from './gameboard';



test.only('after hitting all ships', () => {
  board2.placeShip(carrier, [4, 0], [0, 0]);
  board2.placeShip(battleship, [7, 5], [7, 9]);
  board2.placeShip(cruiser, [5, 5], [5, 7]);
  board2.placeShip(submarine, [2, 2], [2, 4]);
  board2.placeShip(destroyer, [8, 5], [8, 6]);
  board2.recieveAttack(4, 0);
  board2.recieveAttack(3, 0);
  board2.recieveAttack(2, 0);
  board2.recieveAttack(1, 0);
  board2.recieveAttack(0, 0);
  board2.recieveAttack(7, 5);
  board2.recieveAttack(7, 6);
  board2.recieveAttack(7, 7);
  board2.recieveAttack(7, 8);
  board2.recieveAttack(7, 9);

  board2.recieveAttack(5, 5);
  board2.recieveAttack(5, 6);
  board2.recieveAttack(5, 7);
  board2.recieveAttack(2, 2);
  board2.recieveAttack(2, 3);
  board2.recieveAttack(2, 4);
  board2.recieveAttack(8, 5);
  board2.recieveAttack(8, 6);
  expect(board2.status(board2.board)).toBe('all ships have been sunk');
});

test.only('ship is placed at corect position', () => {
  expect(board2.recieveAttack(8, 6)).toBe('that position is allready hit');
});