import {
  playerName1, playerName2, player1, player2, player,
} from './dom';

function createPlayers(name) {
  const players = [
    {
      name,
    },
    {
      name,
    },
  ];
  let activePlayer = players[0];
  const switchPlayerTurn = () => {
    if (activePlayer === players[0]) {
      activePlayer = players[1];
      player1.textContent = `Player: ${activePlayer.name}'s turn`;
    } else {
      activePlayer = players[0];
      player1.textContent = `Player: ${activePlayer.name}'s turn`;
    }
    return activePlayer;
  };
  const getActivePlayer = () => activePlayer;
  const choosePlayerName = () => {
    players[0].name = '';
    players[1].name = '';
    players[0].name = playerName1.value;
    if (playerName1.value === '') {
      players[0].name = player.value;
    }
    players[1].name = playerName2.value;
  };

  return {
    name,
    switchPlayerTurn,
    choosePlayerName,
    getActivePlayer,
  };
}

export { createPlayers };
