import { EditorState } from "draft-js";
import Editor from "draft-js-plugins-editor";
import createMarkdownPlugin from "draft-js-markdown-plugin";
import * as Prism from "prismjs";
import createPrismPlugin from "draft-js-prism-plugin";
import * as React from "react";
import "./MemoEditor.css";

interface MemoEditorProps {}

class MemoEditor extends React.Component<MemoEditorProps, any> {
  constructor(props: MemoEditorProps) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      plugins: [
        createPrismPlugin({
          prism: Prism
        }),
        createMarkdownPlugin()
      ]
    };
    this.onChange = editorState => this.setState({ editorState });
  }
  onChange(editorState: EditorState) {
    this.setState({ editorState });
  }
  render() {
    return (
      <div>
        <div className="wrap_editor">
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={this.state.plugins}
          />
        </div>
      </div>
    );
  }
}

export default MemoEditor;
