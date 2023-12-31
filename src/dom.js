import Gameboard, {
  battleship,
  destroyer,
  submarine,
  cruiser,
  carrier,
} from './gameboard';
import './style.css';
import { Game } from './game';
import { createPlayers } from './player';

const players = createPlayers();
const container = document.createElement('div');
container.setAttribute('id', 'container');
document.body.appendChild(container);
const placeShip1Label = document.createElement('form');
placeShip1Label.setAttribute('id', 'form');
const placeShip1Name = document.createElement('select');

const placeShip1CordinatesLabel = document.createElement('label');
const placeShip1Cordinates = document.createElement('input');
placeShip1Cordinates.setAttribute('type', 'number');
placeShip1Cordinates.setAttribute('min', '00');
placeShip1Cordinates.setAttribute('max', '99');
const placeShip2CordinatesLabel = document.createElement('label');
const placeShip2Cordinates = document.createElement('input');
placeShip2Cordinates.setAttribute('type', 'number');
placeShip2Cordinates.setAttribute('min', '00');
placeShip2Cordinates.setAttribute('max', '99');
const placeShipBtn = document.createElement('button');
const description = document.createElement('div');

let board2 = Gameboard();
let board = Gameboard();
function updateBoards() {
  board = Gameboard();
  board2 = Gameboard();
}

function createOption() {
  while (placeShip1Name.firstChild) {
    placeShip1Name.removeChild(placeShip1Name.firstChild);
  }
  for (let i = 0; i < 5; i++) {
    const ships = [
      carrier.name,
      battleship.name,
      cruiser.name,
      submarine.name,
      destroyer.name,
    ];
    const shipOptions = document.createElement('option');
    placeShip1Name.appendChild(shipOptions);
    shipOptions.setAttribute('id', 'newOption');
    shipOptions.setAttribute('value', ships[i]);
    shipOptions.textContent = ships[i];
  }
}

export default function Createboard() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  const boardDiv1 = document.createElement('div');
  const boardDiv2 = document.createElement('div');
  boardDiv1.classList.add('board1');
  boardDiv2.classList.add('board2');
  container.appendChild(boardDiv1);
  container.appendChild(boardDiv2);
  let temp = 0;
  const activePlayer = players.getActivePlayer();
  let boardToinsert = board;
  let boardToAtt = board2;
  if (activePlayer.name !== playerName1.value && activePlayer.name !== player.value
    && activePlayer.name !== 'AI') {
    createOption();
  }
  if (activePlayer.name !== playerName1.value && activePlayer.name !== player.value) {
    boardToinsert = board2;
    boardToAtt = board;
  }
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const cellButton1 = document.createElement('button');
      cellButton1.classList.add('cell');
      boardDiv1.appendChild(cellButton1);
      cellButton1.setAttribute('x', i);
      cellButton1.setAttribute('y', j);
      const cellButton2 = document.createElement('button');
      cellButton2.classList.add('cell2');
      boardDiv2.appendChild(cellButton2);
      cellButton2.setAttribute('x', i);
      cellButton2.setAttribute('y', j);
      cellButton2.setAttribute('value', temp++);
      cellButton1.textContent = `${i}${j}`;
      cellButton1.style.color = '#909692';
      if (
        typeof boardToinsert.board[i][j] === 'object'
        || boardToinsert.board[i][j] === 'hit'
      ) {
        cellButton1.style.backgroundColor = 'blue';
        cellButton1.textContent = '';
      }
      if (boardToAtt.board[i][j] === 'miss') {
        cellButton2.style.backgroundColor = 'red';
        cellButton2.disabled = true;
      } else if (boardToAtt.board[i][j] === 'hit') {
        cellButton2.disabled = true;
        cellButton2.style.backgroundColor = 'green';
      }
      if (board.status(boardToinsert.board) === false) {
        container.appendChild(placeShip1Label);
        placeShip1Label.appendChild(description);
        description.textContent = `Carrier-size: 5-cells
                                  Battleship-size: 4-cells
                                  Cruiser-size: 3-cells
                                  Submarine-size: 3-cells
                                  Destroyer-size: 2-cells`;
        placeShip1Label.appendChild(placeShip1Name);
        placeShip1Label.appendChild(placeShip1CordinatesLabel);
        placeShip1CordinatesLabel.textContent = `Type in two digit number of board's cell
                                                where you want your ship to start`;
        placeShip1Label.appendChild(placeShip1Cordinates);
        placeShip1Label.appendChild(placeShip2CordinatesLabel);
        placeShip2CordinatesLabel.textContent = `Type in two digit number of board's cell
                                                  where you want your ship to end, TIP:
                                                  each ship has how much cells it can take.`;
        placeShip1Label.appendChild(placeShip2Cordinates);
        placeShip1Label.appendChild(placeShipBtn);
        placeShipBtn.textContent = 'Submit';
        placeShip1Cordinates.setAttribute(
          'placeholder',
          '00 - 99',
        );
        placeShip2Cordinates.setAttribute(
          'placeholder',
          '00 - 99',
        );
        cellButton2.disabled = true;
        player1.textContent = `Place your ships Player: ${activePlayer.name}`;
      }

      cellButton2.addEventListener('click', (e) => {
        boardToAtt.recieveAttack(
          Number(e.currentTarget.attributes.x.value),
          Number(e.currentTarget.attributes.y.value),
        );
        if (Game() === false) {
          while (container.firstChild) {
            container.removeChild(container.firstChild);
          }
          player1.style.display = 'none';
          player2.style.display = 'none';
          document.body.appendChild(popModule);
          document.body.appendChild(popModule2);
          popModule.style.visibility = 'visible';
          popModule2.style.visibility = 'visible';
          updateBoards();
          return false;
        }
        players.switchPlayerTurn();
        Createboard();
      });
    }
  }

  if (
    board.status(boardToinsert.board) !== false
    && board.status(boardToAtt.board) === false
    && activePlayer.name !== 'AI'
  ) {
    players.switchPlayerTurn();
    Createboard();
    // activePlayer = players.getActivePlayer();
  }
  if (
    board.status(boardToinsert.board) !== false
    && board.status(boardToAtt.board) !== false
    && activePlayer.name !== 'AI'
  ) {
    return false;
  }
  const cells = document.getElementsByClassName('cell2');
  let computerChoice = Math.floor(Math.random() * cells.length);
  if (
    activePlayer.name === 'AI'
    && board.status(boardToinsert.board) !== false
    && board.status(boardToAtt.board) !== false
  ) {
    while (
      boardToAtt.board[cells[computerChoice].attributes.x.value][
        cells[computerChoice].attributes.y.value
      ] === 'hit'
      || boardToAtt.board[cells[computerChoice].attributes.x.value][
        cells[computerChoice].attributes.y.value
      ] === 'miss'
    ) {
      computerChoice = Math.floor(Math.random() * cells.length);
    }

    cells[computerChoice].click();
  } else if (
    activePlayer.name === 'AI'
    && board.status(boardToinsert.board) === false
    && board.status(boardToAtt.board) !== false
  ) {
    const ships = [carrier, battleship, cruiser, submarine, destroyer];
    while (board.status(boardToinsert.board) === false) {
      let start;
      let end;
      let status;
      computerChoice = Math.floor(Math.random() * cells.length);
      const ship = ships.shift();
      const pointA = [
        Number(cells[computerChoice].attributes.x.value),
        Number(cells[computerChoice].attributes.y.value),
      ];
      const pointB = [];
      pointB.push(pointA[0], pointA[1]);
      const random = Math.floor(Math.random() * 2);
      const temp1 = pointA[random];
      if (pointA[random] + ship.length < 10) {
        pointB[random] = temp1 + ship.length;
      } else {
        pointB[random] = temp1 - ship.length;
      }
      start = pointA;
      end = pointB;

      if (pointB[0] < pointA[0] || pointB[1] < pointA[1]) {
        start = pointB;
        end = pointA;
      }
      if (end[1] > start[1]) {
        for (let i = 0; i < ship.length; i++) {
          if (typeof boardToinsert.board[start[0]][start[1] + i] === 'object') {
            ships.unshift(ship);
            status = false;
            break;
          }
        }
      } else if (end[0] > start[0]) {
        for (let i = 0; i < ship.length; i++) {
          if (typeof boardToinsert.board[start[0] + i][start[1]] === 'object') {
            ships.unshift(ship);
            status = false;
            break;
          }
        }
      }
      if (status === false) {
        continue;
      } else {
        board2.placeShip(ship, pointA, pointB);
      }
    }
    Createboard();
  }
}

placeShipBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const activePlayer = players.getActivePlayer();
  const ships = [carrier, battleship, cruiser, submarine, destroyer];

  let ship;
  const selectedOption = placeShip1Name.options[placeShip1Name.selectedIndex];
  for (let i = 0; i < ships.length; i++) {
    if (ships[i].name === selectedOption.value) {
      ship = ships[i];
      selectedOption.remove(selectedOption[i]);
    }
  }
  if (placeShip1Cordinates.value > 99 || placeShip2Cordinates.value > 99) {
    alert('Cant enter number bigger than 9 try again!');
    const shipOptions = document.createElement('option');
    placeShip1Name.prepend(shipOptions);
    shipOptions.setAttribute('id', 'newOption');
    shipOptions.setAttribute('value', ship.name);
    shipOptions.textContent = ship.name;
    return false;
  }

  let x = Number(placeShip1Cordinates.value[0]);
  let y = Number(placeShip1Cordinates.value[1]);
  let x2 = Number(placeShip2Cordinates.value[0]);
  let y2 = Number(placeShip2Cordinates.value[1]);
  if (x > x2) {
    x2 += ship.length;
    x += 1;
  } else if (x2 > x) {
    x += ship.length;
    x2 += 1;
  } else if (y > y2) {
    y2 += ship.length;
    y += 1;
  } else {
    y += ship.length;
    y2 += 1;
  }
  if (x !== x2 || y !== y2) {
    alert('Cordinates are Invalid try again!');
    const shipOptions = document.createElement('option');
    placeShip1Name.prepend(shipOptions);
    shipOptions.setAttribute('id', 'newOption');
    shipOptions.setAttribute('value', ship.name);
    shipOptions.textContent = ship.name;
    return false;
  }
  if ((activePlayer.name !== playerName1.value && activePlayer.name !== player.value)
    && activePlayer.name !== 'AI') {
    board2.placeShip(
      ship,
      [
        Number(placeShip1Cordinates.value[0]),
        Number(placeShip1Cordinates.value[1]),
      ],
      [
        Number(placeShip2Cordinates.value[0]),
        Number(placeShip2Cordinates.value[1]),
      ],
    );
  } else if (activePlayer.name === playerName1.value || activePlayer.name === player.value) {
    board.placeShip(
      ship,
      [
        Number(placeShip1Cordinates.value[0]),
        Number(placeShip1Cordinates.value[1]),
      ],
      [
        Number(placeShip2Cordinates.value[0]),
        Number(placeShip2Cordinates.value[1]),
      ],
    );
  }
  placeShip1Cordinates.value = '';
  placeShip2Cordinates.value = '';
  Createboard();
});
const createModal = document.createElement('div');
const modalContent = document.createElement('form');
createModal.classList.add('modal-div');
const confirm = document.createElement('button');
const playerName1Label = document.createElement('label');
const playerName2Label = document.createElement('label');
const playerName1 = document.createElement('input');
const playerName2 = document.createElement('input');

document.body.appendChild(createModal);

const exit1 = document.createElement('button');
exit1.textContent = 'X';
createModal.appendChild(modalContent);
modalContent.appendChild(exit1);
modalContent.appendChild(confirm);
modalContent.appendChild(playerName1Label);
modalContent.appendChild(playerName1);
modalContent.appendChild(playerName2Label);
modalContent.appendChild(playerName2);

playerName1Label.textContent = 'PLAYER-1';
playerName2Label.textContent = 'PLAYER-2';
playerName1.setAttribute('placeholder', 'type-name');
playerName2.setAttribute('placeholder', 'type-name');
confirm.textContent = 'CONFIRM';
confirm.setAttribute('id', 'confirm');
modalContent.setAttribute('id', 'modal-content');
createModal.setAttribute('id', 'myModal');

const player1 = document.createElement('h2');
player1.setAttribute('id', 'player1');

const player2 = document.createElement('h2');
player2.setAttribute('id', 'player2');
confirm.addEventListener('click', (event) => {
  players.choosePlayerName();
  player1.textContent = playerName1.value;
  document.body.appendChild(player1);
  document.body.appendChild(player2);
  createModal.style.display = 'none';
  player1.style.display = 'block';
  player2.style.display = 'block';
  Createboard();
  createOption();
  event.preventDefault();
});

const popModule = document.createElement('button');
const popModule2 = document.createElement('button');
document.body.appendChild(popModule);
document.body.appendChild(popModule2);
popModule2.textContent = 'PLAY VS AI';
popModule.textContent = 'PLAYER VS PLAYER';
popModule.addEventListener('click', () => {
  popModule.style.visibility = 'hidden';
  popModule2.style.visibility = 'hidden';
  playerName2.value = '';
  player.value = '';
  playerName1.value = '';
  createModal.style.display = 'block';
});

const createModal2 = document.createElement('div');
const modalContent2 = document.createElement('form');
createModal2.classList.add('modal-div');
const confirm2 = document.createElement('button');
const playerLabel = document.createElement('label');
const player = document.createElement('input');
const exit2 = document.createElement('button');

exit2.textContent = 'X';
document.body.appendChild(createModal2);
createModal2.appendChild(modalContent2);
modalContent2.appendChild(exit2);
exit1.style.width = '24px';
exit2.style.width = '24px';
modalContent2.appendChild(confirm2);
modalContent2.appendChild(playerLabel);
modalContent2.appendChild(player);
playerLabel.textContent = 'PLAYER-1';
confirm2.textContent = 'CONFIRM';
confirm2.setAttribute('id', 'confirm');
modalContent2.setAttribute('id', 'modal-content2');
createModal2.setAttribute('id', 'myModal');

popModule2.addEventListener('click', () => {
  popModule2.style.visibility = 'hidden';
  popModule.style.visibility = 'hidden';
  playerName2.value = '';
  player.value = '';
  playerName1.value = '';
  createModal2.style.display = 'block';
});

confirm2.addEventListener('click', (event) => {
  playerName2.value = 'AI';
  players.choosePlayerName();
  player1.textContent = player.value;
  player1.style.display = 'block';
  player2.style.display = 'block';
  document.body.appendChild(player1);
  document.body.appendChild(player2);
  createModal2.style.display = 'none';

  Createboard();
  createOption();
  event.preventDefault();
});

const imgContainer = document.createElement('div');
const img = document.createElement('div');
document.body.appendChild(imgContainer);
imgContainer.appendChild(img);
img.setAttribute('id', 'img');
imgContainer.setAttribute('id', 'myModal2');
imgContainer.style.display = 'none';
imgContainer.addEventListener('click', () => {
  imgContainer.style.display = 'none';
});
exit1.addEventListener('click', () => {
  createModal.style.display = 'none';
  popModule2.style.visibility = 'visible';
  popModule.style.visibility = 'visible';
});
exit2.addEventListener('click', () => {
  popModule2.style.visibility = 'visible';
  popModule.style.visibility = 'visible';
  createModal2.style.display = 'none';
});
export {
  playerName1,
  playerName2,
  player1,
  player2,
  imgContainer,
  players,
  placeShip1Name,
  player,
  board,
  board2,
};
