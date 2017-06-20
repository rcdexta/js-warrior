import update from 'immutability-helper'
import { LAST_TILE_INDEX } from '../actions/constants'

const defaultState = {
  tiles: ['W', '', '', 'T', '', '', '', ''],
  level: 1,
  levelCompleted: false
}

export default (state, payload) => {
  const warrior = state.warriorReducer
  if (warrior.tile === LAST_TILE_INDEX) {
    return update(state, { levelCompleted: { $set: true } })
  }
  return { ...defaultState, ...state }
}
