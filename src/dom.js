import { board, board2 } from './gameboard';
import './style.css';
import { Game } from './game';

export default function Createboard() {
  const boardDiv1 = document.createElement('div');
  boardDiv1.classList.add('board1');
  document.body.appendChild(boardDiv1);

  const boardDiv2 = document.createElement('div');
  boardDiv2.classList.add('board2');
  const boardToinsert = board.board;
  const boardToAtt = board2.board;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton1 = document.createElement('button');
      cellButton1.classList.add('cell');
      boardDiv1.appendChild(cellButton1);
      if (typeof boardToinsert[i][j] === 'object') {
        cellButton1.style.backgroundColor = 'blue';
      }
      console.log(board.board);
    }
  }
  document.body.appendChild(boardDiv2);
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton2 = document.createElement('button');
      cellButton2.classList.add('cell');
      boardDiv2.appendChild(cellButton2);
      cellButton2.setAttribute('x', i);
      cellButton2.setAttribute('y', j);
      if (boardToAtt[i][j] === 'miss') {
        cellButton2.style.backgroundColor = 'red';
      } else if (boardToAtt[i][j] === 'hit') {
        cellButton2.style.backgroundColor = 'green';
      }
    }
  }
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
  createModal.classList.add('modal-div');
  const confirm = document.createElement('button');
  const playerName1 = document.createElement('input');
  const playerName2 = document.createElement('input');
  document.body.appendChild(createModal);

  createModal.appendChild(modalContent);
  modalContent.appendChild(confirm);
  modalContent.appendChild(playerName1);
  modalContent.appendChild(playerName2);
  playerName1.setAttribute('placeholder', 'type-name');
  playerName2.setAttribute('placeholder', 'type-name');
  confirm.textContent = 'CONFIRM';
  modalContent.setAttribute('id', 'modal-content');
  createModal.setAttribute('id', 'myModal');
  createModal.style.display = 'block';
  confirm.addEventListener('click', () => {
    const player1 = document.createElement('h2');
    const player2 = document.createElement('h2');
    player1.textContent = playerName1.value;
    player2.textContent = playerName2.value;
    document.body.appendChild(player1);
    document.body.appendChild(player2);
    popModule.style.visibility = 'hidden';
  })
}

export { promptModal };
