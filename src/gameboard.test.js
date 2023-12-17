import board from './gameboard';

test('Board length is 10', () => {
  expect(board.board.length).toBe(10);
});

test('ship is placed at corect position', () => {
  expect(board.board[5][5]).toBe(true);
});

test('ship is placed at corect position', () => {
  expect(board.board[5][6]).toBe(true);
});

test('ship is placed at corect position', () => {
  expect(board.board[5][7]).toBe(true);
});

test('ship is placed at corect position', () => {
  expect(board.board[5][8]).toBe(true);
});

test('ship is placed at corect position', () => {
  expect(board.board[5][9]).toBe(true);
});
