import { Editor, EditorState, RichUtils } from "draft-js";
import * as React from "react";
import "./MemoEditor.css";

interface MemoEditorProps {}

class MemoEditor extends React.Component<MemoEditorProps, any> {
  constructor(props: MemoEditorProps) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = (editorState) => this.setState({editorState});
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
  onChange(editorState: EditorState) {
    this.setState({ editorState });
  }
  handleKeyCommand(command:any, editorState:any) {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return 'handled';
    }
    return 'not-handled';
  }
  render() {
    return (
      <div>
        <div className="wrap_editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
          />
        </div>
      </div>
    );
  }
}

export default MemoEditor;
