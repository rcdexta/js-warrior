import React, { Component } from 'react'
import { connect } from 'react-redux'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/twilight'

class ErrorLog extends Component {

  componentDidMount() {
    this.aceEditor.editor.renderer.$cursorLayer.element.style.opacity=0;
  }

  renderErrors = () => {
    const { errors } = this.props.appState
    const errorString = errors.length > 0 ? this.props.appState.errors.join('\n') : ''
    return (
      <AceEditor
        ref={(input) => { this.aceEditor = input; }}
        mode="javascript"
        theme="twilight"
        name="js-warrior-log"
        showPrintMargin={false}
        value={errorString}
        fontSize={14}
        width="100%"
        height="210px"
        highlightActiveLine={false}
        readOnly
        cursorStart={100}
        showGutter={false}
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          cursorStyle: 'wide',
        }}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderErrors()}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  appState: state.appState
})

export default connect(mapStateToProps, null)(ErrorLog)
