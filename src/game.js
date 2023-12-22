import { board2, board } from './gameboard';
import Createboard from './dom';
// import { promptModal } from './dom';

function Game() {
  if (board.status(board.board) === 'all ships have been sunk') {
    alert('player2 wins');
    return false;
  } 
  if (board.status(board2.board) === 'all ships have been sunk') {
    alert('player1 wins');
    return false;
  } 
  Createboard();
}

export { Game };
