import { CODE_ERROR, RESET_ERROR } from '../constants/actions'

export const flagCodeError = (error) => ({ type: CODE_ERROR, content: error })
export const resetError = () => ({ type: RESET_ERROR })
