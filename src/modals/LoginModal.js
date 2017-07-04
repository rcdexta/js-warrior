import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-awesome-modal'
import { UserBox, LoginModalContainer, NextButton } from '../styles/modal'
import { Box } from 'grid-styled'
import { WarriorIdle } from '../styles/world'
import UserSession from '../helpers/user_session'

class LoginModal extends Component {
  state = { username: '' }

  updateUserName = evt => {
    this.setState({username: evt.target.value})
  }

  login = () => {
    UserSession.setSession(this.state)
    window.location.reload()
  }

  render() {
    return (
      <Modal visible={this.props.open} width="400" effect="fadeInDown" onClickAway={this.props.onClose}>
        <LoginModalContainer wrap align="center" justify="space-around">
          <Box p={2}>
            <WarriorIdle />
          </Box>
          <Box p={2}>
            <UserBox p={3}>
              <input type="text" value={this.state.username} onChange={this.updateUserName} placeholder="Enter name" />
              <NextButton onClick={this.login}>READY</NextButton>
            </UserBox>
          </Box>
        </LoginModalContainer>
      </Modal>
    )
  }
}

LoginModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

export default LoginModal
