import React, { Component } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/typescript'
import 'brace/theme/twilight'

const content = `//playTurn() method gets an instance of warrior

class Warrior {
  walk() //move in the given direction (forward by default)
  attack() //attack a unit in given direction (forward by default).
}
`

export default class Help extends Component {

  componentDidMount() {
    this.aceEditor.editor.renderer.$cursorLayer.element.style.opacity=0;
  }

  render = () => {
    return (
      <AceEditor
        mode="typescript"
        theme="twilight"
        ref={(input) => { this.aceEditor = input; }}
        name="js-warrior-log"
        showPrintMargin={false}
        value={content}
        fontSize={14}
        width="100%"
        height="225px"
        highlightActiveLine={false}
        readOnly
        cursorStart={0}
        showGutter={false}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          cursorStyle: 'wide',
        }}
      />
    )
  }
}

