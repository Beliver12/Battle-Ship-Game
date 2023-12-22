import { board, board2 } from './gameboard';
import './style.css';
import { Game } from './game';
import { createPlayers } from './player';

const players = createPlayers();
export default function Createboard() {
  const boardDiv1 = document.createElement('div');
  boardDiv1.classList.add('board1');
  document.body.appendChild(boardDiv1);
  const activePlayer = players.getActivePlayer();

  const boardDiv2 = document.createElement('div');
  boardDiv2.classList.add('board2');
  let boardToinsert = board;
  let boardToAtt = board2;
  if (activePlayer.name !== playerName1.value) {
    boardToinsert = board2;
    boardToAtt = board;
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton1 = document.createElement('button');
      cellButton1.classList.add('cell');
      boardDiv1.appendChild(cellButton1);
      if (typeof boardToinsert.board[i][j] === 'object' || boardToinsert.board[i][j] === 'hit') {
        cellButton1.style.backgroundColor = 'blue';
      }
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
      if (boardToAtt.board[i][j] === 'miss') {
        cellButton2.style.backgroundColor = 'red';
      } else if (boardToAtt.board[i][j] === 'hit') {
        cellButton2.style.backgroundColor = 'green';
      }
      cellButton2.addEventListener('click', (e) => {
        players.switchPlayerTurn();
        boardToAtt.recieveAttack(
          Number(e.currentTarget.attributes.x.value),
          Number(e.currentTarget.attributes.y.value),
        );
        Game();
      });
    }
  }
}

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
confirm.setAttribute('id', 'confirm');
modalContent.setAttribute('id', 'modal-content');
createModal.setAttribute('id', 'myModal');

const player1 = document.createElement('h2');
const player2 = document.createElement('h2');
confirm.addEventListener('click', (event) => {
  players.choosePlayerName();
  player1.textContent = playerName1.value;
  player2.textContent = playerName2.value;
  document.body.appendChild(player1);
  document.body.appendChild(player2);
  createModal.style.display = 'none';
  Createboard();
  event.preventDefault();
});

const popModule = document.createElement('button');
document.body.appendChild(popModule);
popModule.textContent = 'PLAY';
popModule.addEventListener('click', () => {
  popModule.style.visibility = 'hidden';
  createModal.style.display = 'block';
});

export {
  playerName1, playerName2, player1, player2,
};
