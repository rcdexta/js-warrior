import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AceEditor from 'react-ace'
import 'brace/mode/javascript'
import 'brace/theme/monokai'

class Editor extends Component {
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        name="js-warrior-editor"
        showPrintMargin={false}
        value={this.props.code}
        fontSize={13}
        width="100%"
        editorProps={{ $blockScrolling: true }}
      />
    )
  }
}

Editor.propTypes = {
  code: PropTypes.string.isRequired
}
Editor.defaultProps = {}

export default Editor
