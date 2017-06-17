class Warrior {

  constructor(actions) {
    this.actions = actions
  }

  walk() {
    this.actions.startRunning()
  }

}

export default Warrior