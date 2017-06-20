import React, {Component} from 'react'
import {CharacterWrap, ZombieIdle, ZombieAttack} from '../../styles/world'
import {ATTACK, REST} from '../../constants/actions'

export default class Zombie extends Component {

  zombieState = () => {
    switch(this.props.state) {
      case ATTACK:
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

Zombie.propTypes = {
  state: PropTypes.string
}

Zombie.defaultProps = {
  state: REST
}