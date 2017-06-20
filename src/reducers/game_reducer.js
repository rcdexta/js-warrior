const defaultState = {
  tiles: ['W', '', '', 'T', '', '', '', ''],
  level: 1,
  warrior: {
    tile: 0,
    health: 20,
    state: ['walk', 'rest', 'attack']
  },
  enemies: [],
  levelCompleted: false
}

export default (state = defaultState, payload) => {
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
