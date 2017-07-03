import inferenceReducer from './inference_reducer'
import elementsReducer from './elements_reducer'
import appReducer from './app_reducer'
import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

const combinedReducers = combineReducers({ gameState: elementsReducer, appState: appReducer })
const rootReducer = reduceReducers(combinedReducers, inferenceReducer)

export default rootReducer
