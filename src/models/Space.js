import ELEMENTS from '../constants/elements'

export default class Space {

  constructor(nextElement) {
    this.nextElement = nextElement
  }

  isEmpty() {
    return this.nextElement === ELEMENTS.E
  }

  isEnemy() {
    return this.nextElement === ELEMENTS.Z
  }

}