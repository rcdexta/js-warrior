import React, {Component} from 'react'
import Tile from './Tile'
import Warrior from './Warrior'
import ExitPost from './ExitPost'
import {FloorDiv} from '../styles/game'

export default class Floor extends Component {
  render() {
    return <FloorDiv>
      <Tile><Warrior/></Tile>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile/>
      <Tile><ExitPost/></Tile>
    </FloorDiv>
  }
}