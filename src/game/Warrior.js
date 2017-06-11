import React, {Component} from 'react'
import {CharacterWrap, CharacterIdle, CharacterRunning, CharacterAttack} from '../styles/game'

export default class Warrior extends Component {

  characterState = () => {
    switch(this.props.mood) {
      case 'idle':
        return <CharacterIdle/>
      case 'running':
        return <CharacterRunning/>
      default:
        return <CharacterAttack/>
    }
  }

  render() {
    return <CharacterWrap>
      {this.characterState()}
    </CharacterWrap>
  }
}

