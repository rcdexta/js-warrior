class Player {
  playTurn(warrior) {
    if (warrior.feel().isEnemy()) {
      warrior.attack()
    } else {
      warrior.walk()
    }
  }
}

export default Player
