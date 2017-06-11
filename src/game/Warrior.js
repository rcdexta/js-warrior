import React, {Component} from 'react'
import {CharacterWrap, CharacterIdle, CharacterRunning, CharacterAttack} from '../styles/game'
import {MOOD} from '../actions/constants'

export default class Warrior extends Component {

  characterState = () => {
    switch(this.props.mood) {
      case MOOD.RUNNING:
        return <CharacterRunning/>
      case MOOD.ATTACK:
        return <CharacterAttack/>
      default:
        return <CharacterIdle/>
    }
  }

  render() {
    return <CharacterWrap>
      {this.characterState()}
    </CharacterWrap>
  }
}

