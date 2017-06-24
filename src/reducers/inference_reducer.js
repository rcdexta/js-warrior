import update from 'immutability-helper'
import { LAST_TILE_INDEX } from '../constants/actions'
import ELEMENTS from '../constants/elements'
import Space from '../models/Space'

const LAST_TILE = 8

const computeWarriorSpace = state => {
  const { warrior, tiles } = state
  const opposingTile = warrior.tile + 1
  const space = new Space(opposingTile === LAST_TILE ? null : tiles[opposingTile])
  return update(state, { warrior: { space: { $set: space } } })
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
  tiles[LAST_TILE] = ELEMENTS.E
  return update(state, { tiles: { $set: tiles } })
}

export default (state, payload) => {
  let { gameState } = state
  gameState = computeTiles(gameState)
  gameState = computeWarriorSpace(gameState)
  gameState = computeZombieSpace(gameState)
  if (gameState.warrior.tile === LAST_TILE_INDEX) {
    gameState = update(gameState, { levelCompleted: { $set: true } })
  }
  return update(state, { gameState: { $set: gameState } })
}
