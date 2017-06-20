import { WALK, REST, ATTACK} from './constants'

export const attack = () => ({ type: ATTACK })
export const rest = () => ({type: REST})
export const walk = () => ({type: WALK})
