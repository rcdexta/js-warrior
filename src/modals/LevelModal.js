import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { LoginModalContainer, Trophy, LevelText, NextButton, UserBox, TipText } from '../styles/modal'
import { Box } from 'grid-styled'
import TrophyImg from '../images/trophy.png'

class LevelModal extends Component {

  render() {
    return (
      <Modal visible={this.props.open} width="400" height="200" effect="fadeInUp" onClickAway={this.props.onClose}>
        <LoginModalContainer wrap align="center" justify="space-around">
          <Box p={2}>
            <Trophy src={TrophyImg} />
          </Box>
          <Box p={2}>
            <UserBox p={3}>
              <LevelText>Level completed!</LevelText> <br/>
              <NextButton onClick={this.props.onClose}>NEXT</NextButton>
            </UserBox>
          </Box>
        </LoginModalContainer>
        {this.props.level === 1 && <TipText>Tip: Look for zombies along the way. Use your "senses" wisely</TipText>}
        {this.props.level === 2 && <TipText>Tip: Monitoring health and taking rest is important!</TipText>}
      </Modal>
    )
  }
}

LevelModal.propTypes = {
  open: PropTypes.bool.isRequired,
  level: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired
}

export default LevelModal
