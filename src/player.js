function Player(name) {
  let activePlayer = name;
  const switchPlayerTurn = () => {
    if (activePlayer === player1.name) {
      activePlayer = player2;
    } else {
      activePlayer = player1;
    }
    return activePlayer.name;
  };
  return { name, switchPlayerTurn };
}
const player1 = Player('Nikola');
const player2 = Player('Luka');
player2.switchPlayerTurn();
player2.switchPlayerTurn();
player1.switchPlayerTurn();
export { Player, player1, player2 };
