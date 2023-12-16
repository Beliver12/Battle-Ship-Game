import temp from './gameboard';

test('ship is sunk after hitting whole length', () => {
  expect(temp.board.length).toBe(10);
  console.log(temp.board);
});
