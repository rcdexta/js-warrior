import React, { Component } from 'react'
import { TileDiv } from '../../styles/world'
import FlipMove from 'react-flip-move'
import PropTypes from 'prop-types'
import ELEMENTS from '../../constants/elements'
import {WALK_OUT, WALK_IN} from '../../constants/actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as warriorActions from '../../actions/warrior_actions'

class Tile extends Component {

  onStop = () => {
    if (this.props.movement === WALK_OUT) {
      this.props.actions.walkIn()
    } else if (this.props.movement === WALK_IN) {
      this.props.actions.stopWalking()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.element === ELEMENTS.W && !this.props.movement && nextProps.movement)  {
      this.props.actions.walkOut()
    }
  }

  render() {
    return (
      <TileDiv>
        <FlipMove
          onStart={this.onStart}
          enterAnimation={{
            from: {
              transform: ''
            },
            to: {
              transform: 'translateX(25%)'
            }
          }}
          leaveAnimation={{
            from: {
              transform: ''
            },
            to: {
              transform: 'translateX(100%)'
            }
          }}
          onFinish={this.onStop}
        >
          {this.props.children}
        </FlipMove>
      </TileDiv>
    )
  }
}

Tile.PropTypes = {
  movement: PropTypes.string,
  idx: PropTypes.number
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(warriorActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Tile)
