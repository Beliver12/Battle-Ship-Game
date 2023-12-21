import { Player, player1, player2 } from './player';

test.only('creates player1 object with name', () => {
  expect(player1.name).toBe('Nikola');
});

test.only('creates player2 object with name', () => {
  expect(player2.name).toBe('Luka');
});

test.only('sets different active player when called', () => {
  expect(player1.switchPlayerTurn(player1)).toBe('Luka');
});

test.only('sets different active player when called', () => {
  expect(player2.switchPlayerTurn(player2)).toBe('Nikola');
});

test.only('sets different active player when called', () => {
    expect(player1.switchPlayerTurn(player1)).toBe('Luka');
  });