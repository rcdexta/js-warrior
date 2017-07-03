import React, { Component } from 'react'
import '../styles/app.css'
import '../styles/base.css'
import World from './elements/World'
import GameEngine from './GameEngine'
import ErrorLog from './ErrorLog'
import Help from './Help'
import { Flex, Box } from 'grid-styled'
import { HorizontalSeparator,  BoxHeading } from '../styles/world'
import { LogoImg } from '../styles/world'
import LogoPng from '../images/logo.png'

class App extends Component {
  render() {
    return (
      <Flex wrap>
        <Box width={1}>
          <header>
            <a href="/"><LogoImg src={LogoPng} /></a>
          </header>
        </Box>
        <Box width={1}>
          <World />
        </Box>
        <Box width={1}>
          <HorizontalSeparator />
        </Box>
        <Box width={1 / 2}>
          <GameEngine />
        </Box>
        <Box width={1/2} flex='1 1 auto'>
          <Box width={1} style={{ height: '50%' }}>
            <BoxHeading>API DOCS</BoxHeading>
            <Help/>
          </Box>
          <Box width={1}>
            <HorizontalSeparator />
          </Box>
          <Box width={1}>
            <BoxHeading>CONSOLE</BoxHeading>
            <ErrorLog />
          </Box>
        </Box>
        <Box width={1}>
          <HorizontalSeparator />
        </Box>
      </Flex>
    )
  }
}

export default App
