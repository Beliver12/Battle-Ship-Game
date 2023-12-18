import { board, board2 } from './gameboard';
console.log(board.board[5][5].name)
test('Board length is 10', () => {
  expect(board.board.length).toBe(10);
});

test('ship is placed at corect position', () => {
  console.log(board.board[5][5].name)
  expect(board.board[5][5].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board.board[5][6].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board.board[5][7].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board.board[5][8].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board.board[5][9].name).toBe('Carrier');
});

//
test('ship is placed at corect position', () => {
  expect(board2.board[0][0].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board2.board[1][0].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board2.board[2][0].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board2.board[3][0].name).toBe('Carrier');
});

test('ship is placed at corect position', () => {
  expect(board2.board[4][0]).toBe('hit');
});
