import React from 'react';
import ReactDOM from 'react-dom';
import { Editor } from 'draft-js';

class MyEditor extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Editor editorState={this.props.editorState}
              onChange={this.props.onAddNewNote} />
    );
  }
}

export default MyEditor;