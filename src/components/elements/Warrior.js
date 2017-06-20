import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {CharacterWrap, WarriorIdle, warriorWalking, WarriorAttack} from '../../styles/world'
import {WALK, ATTACK, REST} from '../../actions/constants'

export default class Warrior extends Component {

  warriorState = () => {
    switch(this.props.state) {
      case WALK:
        return <warriorWalking/>
      case ATTACK:
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

Warrior.propTypes = {
  state: PropTypes.string
}

Warrior.defaultProps = {
  state: REST
}