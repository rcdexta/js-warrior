import { REST, WALK } from '../actions/constants'
import update from 'immutability-helper'

const defaultState = {
  tile: 0,
  health: 20,
  state: REST
}

const takeRest = state => {
  const newHealth = state.health <= 17 ? state.health + 3 : 20
  return update(state, { health: { $set: newHealth } })
}

const incrementTile = state => {
  return update(state, { tile: { $apply: x => x + 1 } })
}

export default (state = defaultState, payload) => {
  switch (payload.type) {
    case WALK:
      return incrementTile(state)
    case REST:
      return takeRest(state)
    default:
      return state
  }
}
