import warriorReducer from './warrior_reducer'
import zombieReducer from './zombie_reducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  warriorReducer,
  zombieReducer
})

export default rootReducer
