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
import * as appActions from '../actions/app_actions'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends Component {
  state = { showLoginModal: false }

  componentWillMount() {
    if (!UserSession.isLoggedIn()) {
      this.setState({ showLoginModal: true })
    } else {
      const currentLevel = parseInt(UserSession.getLevel(), 10)
      if (currentLevel > 1) {
        this.props.actions.setLevel(currentLevel)
      }
    }
  }

  closeModal = () => {
    this.setState({ showLoginModal: false })
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
        <LoginModal open={this.state.showLoginModal} onClose={this.closeModal} />
      </Flex>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ ...appActions }, dispatch)
})

export default connect(null, mapDispatchToProps)(App)
