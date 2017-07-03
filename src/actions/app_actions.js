import { CODE_ERROR, RESET_ERROR, LOG_TURN, CLEAR_LOGS, LOG_ACTION, SET_LEVEL } from '../constants/actions'

export const flagCodeError = (error) => ({ type: CODE_ERROR, content: error })
export const resetError = () => ({ type: RESET_ERROR })
export const logTurn = (turnCount) => ({ type: LOG_TURN, content: turnCount })
export const logAction = (action) => ({ type: LOG_ACTION, content: action })
export const clearLogs = (msg) => ({ type: CLEAR_LOGS })

export const setLevel = (level) => ({type: SET_LEVEL, content: level})