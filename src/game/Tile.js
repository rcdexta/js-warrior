import React, { Component } from 'react'
import { TileDiv } from '../styles/game'
import FlipMove from 'react-flip-move'
import { RUN_OUT, START_RUNNING, IDLE, RUN_IN } from '../actions/constants'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as warriorActions from '../actions/warrior_actions'

class Tile extends Component {

  afterTransition = () => {
    if (this.props.action === RUN_OUT) {
      this.props.actions.runIn()
    } else if (this.props.action === RUN_IN) {
      this.props.actions.endRunning()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.action === START_RUNNING) {
      this.props.actions.runOut()
    }
  }

  render() {
    return (
      <TileDiv>
        <FlipMove
          duration={500}
          enterAnimation={{
            from: {
              transform: ''
            },
            to: {
              transform: 'translateX(50%)'
            }
          }}
          leaveAnimation={{
            from: {
              transform: ''
            },
            to: {
              transform: 'translateX(110%)'
            }
          }}
          onFinish={this.afterTransition}
        >
          {this.props.action !== RUN_OUT && this.props.children}
        </FlipMove>
      </TileDiv>
    )
  }
}

Tile.PropTypes = {
  action: PropTypes.string,
  runIn: PropTypes.func
}

Tile.defaultProps = {
  action: IDLE
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(warriorActions, dispatch)
  }
}
export default connect(null, mapDispatchToProps)(Tile)
