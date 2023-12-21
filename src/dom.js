import { board } from './gameboard';
import './style.css';
import { Game } from './game';

export default function Createboard() {
  const boardDiv1 = document.createElement('div');
  boardDiv1.classList.add('board1');
  document.body.appendChild(boardDiv1);
  const boardDiv2 = document.createElement('div');

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton1 = document.createElement('button');
      cellButton1.classList.add('cell');
      boardDiv1.appendChild(cellButton1);
      if (typeof board.board[i][j] === 'object') {
        cellButton1.style.backgroundColor = 'blue';
      }
      console.log(board.board);
    }
  }

  /* for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton2 = document.createElement('button');
      cellButton2.classList.add('cell');
      boardDiv2.appendChild(cellButton2);
      if(typeof board[i][j] === 'object') {

      }
    }
  } */
}
const popModule = document.createElement('button');
document.body.appendChild(popModule);
popModule.textContent = 'PLAY';
popModule.addEventListener('click', () => {
  Game();
});
function promptModal() {
  const createModal = document.createElement('div');
  const modalContent = document.createElement('form');
  createModal.classList.add('modal-div')
  const confirm = document.createElement('button');
  const playerName = document.createElement('input');
  document.body.appendChild(createModal);

  createModal.appendChild(modalContent);
  modalContent.appendChild(confirm);
  modalContent.appendChild(playerName);
  confirm.textContent = 'CONFIRM';
  modalContent.setAttribute("id", "modal-content");
  createModal.setAttribute("id", "myModal")
  createModal.style.display = 'block';
}

export { promptModal };
