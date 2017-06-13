import React, {Component} from 'react'
import {CharacterWrap, WarriorIdle, WarriorRunning, WarriorAttack} from '../../styles/game'
import {MOOD} from '../../actions/constants'

export default class Warrior extends Component {

  warriorState = () => {
    switch(this.props.mood) {
      case MOOD.RUNNING:
        return <WarriorRunning/>
      case MOOD.ATTACK:
        return <WarriorAttack/>
      default:
        return <WarriorIdle/>
    }
  }

  render() {
    return <CharacterWrap>
      {this.warriorState()}
    </CharacterWrap>
  }
}

