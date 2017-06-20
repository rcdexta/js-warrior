import { START_RUNNING, END_RUNNING, RUN_OUT, RUN_IN, ATTACK, REST, MOOD } from '../actions/constants'
import update from 'immutability-helper'

const initialState = {
  currentTile: 0,
  health: 20,
  mood: MOOD.IDLE,
  tileAction: MOOD.IDLE
}

const takeRest = state => {
  const newHealth = state.health <= 17 ? state.health + 3 : 20
  return update(state, { health: { $set: newHealth } })
}

export default (state = initialState, payload) => {
  switch (payload.type) {
    case START_RUNNING:
      return { ...state, tileAction: payload.type, mood: MOOD.RUNNING }
    case RUN_OUT:
      return { ...state, tileAction: payload.type, mood: MOOD.RUNNING }
    case RUN_IN:
      return { ...state, tileAction: payload.type, currentTile: state.currentTile + 1, mood: MOOD.RUNNING }
    case END_RUNNING:
      return { ...state, tileAction: payload.type, mood: MOOD.IDLE }
    case REST:
      return takeRest(state)
    case ATTACK:
      return { ...state, mood: MOOD.ATTACK }
    default:
      return state
  }
}
