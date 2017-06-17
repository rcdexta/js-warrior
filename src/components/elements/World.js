import React, { Component } from 'react'
import {WorldContainer} from '../../styles/world'
import { FloorDiv } from '../../styles/world'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tile from './Tile'
import Warrior from './Warrior'
import Zombie from './Zombie'
import ExitPost from './ExitPost'
import * as warriorActions from '../../actions/warrior_actions'
import * as zombieActions from '../../actions/zombie_actions'

const LAST_TILE_IDX = 8

class World extends Component {
  buildTile = idx => {
    const { warrior, zombie } = this.props
    if (idx === warrior.currentTile) {
      return <Tile key={idx} action={warrior.tileAction}><Warrior mood={warrior.mood} /></Tile>
    } else if (idx === zombie.currentTile) {
      return <Tile key={idx}><Zombie mood={zombie.mood} /></Tile>
    } else if (idx === LAST_TILE_IDX) {
      return <Tile key={idx}><ExitPost /></Tile>
    } else {
      return <Tile key={idx} action={warrior.tileAction} />
    }
  }

  renderTiles = () => {
    const tiles = []
    for (let idx = 0; idx < 9; idx++) {
      tiles.push(this.buildTile(idx))
    }
    return tiles
  }

  run = () => {
    this.props.actions.startRunning()
  }

  attack = () => {
    this.props.actions.attack()
  }

  zombiefy = () => {
    this.props.actions.zombieAttack()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.warrior.currentTile === LAST_TILE_IDX) {
      alert('LEVEL COMPLETED!!!')
    }
  }

  render() {
    return (
      <div className="centered-container">
        <WorldContainer>
          <FloorDiv>
            {this.renderTiles()}
          </FloorDiv>
        </WorldContainer>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  warrior: state.warriorReducer,
  zombie: state.zombieReducer
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...warriorActions, ...zombieActions }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(World)
