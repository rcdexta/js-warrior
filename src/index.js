import React from 'react'
import ReactDOM from 'react-dom'
import Router from './Router'
import { Provider } from 'react-redux'
import store from './store'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
