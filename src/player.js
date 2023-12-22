function Player(name) {
  let activePlayer = name;
  const switchPlayerTurn = () => {
    if (activePlayer.name === player1.name) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
    return activePlayer.name;
  };

  return {
    name,
    switchPlayerTurn,
    get activePlayer() {
      return activePlayer;
    },
  };
}
const player1 = Player('Nikola');
const player2 = Player('Luka');
player2.switchPlayerTurn();
player2.switchPlayerTurn();
player1.switchPlayerTurn();
console.log(player1.activePlayer);
player2.switchPlayerTurn();
console.log(player2.activePlayer)
export { Player, player1, player2 };
