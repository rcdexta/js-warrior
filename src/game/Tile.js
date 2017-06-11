import React, {Component} from 'react'
import {TileDiv} from '../styles/game'

export default class Tile extends Component {
  render() {
    return <TileDiv>
      {this.props.children}
    </TileDiv>
  }
}