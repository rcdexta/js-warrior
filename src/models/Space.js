import ELEMENTS from '../constants/elements'

export default class Space {

  constructor(opposingTile) {
    this.opposingTile = opposingTile
  }

  isEmpty() {
    return this.opposingTile === '' || this.opposingTile === ELEMENTS.E
  }

  isEnemy() {
    return this.opposingTile === ELEMENTS.Z
  }

  isWarrior(){
    return this.opposingTile === ELEMENTS.W
  }

}