class Warrior {

  constructor(actions) {
    this.actions = actions
  }

  walk() {
    this.actions.startRunning()
  }

  attack() {

  }

  rest() {
    this.actions.rest()
  }

  rescue() {

  }

}

export default Warrior