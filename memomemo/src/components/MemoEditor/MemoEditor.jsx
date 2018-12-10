import {Editor, EditorState} from 'draft-js';
import * as React from "react";
import "./MemoEditor.css";

class MemoEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => this.setState({editorState});
  }
  render() {
    return (
        <Editor editorState={this.state.editorState} onChange={this.onChange} />
    );
  }
}

export default MemoEditor;
