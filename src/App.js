import React, { Component } from 'react'
import './styles/app.css'
import World from './components/game/World'
import Editor from './components/Editor'
import { Flex, Box } from 'grid-styled'
import {Progress} from "./styles/game";

const code = `
function yourTurn(warrior){
  //Write your code here. 
  //Refer documentation for api methods on warrior
}
`

class App extends Component {
  render() {
    return (
    <Flex wrap>
      <Box width={1}>
        <World />
      </Box>
      <Box width={1}>
        <Progress />
      </Box>
      <Box width={1/2}>
        <Editor code={code}/>
      </Box>
      <Box width={1/2}>
        Logs here
      </Box>
    </Flex>
    )
  }
}

export default App
