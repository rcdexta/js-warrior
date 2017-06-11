import React, { Component } from 'react'
import { WorldContainer } from '../styles/game'
import { FloorDiv } from '../styles/game'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Tile from './Tile'
import Warrior from './Warrior'
import ExitPost from './ExitPost'
import * as warriorActions from '../actions/warrior_actions'

const LAST_TILE_IDX = 8

class World extends Component {
  tileByIndex = idx => {
    const { warrior } = this.props
    if (idx === warrior.currentTile) {
      return <Tile key={idx} action={warrior.tileAction}><Warrior mood={warrior.mood} /></Tile>
    } else if (idx === LAST_TILE_IDX) {
      return <Tile key={idx}><ExitPost /></Tile>
    } else {
      return <Tile key={idx} action={warrior.tileAction} />
    }
  }

  renderTiles = () => {
    const tiles = []
    for (let i = 0; i < 9; i++) {
      tiles.push(this.tileByIndex(i))
    }
    return tiles
  }

  run = () => {
    this.props.actions.startRunning()
  }

  attack = () => {
    this.props.actions.attack()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.warrior.currentTile === LAST_TILE_IDX) {
      alert('LEVEL COMPLETED!!!')
    }
  }

  render() {
    return (
      <div>
        <div className="centered-container">
          <WorldContainer>
            <FloorDiv>
              {this.renderTiles()}
            </FloorDiv>
          </WorldContainer>
        </div>
        <br />
        <button onClick={this.run}>RUN</button>
        <button onClick={this.attack}>ATTACK</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    warrior: state.warriorReducer
  }
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(warriorActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(World)
