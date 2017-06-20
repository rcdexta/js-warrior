import { START_RUNNING, RUN_OUT, RUN_IN, END_RUNNING, REST, ATTACK } from './constants'

export const startRunning = () => ({ type: START_RUNNING })
export const runOut = () => ({ type: RUN_OUT })
export const runIn = () => ({ type: RUN_IN })
export const endRunning = () => ({ type: END_RUNNING })
export const attack = () => ({ type: ATTACK })
export const rest = () => ({type: REST})
