import React, { Component } from "react";
import styled from "styled-components";
import { Editor, EditorState } from "draft-js";

const WrapEditor = styled.div`
    background-color: #fff;
    min-height: 10em;
    margin-top:3rem;
    padding: 1rem;
`


class NoteEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.setEditor = editor => {
      this.editor = editor;
    };
    this.focusEditor = () => {
      if (this.editor) {
        this.editor.focus();
      }
    };
  }

  componentDidMount() {
    this.focusEditor();
  }
  render() {
    return (
      <div>
        {this.props.note}
      <WrapEditor onClick={this.focusEditor}>
        <Editor
          ref={this.setEditor}
          editorState={this.state.editorState}
          onChange={this.onChange}
        />
      </WrapEditor>
      </div>
    );
  }
}


export default NoteEditor;
