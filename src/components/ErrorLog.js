import React, { Component } from 'react'
import { connect } from 'react-redux'
import AceEditor from 'react-ace'
import 'brace/mode/handlebars'
import 'brace/theme/twilight'

class ErrorLog extends Component {
  componentDidMount() {
    this.aceEditor.editor.renderer.$cursorLayer.element.style.opacity = 0
  }

  content = () => {
    const { errors, logs } = this.props.appState
    if (errors.length > 0) {
      return errors.join('\n')
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
        mode="handlebars"
        theme="twilight"
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
