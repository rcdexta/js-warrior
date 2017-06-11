import React, {Component} from 'react'
import {Canvas} from '../styles/game'

export default class World extends Component {

  render() {
    return <div className="centered-container">
          <Canvas>
            {this.props.children}
          </Canvas>
      </div>
  }
}