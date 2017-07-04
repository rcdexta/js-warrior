import React, { Component } from 'react'
import App from './components/App'

import { BrowserRouter as ReactRouter, Route } from 'react-router-dom'

export default class Router extends Component {
  render() {
    return (
      <ReactRouter>
        <Route path="/js-warrior" exact component={App} />
        <Route path="/" exact component={App} />
      </ReactRouter>
    )
  }
}
