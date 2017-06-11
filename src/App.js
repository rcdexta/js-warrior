import React, { Component } from 'react';
import './styles/app.css';
import World from './game/World'
import Floor from './game/Floor'

class App extends Component {
  render() {
    return (
      <World>
        <Floor/>
      </World>
    )
  }
}

export default App;
