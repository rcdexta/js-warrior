import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from './Editor'
import { RelativeDiv, SubmitButton } from '../styles/engine'
import Warrior from '../models/Warrior'
import Zombie from '../models/Zombie'
import Computer from './Computer'
import { transform } from 'babel-standalone/babel'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as warriorActions from '../actions/warrior_actions'
import * as zombieActions from '../actions/zombie_actions'
import * as appActions from '../actions/app_actions'

const defaultLevelCode = `
class Player {
  playTurn(warrior) {
     //write your code here
     //this method gets called for every turn
     warrior.walk()
  }
}
`

let Player = null
const computer = new Computer()

class GameEngine extends Component {
  constructor(props, context) {
    super(props, context)
    const { dispatch } = this.context.store
    const { gameState } = this.props
    const actions = bindActionCreators({ ...warriorActions, ...zombieActions, ...appActions }, dispatch)
    const warrior = new Warrior(actions, gameState.warrior.space)
    const zombie = new Zombie(actions, gameState.zombie.space)
    this.state = { code: defaultLevelCode, warrior: warrior, zombie: zombie, gameTimer: null, turnCount: 0 }
  }

  updateCode = code => {
    this.setState({ code: code })
  }

  updatePlayerSpaces = gameState => {
    const { warrior, zombie } = this.state
    warrior.setSpace(gameState.warrior.space)
    zombie.setSpace(gameState.zombie.space)
    this.setState({ warrior: warrior, zombie: zombie })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameState.levelCompleted) {
      clearInterval(this.state.gameTimer)
    }
    this.updatePlayerSpaces(nextProps.gameState)
  }

  resetAppState = () => {
    const { resetError, clearLogs } = this.props.actions
    resetError()
    clearLogs()
  }

  orchestrate = () => {
    const { warrior, zombie, code } = this.state
    this.resetAppState()

    try {
      Player = eval(code)
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.props.actions.flagCodeError(e.message)
        return
      }
    }

    const player = new Player()
    const gameTimer = setInterval(() => {
      const { turnCount } = this.state
      try {
        if (turnCount % 2 == 0) {
          this.props.actions.logTurn(turnCount/2+1)
          player.playTurn(warrior)
        } else {
          computer.playTurn(zombie)
        }
      } catch (e) {
        if (e instanceof TypeError) {
          this.props.actions.flagCodeError(e.message)
          clearInterval(this.state.gameTimer)
        }
      }
      this.setState({ turnCount: turnCount + 1 })
    }, 500)
    this.setState({ gameTimer: gameTimer })
  }

  render() {
    return (
      <RelativeDiv>
        <SubmitButton onClick={this.orchestrate}>SUBMIT</SubmitButton>
        <Editor code={this.state.code} onCodeChange={this.updateCode} />
      </RelativeDiv>
    )
  }
}

GameEngine.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = state => ({
  gameState: state.gameState
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...warriorActions, ...zombieActions, ...appActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GameEngine)
