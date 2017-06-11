import rootReducer from './reducers'
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
)

export default store