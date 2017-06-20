import gamePlayReducer from './game_play_reducer'
import warriorReducer from './warrior_reducer'
import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

const combinedReducers = combineReducers({ warriorReducer })
const rootReducer = reduceReducers(combinedReducers, gamePlayReducer)

export default rootReducer
