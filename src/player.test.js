import { Player } from './player';

test.only('ship is placed at corect position', () => {
  const player1 = Player('Nikola');
  expect(player1.name).toBe('Nikola');
});

test.only('ship is placed at corect position', () => {
  const player2 = Player('Luka');
  expect(player2.name).toBe('Luka');
});
