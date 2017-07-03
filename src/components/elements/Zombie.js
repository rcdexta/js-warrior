import React, {Component} from 'react'
import {CharacterWrap, ZombieIdle, ZombieAttack} from '../../styles/world'
import {ATTACK, REST} from '../../constants/actions'
import PropTypes from 'prop-types'

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
      <progress value={this.props.health} max={15} className="tertiary"></progress>
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