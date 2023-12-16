//const sum = require('./sum');
import myShip1 from './ship';

test('ship is sunk after hitting whole length', () => {
  myShip1.hit(myShip1);
  myShip1.hit(myShip1);
  myShip1.hit(myShip1);
  myShip1.hit(myShip1);
  myShip1.hit(myShip1);
  expect(myShip1.isSunkFn(myShip1)).toBe('Ship is sunk');
  console.log(myShip1);
});