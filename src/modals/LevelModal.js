import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { LoginModalContainer, Trophy, LevelText, LevelContainer, NextButton, UserBox } from '../styles/modal'
import { Flex, Box } from 'grid-styled'
import TrophyImg from '../images/trophy.png'

class LevelModal extends Component {
  render() {
    return (
      <Modal visible={this.props.open} width="400" effect="fadeInUp" onClickAway={this.props.onClose}>
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
      </Modal>
    )
  }
}

LevelModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default LevelModal
