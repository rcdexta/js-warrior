import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { ModalContainer, Trophy, LevelText, LevelContainer, NextButton } from '../styles/modal'
import { Flex, Box } from 'grid-styled'
import TrophyImg from '../images/trophy.png'

class LevelModal extends Component {
  render() {
    return (
      <Modal visible={this.props.open} width="400" effect="fadeInUp" onClickAway={this.props.onClose}>
        <ModalContainer>
          <Flex>
            <Box p={1} width={1 / 2}>
              <Trophy src={TrophyImg} />
            </Box>
            <LevelContainer p={1} width={1 / 2}>
              <Flex column>
                <LevelText>Level completed!</LevelText> <br/>
                <NextButton onClick={this.orchestrate}>NEXT</NextButton>
              </Flex>
            </LevelContainer>
          </Flex>
        </ModalContainer>
      </Modal>
    )
  }
}

LevelModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default LevelModal
