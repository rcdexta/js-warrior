export default class Warrior {

  constructor(actions, space, health) {
    this.actions = actions
    this.space = space
    this.currentHealth = health
  }

  setSpace(space) {
    this.space = space
  }

  setHealth(health) {
    this.currentHealth = health
  }

  health() {
    return this.currentHealth
  }

  walk() {
    this.actions.logAction('Walk forward')
    this.actions.startWalking()
  }

  attack() {
    this.actions.logAction('Attack!!')
    this.actions.attack()
  }

  feel() {
    return this.space
  }

  rest() {
    this.actions.logAction('Take rest...')
    this.actions.rest()
  }

  rescue() {

  }



}
