import { ZOMBIE_ATTACK, MOOD } from '../actions/constants'

const initialState = {
  currentTile: -1,
  mood: MOOD.IDLE,
  tileAction: MOOD.IDLE
}

export default (state = initialState, payload) => {
  switch (payload.type) {
    case ZOMBIE_ATTACK:
      return { ...state, mood: MOOD.ATTACK }
    default:
      return state
  }
}
