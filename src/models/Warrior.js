export default class Warrior {

  constructor(actions, space) {
    this.actions = actions
    this.space = space
  }

  setSpace(space) {
    this.space = space
  }

  walk() {
    this.actions.walk()
  }

  attack() {
    this.actions.attack()
  }

  feel() {
    return this.space
  }

  rest() {
    this.actions.rest()
  }

  rescue() {

  }



}
