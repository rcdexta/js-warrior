import React, {Component} from 'react'
import {CharacterWrap, ZombieIdle, ZombieAttack} from '../../styles/world'

export default class Zombie extends Component {

  zombieState = () => {
    switch(this.props.mood) {
      case 'ATTACK':
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

