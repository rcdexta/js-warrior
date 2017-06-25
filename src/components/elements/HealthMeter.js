import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { HealthContainer, HeartImg, HealthText } from '../../styles/world'
import HeartPng from '../../images/heart.png'
import { connect } from 'react-redux'

class HealthMeter extends Component {
  render() {
    return (
      <HealthContainer>
        <HeartImg src={HeartPng} />
        <HealthText>{this.props.warrior.health}</HealthText>
      </HealthContainer>
    )
  }
}

HealthMeter.propTypes = {}
HealthMeter.defaultProps = {}

const mapStateToProps = state => ({
  warrior: state.gameState.warrior
})

export default connect(mapStateToProps, null)(HealthMeter)
