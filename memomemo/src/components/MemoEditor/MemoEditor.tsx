import { Editor, EditorState } from 'draft-js';
import * as React from 'react';

interface MemoEditorProps {
}

class MemoEditor extends React.Component<MemoEditorProps, any> {
  constructor(props: MemoEditorProps) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e: EditorState) {
    this.setState({ editorState: e });
  }
  render() {
    return (
      <Editor editorState={this.state.editorState} onChange={this.handleChange} />
    );
  }
}

export default MemoEditor;