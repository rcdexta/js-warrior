import React, { Component } from 'react'
import { connect } from 'react-redux'
import AceEditor from 'react-ace'
import 'brace/mode/ruby'
import 'brace/theme/solarized_dark'

class ErrorLog extends Component {

  componentDidMount() {
    this.aceEditor.editor.renderer.$cursorLayer.element.style.opacity = 0
  }

  content = () => {
    const { errors, logs } = this.props.appState
    if (errors.length > 0) {
      return `[Error] ${errors.join('\n')}`
    }
    if (logs.length > 0) {
      return logs.join('\n')
    }
  }

  render = () => {
    return (
      <AceEditor
        ref={input => {
          this.aceEditor = input
        }}
        mode="ruby"
        theme="solarized_dark"
        name="js-warrior-log"
        showPrintMargin={false}
        value={this.content()}
        fontSize={14}
        width="100%"
        highlightActiveLine={false}
        readOnly
        cursorStart={100}
        showGutter={false}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          cursorStyle: 'wide'
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  appState: state.appState
})

export default connect(mapStateToProps, null)(ErrorLog)
