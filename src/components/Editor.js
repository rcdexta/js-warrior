import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/twilight'

class Editor extends Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="twilight"
        name="js-warrior-editor"
        showPrintMargin={false}
        value={this.props.code}
        onChange={this.props.onCodeChange}
        fontSize={13}
        width="100%"
        editorProps={{ $blockScrolling: true }}
      />
    )
  }
}

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  onCodeChange: PropTypes.func.isRequired
}
Editor.defaultProps = {}

export default Editor
