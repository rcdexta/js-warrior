import React, { Component } from 'react'
import { Flex, Box } from 'grid-styled'
import {LogoImg} from "../styles/world";
import LogoPng from '../images/logo.png'
import UserSession from '../helpers/user_session'
import Modal from 'boron/OutlineModal'

export default class AppLayout extends Component {

  componentDidMount() {
    if (!UserSession.isLoggedIn()) {
      // this.showModal()
    }
  }

  showModal = () => {
    this.modal.show();
  }

  hideModal = () => {
    this.modal.hide();
  }

  loginModal = () => {
    return <Modal ref={(input) => { this.modal = input }} >
      <h2>I am a dialog</h2>
      <button onClick={this.hideModal}>Close</button>
    </Modal>
  }

  render() {
    return (
      <Flex wrap>
        <Box width={1}>
          <header>
            <a href="#"><LogoImg src={LogoPng}/></a>
          </header>
        </Box>
        {this.props.children}
        {this.loginModal()}
      </Flex>
    )
  }
}
