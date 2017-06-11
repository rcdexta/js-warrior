import React, { Component } from 'react';
// import './styles/mini.css';
import './styles/app.css';
import World from './game/World'
import Warrior from './game/Warrior'
import ExitPost from './game/ExitPost'
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
