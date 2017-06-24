export default class Zombie {

  constructor(actions, space) {
    this.actions = actions
    this.space = space
  }

  setSpace(space) {
    this.space = space
  }

  attack() {
    this.actions.zombieAttack()
  }

  feel() {
    return this.space
  }

}
