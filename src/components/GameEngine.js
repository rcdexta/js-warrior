import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from './Editor'
import { RelativeDiv, SubmitButton, HelpButton, StopButton } from '../styles/engine'
import Warrior from '../models/Warrior'
import Zombie from '../models/Zombie'
import Computer from './Computer'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HelpModal from '../modals/HelpModal'

import * as warriorActions from '../actions/warrior_actions'
import * as zombieActions from '../actions/zombie_actions'
import * as appActions from '../actions/app_actions'

const defaultLevelCode = `
class Player {

  playTurn(warrior) {
     //this method gets called for every turn
     //uncomment next line and call appropriate method
     //warrior.????()
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
    const warrior = new Warrior(actions, gameState.warrior.space, gameState.warrior.health)
    const zombie = new Zombie(actions, gameState.zombie.space)
    this.state = { code: defaultLevelCode, warrior: warrior, zombie: zombie, gameTimer: null, turnCount: 0, showHelp: false, orchestrating: false }
  }

  showHelp = () => {
    this.setState({ showHelp: true })
  }

  closeModal = () => {
    this.setState({ showHelp: false })
  }

  updateCode = code => {
    this.setState({ code: code })
  }

  updatePlayerSpaces = gameState => {
    const { warrior, zombie } = this.state
    warrior.setSpace(gameState.warrior.space)
    warrior.setHealth(gameState.warrior.health)
    zombie.setSpace(gameState.zombie.space)
    this.setState({ warrior: warrior, zombie: zombie })
  }

  componentWillReceiveProps(nextProps) {
    const { gameState } = this.props
    if (
      nextProps.gameState.levelCompleted !== gameState.levelCompleted ||
      (nextProps.gameState.gameOver && nextProps.gameState.gameOver !== gameState.gameOver)
    ) {
      this.props.actions.stopWalking()
      this.stopOrchestration()
    }
    this.updatePlayerSpaces(nextProps.gameState)
  }

  resetAppState = () => {
    const { resetError, clearLogs } = this.props.actions
    resetError()
    clearLogs()
  }

  stopOrchestration = () => {
    this.setState({ orchestrating: false, turnCount: 0 })
    this.resetAppState()
    clearInterval(this.state.gameTimer)
  }

  orchestrate = () => {
    const { warrior, zombie, code } = this.state

    try {
      Player = eval('(' + code + ')')
    } catch (e) {
      if (e instanceof SyntaxError) {
        this.props.actions.flagCodeError(e.message)
        return
      }
    }

    this.resetAppState()
    this.setState({ orchestrating: true })

    const player = new Player()
    const gameTimer = setInterval(() => {
      const { turnCount } = this.state
      try {
        if (turnCount % 2 === 0) {
          this.props.actions.logTurn(turnCount / 2 + 1)
          player.playTurn(warrior)
        } else {
          computer.playTurn(zombie)
        }
      } catch (e) {
        if (e instanceof TypeError) {
          this.props.actions.flagCodeError(e.message)
          this.stopOrchestration()
        }
      }
      this.setState({ turnCount: turnCount + 1 })
    }, 700)
    this.setState({ gameTimer: gameTimer })
  }

  render() {
    const { orchestrating } = this.state
    return (
      <RelativeDiv>
        <SubmitButton onClick={this.orchestrate}>{orchestrating ? <div className="spinner-donut secondary" /> : 'SUBMIT'}</SubmitButton>
        {orchestrating && <StopButton onClick={this.stopOrchestration}>STOP</StopButton>}
        <HelpButton onClick={this.showHelp}>HELP</HelpButton>
        <Editor code={this.state.code} onCodeChange={this.updateCode} />
        <HelpModal open={this.state.showHelp} onClose={this.closeModal} />
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
