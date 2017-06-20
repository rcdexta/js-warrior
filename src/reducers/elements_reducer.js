import { REST, WALK, ATTACK } from '../constants/actions'
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
  return update(state, { warrior: { state: { $set: ATTACK } } })
}

const incrementTile = state => {
  return update(state, {
    warrior: {
      tile: {
        $apply: x => {
          return state.tiles[x + 1] === '' ? x + 1 : x
        }
      }
    }
  })
}

export default (state = defaultState, payload) => {
  switch (payload.type) {
    case WALK:
      return incrementTile(state)
    case REST:
      return takeRest(state)
    case ATTACK:
      return attack(state)
    default:
      return state
  }
}
