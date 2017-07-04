import React, {Component} from 'react'
import {CharacterWrap, ZombieIdle, ZombieAttack, HealthScroller} from '../../styles/world'
import {ATTACK, REST} from '../../constants/actions'
import PropTypes from 'prop-types'

export default class Zombie extends Component {

  state = {healthChanged: false, healthDiff: undefined}

  zombieState = () => {
    switch(this.props.state) {
      case ATTACK:
        return <ZombieAttack/>
      default:
        return <ZombieIdle/>
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