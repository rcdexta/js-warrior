import { CODE_ERROR, RESET_ERROR } from '../constants/actions'
import update from 'immutability-helper'

const defaultState = {
  errors: []
}

const addError = (state, { content }) => {
  return update(state, { errors: { $push: [content] } })
}

const clearError = state => {
  return update(state, { errors: { $set: [] } })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CODE_ERROR:
      return addError(state, action)
    case RESET_ERROR:
      return clearError(state)
    default:
      return state
  }
}
