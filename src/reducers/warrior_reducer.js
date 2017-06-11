import { START_RUNNING, END_RUNNING, RUN_OUT, RUN_IN, ATTACK, MOOD } from '../actions/constants'

const initialState = {
  currentTile: 0,
  mood: MOOD.IDLE,
  tileAction: MOOD.IDLE
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
    case ATTACK:
      return { ...state, mood: MOOD.ATTACK }
    default:
      return state
  }
}
