import { REST, START_WALKING, STOP_WALKING, WALK_IN, WALK, WALK_OUT, ATTACK, ZOMBIE_ATTACK, SET_LEVEL } from '../constants/actions'
import update from 'immutability-helper'

const defaultWarriorState = {
  tile: 0,
  health: 21,
  state: REST,
  space: undefined,
  movement: undefined,
  nextTile: -1
}

const defaultZombieState = {
  tile: -1,
  health: 15,
  state: REST,
  space: undefined
}

const defaultState = {
  level: 1,
  levelCompleted: false,
  gameOver: false,
  warrior: defaultWarriorState,
  zombie: defaultZombieState
}

const updateLevel = (state, { content }) => {
  const newLevel = content
  state = update(state, { level: { $set: newLevel } })
  state = update(state, { warrior: { $set: defaultWarriorState } })
  state = update(state, { levelCompleted: { $set: false } })
  if (newLevel === 2) {
    return update(state, { zombie: { tile: { $set: 4 } } })
  } else if (newLevel === 3) {
    return update(state, { zombie: { tile: { $set: 3 }, health: { $set: 15 }, state: { $set: REST } } })
  } else {
    return state
  }
}

const takeRest = state => {
  const { warrior } = state
  const newHealth = warrior.health <= 18 ? warrior.health + 3 : 21
  return update(state, { warrior: { health: { $set: newHealth }, state: { $set: REST } } })
}

const attack = state => {
  const { warrior } = state
  const damage = warrior.space.isEnemy() ? 3 : 0
  return update(state, { warrior: { state: { $set: ATTACK } }, zombie: { health: { $apply: x => x - damage } } })
}

const zombieAttack = state => {
  const { zombie } = state
  const damage = zombie.space.isWarrior() ? 3 : 0
  return update(state, { zombie: { state: { $set: ATTACK } }, warrior: { health: { $apply: x => x - damage } } })
}

const moveWarrior = state => {
  return update(state, {
    warrior: {
      tile: {
        $apply: x => {
          return state.warrior.space.isEmpty() ? state.warrior.nextTile : x
        }
      },
      movement: { $set: WALK_IN },
      nextTile: { $set: -1 }
    }
  })
}

const startWalking = state => {
  return update(state, { warrior: { state: { $set: WALK }, movement: { $set: WALK_OUT } } })
}

const stopWalking = state => {
  return update(state, { warrior: { state: { $set: REST }, movement: { $set: undefined } } })
}

const walkOut = state => {
  return update(state, { warrior: { nextTile: { $set: state.warrior.tile + 1 }, tile: { $set: -1 } } })
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case START_WALKING:
      return state.warrior.space.isEmpty() ? startWalking(state) : state
    case WALK_OUT:
      return walkOut(state)
    case WALK_IN:
      return moveWarrior(state, action)
    case STOP_WALKING:
      return stopWalking(state)
    case REST:
      return takeRest(state)
    case ATTACK:
      return attack(state)
    case ZOMBIE_ATTACK:
      return zombieAttack(state)
    case SET_LEVEL:
      return updateLevel(state, action)
    default:
      return state
  }
}
