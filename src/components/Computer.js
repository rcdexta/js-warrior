class Computer {
  playTurn(zombie) {
    if (zombie.feel().isWarrior()) {
      zombie.attack()
    }
  }
}

export default Computer
