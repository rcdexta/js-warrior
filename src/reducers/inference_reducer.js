import update from 'immutability-helper'
import { LAST_TILE_INDEX } from '../constants/actions'
import ELEMENTS from '../constants/elements'
import Space from '../models/Space'

const computeWarriorSpace = state => {
  const { warrior, tiles } = state
  const opposingTile = warrior.tile + 1
  const space = new Space(tiles[opposingTile])
  return update(state, { warrior: { space: { $set: space } } })
}

const checkHealth = state => {
  const { zombie, warrior } = state
  if (zombie.tile > -1 && zombie.health <= 0) {
    return update(state, { zombie: { tile: { $set: -1 } } })
  }
  if (warrior.tile < LAST_TILE_INDEX && warrior.health <= 0) {
    return update(state, { gameOver: { $set: true }, warrior: { tile: { $set: -1 } } })
  }

  return state
}

const computeZombieSpace = state => {
  const { zombie, tiles } = state
  const opposingTile = zombie.tile - 1
  const space = new Space(tiles[opposingTile])
  return update(state, { zombie: { space: { $set: space } } })
}

const computeTiles = state => {
  const tiles = new Array(9).fill('')
  tiles[state.warrior.tile] = ELEMENTS.W
  tiles[state.zombie.tile] = ELEMENTS.Z
  tiles[LAST_TILE_INDEX] = ELEMENTS.E
  return update(state, { tiles: { $set: tiles } })
}

export default state => {
  let { gameState } = state
  gameState = computeTiles(gameState)
  gameState = checkHealth(gameState)
  gameState = computeWarriorSpace(gameState)
  gameState = computeZombieSpace(gameState)
  if (gameState.warrior.tile === LAST_TILE_INDEX) {
    gameState = update(gameState, { levelCompleted: { $set: true } })
  }
  return update(state, { gameState: { $set: gameState } })
}
