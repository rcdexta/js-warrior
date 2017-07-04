import React, { Component } from 'react'
import '../styles/app.css'
import '../styles/base.css'
import World from './elements/World'
import GameEngine from './GameEngine'
import ErrorLog from './ErrorLog'
import { Flex, Box } from 'grid-styled'
import { HorizontalSeparator, BoxHeading } from '../styles/world'
import LoginModal from '../modals/LoginModal'
import UserSession from '../helpers/user_session'

class App extends Component {

  state = {showLoginModal: false}

  componentDidMount() {
    if (!UserSession.isLoggedIn()) {
      this.setState({showLoginModal: true})
    }
  }

  closeModal = () => {
    this.setState({showLoginModal: false})
  }

  render() {
    return (
      <Flex wrap>
        <Box width={1}>
          <World />
        </Box>
        <Box width={1}>
          <HorizontalSeparator />
        </Box>
        <Box width={1 / 2}>
          <GameEngine />
        </Box>
        <Box width={1 / 2} flex="1 1 auto">
          <Box width={1}>
            <BoxHeading>CONSOLE</BoxHeading>
            <ErrorLog />
          </Box>
        </Box>
        <Box width={1}>
          <HorizontalSeparator />
        </Box>
        <LoginModal open={this.state.showLoginModal} onClose={this.closeModal}/>
      </Flex>
    )
  }
}

export default App
