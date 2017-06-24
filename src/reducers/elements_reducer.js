import { REST, WALK, ATTACK, ZOMBIE_ATTACK } from '../constants/actions'
import update from 'immutability-helper'

const defaultState = {
  level: 1,
  levelCompleted: false,
  warrior: {
    tile: 0,
    health: 20,
    state: REST,
    space: undefined
  },
  zombie: {
    tile: 4,
    health: 10,
    state: REST,
    space: undefined
  }
}

const takeRest = state => {
  const { warrior } = state
  const newHealth = warrior.health <= 17 ? warrior.health + 3 : 20
  return update(state, { warrior: { health: { $set: newHealth } } })
}

const attack = state => {
  const { warrior } = state
  const damage = warrior.space.isEnemy() ? 4 : 0
  return update(state, { warrior: { state: { $set: ATTACK } }, zombie: { health: { $apply: x => x - damage } } })
}

const zombieAttack = state => {
  const { zombie } = state
  const damage = zombie.space.isWarrior() ? 2 : 0
  return update(state, { zombie: { state: { $set: ATTACK } }, warrior: { health: { $apply: x => x - damage } } })
}

const moveWarrior = state => {
  return update(state, {
    warrior: {
      tile: {
        $apply: x => {
          return state.warrior.space.isEmpty() ? x + 1 : x
        }
      }
    }
  })
}

export default (state = defaultState, payload) => {
  switch (payload.type) {
    case WALK:
      return moveWarrior(state)
    case REST:
      return takeRest(state)
    case ATTACK:
      return attack(state)
    case ZOMBIE_ATTACK:
      return zombieAttack(state)
    default:
      return state
  }
}
