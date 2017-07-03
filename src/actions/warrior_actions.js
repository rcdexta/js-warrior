import { START_WALKING, STOP_WALKING, WALK_OUT, WALK_IN, WALK, REST, ATTACK} from '../constants/actions'

export const attack = () => ({ type: ATTACK })
export const rest = () => ({type: REST})
export const walk = () => ({type: WALK})
export const startWalking = () => ({type: START_WALKING})
export const walkIn = () => ({type: WALK_IN})
export const walkOut = () => ({type: WALK_OUT})
export const stopWalking = () => ({type: STOP_WALKING})
