import React, { Component } from 'react'
import './styles/app.css'
import './styles/base.css'
import LogoPng from './images/logo.png'
import World from './components/elements/World'
import GameEngine from './components/GameEngine'
import { Flex, Box } from 'grid-styled'
import {Progress, LogoImg} from "./styles/world";

class App extends Component {
  render() {
    return (
    <Flex wrap>
      <Box width={1}>
        <header>
          <a href="#"><LogoImg src={LogoPng}/></a>
        </header>
      </Box>
      <Box width={1}>
        <World />
      </Box>
      <Box width={1}>
        <Progress />
      </Box>
      <Box width={1/2}>
        <GameEngine/>
      </Box>
      <Box width={1/2}>
        Logs here
      </Box>
    </Flex>
    )
  }
}

export default App
