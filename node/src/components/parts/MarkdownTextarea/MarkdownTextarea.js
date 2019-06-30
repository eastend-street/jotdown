import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import TextareaAutosize from 'react-textarea-autosize';

const FormTextField = styled(TextareaAutosize)`
  box-sizing: border-box;
  width: 100%;
  border: none;
  padding: 1rem 1rem 0rem 1rem;
  resize: vertical;
  font-size: 1rem;
  ::placeholder {
  color: #bdbdbd;
}
  :focus {
    outline: none;
}
`;

class MarkdownTextarea extends Component {
  renderField(field) {
    const { input, label, type } = field;
    return (
      <FormTextField
        placeholder={label}
        type={type}
        minRows={10}
        {...input}
      />
    );
  }

  render() {
    return (
        <Field
          label="Write a note here"
          name="note"
          type="text"
          component={this.renderField}
        />
    );
  }
}

export default MarkdownTextarea;
