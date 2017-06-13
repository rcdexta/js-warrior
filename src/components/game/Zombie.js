import React, {Component} from 'react'
import {CharacterWrap, ZombieIdle, ZombieAttack} from '../../styles/game'
import {MOOD} from '../../actions/constants'

export default class Zombie extends Component {

  zombieState = () => {
    switch(this.props.mood) {
      case MOOD.ATTACK:
        return <ZombieAttack/>
      default:
        return <ZombieIdle/>
    }
  }

  render() {
    return <CharacterWrap>
      {this.zombieState()}
    </CharacterWrap>
  }
}

