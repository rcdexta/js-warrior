import React, { Component } from 'react'
import { TileDiv } from '../../styles/world'
import FlipMove from 'react-flip-move'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as warriorActions from '../../actions/warrior_actions'
import {REST} from '../../actions/constants'

class Tile extends Component {

  afterTransition = () => {
  }

  componentDidUpdate(prevProps) {
  }

  render() {
    return (
      <TileDiv>
        {/*<FlipMove*/}
          {/*enterAnimation={{*/}
            {/*from: {*/}
              {/*transform: 'transition-delay: 2s'*/}
            {/*},*/}
            {/*to: {*/}
              {/*transform: 'translateX(50%)'*/}
            {/*}*/}
          {/*}}*/}
          {/*leaveAnimation={{*/}
            {/*from: {*/}
              {/*transform: ''*/}
            {/*},*/}
            {/*to: {*/}
              {/*transform: 'translateX(110%)'*/}
            {/*}*/}
          {/*}}*/}
          {/*onFinish={this.afterTransition}*/}
        {/*>*/}
          {this.props.children}
        {/*</FlipMove>*/}
      </TileDiv>
    )
  }
}

Tile.PropTypes = {
  action: PropTypes.string
}

Tile.defaultProps = {
  action: REST
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(warriorActions, dispatch)
})

export default connect(null, mapDispatchToProps)(Tile)
