import { CODE_ERROR, RESET_ERROR, LOG_TURN, CLEAR_LOGS, LOG_ACTION } from '../constants/actions'
import update from 'immutability-helper'

const defaultState = {
  errors: [],
  logs: [],
  currentTurn: 0,
  foul: false,
  turnCheck: {}
}

const addError = (state, { content }) => {
  return update(state, { errors: { $push: [content] } })
}

const clearError = state => {
  return update(state, { errors: { $set: [] } })
}

const logTurn = (state, { content }) => {
  return update(state, { currentTurn: { $set: content } })
}

const logAction = (state, { content }) => {
  if (state.turnCheck[state.currentTurn]) {
    state = update(state, { foul: { $set: true } })
    return addError(state, { content: 'A turn cannot have more than one warrior action!' })
  }
  return update(state, {
    logs: { $push: [`[Turn${state.currentTurn}] ${content}`] },
    turnCheck: { $merge: { [state.currentTurn]: true } }
  })
}

const clearLogs = state => {
  return update(state, { logs: { $set: [] }, currentTurn: { $set: 0 }, turnCheck: { $set: {} }, foul: { $set: false } })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CODE_ERROR:
      return addError(state, action)
    case RESET_ERROR:
      return clearError(state)
    case LOG_TURN:
      return logTurn(state, action)
    case LOG_ACTION:
      return logAction(state, action)
    case CLEAR_LOGS:
      return clearLogs(state)
    default:
      return state
  }
}
