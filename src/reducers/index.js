import inferenceReducer from './inference_reducer'
import elementsReducer from './elements_reducer'
import { combineReducers } from 'redux'
import reduceReducers from 'reduce-reducers'

const combinedReducers = combineReducers({ gameState: elementsReducer })
const rootReducer = reduceReducers(combinedReducers, inferenceReducer)

export default rootReducer
