import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { ModalContainer, Trophy, LevelText, LevelContainer, NextButton } from '../styles/modal'
import { Flex, Box } from 'grid-styled'
import RipImg from '../images/rip.png'

class GameOverModal extends Component {

  onClose = () => {
    window.location.reload()
  }

  render() {
    return (
      <Modal visible={this.props.open} width="400" effect="fadeInUp" onClickAway={this.onClose}>
        <ModalContainer>
          <Flex>
            <Box p={1} width={1 / 2}>
              <Trophy src={RipImg} />
            </Box>
            <LevelContainer p={1} width={1 / 2}>
              <Flex column>
                <LevelText>Game over!</LevelText> <br/>
                <NextButton onClick={this.onClose}>TRY AGAIN</NextButton>
              </Flex>
            </LevelContainer>
          </Flex>
        </ModalContainer>
      </Modal>
    )
  }
}

GameOverModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default GameOverModal
