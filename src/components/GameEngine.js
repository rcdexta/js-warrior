import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Editor from './Editor'
import { RelativeDiv, SubmitButton } from '../styles/engine'
import Warrior from './players/Warrior'
import Player from './Player'
import { transform } from 'babel-standalone/babel'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as warriorActions from '../actions/warrior_actions'
import * as zombieActions from '../actions/zombie_actions'

const defaultLevelCode = `
class Player {
  playTurn(warrior) {
     //write your code here
     //this method gets called for every turn
     warrior.walk()
  }
}
`

class GameEngine extends Component {

  constructor(props, context) {
    super(props, context)
    const { dispatch } = this.context.store
    const actions = bindActionCreators(warriorActions, dispatch)
    const warrior = new Warrior(actions)
    this.state = { code: defaultLevelCode, warrior: warrior, gameTimer: null }
  }

  updateCode = code => {
    console.log('code update')
    this.setState({ code: code })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.levelCompleted) {
      clearInterval(this.state.gameTimer)
    }
  }

  orchestrate = () => {
    const { warrior, code } = this.state
    // const submittedCode = transform(code, { presets: ['es2015'] }).code;
    // const player = eval(submittedCode)
    const player = new Player()
    const gameTimer = setInterval(() => {
      player.playTurn(warrior)
    }, 500)
    this.setState({gameTimer: gameTimer})
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

GameEngine.propTypes = {}

GameEngine.contextTypes = {
  store: PropTypes.object
}

const mapStateToProps = state => ({
  warrior: state.warriorReducer,
  levelCompleted: state.levelCompleted
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...warriorActions, ...zombieActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(GameEngine)
