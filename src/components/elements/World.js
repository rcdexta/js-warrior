import React, { Component } from 'react'
import { WorldContainer } from '../../styles/world'
import { FloorDiv } from '../../styles/world'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tile from './Tile'
import Warrior from './Warrior'
import { Flex, Box } from 'grid-styled'
import ELEMENTS from '../../constants/elements'
import { LogoImg, LevelSpan, HelpSpan } from '../../styles/world'
import LogoPng from '../../images/logo.png'
import Zombie from './Zombie'
import HealthMeter from './HealthMeter'
import ExitPost from './ExitPost'
import LevelModal from '../../modals/LevelModal'
import GameOverModal from '../../modals/GameOverModal'
import * as warriorActions from '../../actions/warrior_actions'
import * as zombieActions from '../../actions/zombie_actions'
import * as appActions from '../../actions/app_actions'

const LAST_TILE_IDX = 8

class World extends Component {

  state = { showLevelModal: false, showGameOverModal: false }

  closeModal = () => {
    this.setState({ showLevelModal: false })
  }

  gotoNextLevel = () => {
    const { level } = this.props.gameState
    const { resetError, clearLogs, setLevel } = this.props.actions
    this.closeModal()
    resetError()
    clearLogs()
    setLevel(level + 1)
  }

  buildTile = idx => {
    const { warrior, zombie } = this.props.gameState
    if (idx === warrior.tile) {
      return <Tile key={idx} element={ELEMENTS.W} idx={idx} movement={warrior.movement}><Warrior {...warrior} /></Tile>
    } else if (idx === zombie.tile) {
      return <Tile key={idx} ><Zombie {...zombie} /></Tile>
    } else if (idx === LAST_TILE_IDX) {
      return <Tile key={idx}><ExitPost /></Tile>
    } else {
      return <Tile key={idx} movement={warrior.movement}/>
    }
  }

  renderTiles = () => {
    const tiles = []
    for (let idx = 0; idx < 9; idx++) {
      tiles.push(this.buildTile(idx))
    }
    return tiles
  }

  componentWillReceiveProps(nextProps) {
    const {gameState} = this.props
    if (nextProps.gameState.levelCompleted  && nextProps.gameState.levelCompleted != gameState.levelCompleted) {
      this.setState({ showLevelModal: true })
    } else if (nextProps.gameState.gameOver && nextProps.gameState.gameOver != gameState.gameOver) {
      this.setState({ showGameOverModal: true })
    }
  }

  render() {
    const { level } = this.props.gameState
    return (
      <div>
        <header>
          <Flex wrap>
            <Box width={[1, 1 / 2]}>
              <a href="/"><LogoImg src={LogoPng} /></a>
            </Box>
            <Box width={[1, 1 / 2]} style={{ alignItems: 'center', display: 'flex' }}>
              <LevelSpan>Level {level}</LevelSpan>
            </Box>
          </Flex>
        </header>
        <div className="centered-container">
          <WorldContainer>
            <HealthMeter />
            <FloorDiv>
              {this.renderTiles()}
            </FloorDiv>
          </WorldContainer>
        </div>
        <LevelModal open={this.state.showLevelModal} onClose={this.gotoNextLevel} />
        <GameOverModal open={this.state.showGameOverModal} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  gameState: state.gameState
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...warriorActions, ...zombieActions, ...appActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(World)
