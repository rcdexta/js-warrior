import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { LoginModalContainer, Trophy, ChummaText, UserBox } from '../styles/modal'
import { Box } from 'grid-styled'
import WinnerImg from '../images/winner.png'

class LastLevelModal extends Component {
  render() {
    return (
      <Modal visible={this.props.open} width="400" height="300" effect="fadeInUp" onClickAway={this.props.onClose}>
        <LoginModalContainer align="center" justify="center">
          <Box p={2}>
            <Trophy src={WinnerImg} />
          </Box>
          <Box p={2}>
            <UserBox p={3} style={{textAlign: 'center'}}>
              <ChummaText style={{borderBottom: '1px solid ivory', paddingBottom: 10}}>Sweet! You have completed all 3 levels!</ChummaText> <br/>
              <ChummaText>More to come soon...</ChummaText>
            </UserBox>
          </Box>
        </LoginModalContainer>
      </Modal>
    )
  }
}

LastLevelModal.propTypes = {
  open: PropTypes.bool.isRequired
}

export default LastLevelModal
