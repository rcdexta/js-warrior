class Warrior {

  constructor(actions) {
    this.actions = actions
  }

  walk() {
    this.actions.walk()
  }

  attack() {
    this.actions.attack()
  }

  rest() {
    this.actions.rest()
  }

  rescue() {

  }

}

export default Warrior