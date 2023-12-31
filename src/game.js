import { board2, board } from './gameboard';
import Createboard from './dom';
import { players } from './dom';
import { imgContainer } from './dom.js';

function Game() {
  const activePlayer = players.getActivePlayer();
  if (board.status(board.board) === 'all ships have been sunk') {
    alert(`${activePlayer.name} Wins`);
    return false;
  } 
  if (board.status(board2.board) === 'all ships have been sunk') {
    alert(`${activePlayer.name} Wins`);
    imgContainer.style.display = 'block';
    return false;
  } 
  Createboard();
}

export { Game };
