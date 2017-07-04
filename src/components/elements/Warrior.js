import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {CharacterWrap, WarriorIdle, WarriorWalking, WarriorAttack, HealthScroller} from '../../styles/world'
import {WALK, ATTACK, REST} from '../../constants/actions'

export default class Warrior extends Component {

  state = {healthChanged: false, healthDiff: undefined}

  warriorState = () => {
    switch(this.props.state) {
      case WALK:
        return <WarriorWalking/>
      case ATTACK:
        return <WarriorAttack/>
      default:
        return <WarriorIdle/>
    }
  }

  componentWillReceiveProps(nextProps) {
    const currentHealth = this.props.health
    const newHealth = nextProps.health
    if (currentHealth !== newHealth) {
      const diff = Math.abs(currentHealth - newHealth)
      const healthDiff = newHealth < currentHealth ? `-${diff}` : `+${diff}`
      this.setState({healthChanged: true, healthDiff: healthDiff})
    } else {
      this.setState({healthChanged: false})
    }
  }

  render() {
    const {healthChanged, healthDiff} = this.state
    return <CharacterWrap>
      {healthChanged && <HealthScroller>{healthDiff}</HealthScroller>}
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