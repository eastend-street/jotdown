import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";

const FormTextField = styled.textarea`
  box-sizing: border-box;
  min-height: 10em;
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
        {...input}
        fullWidth={true}
        multiline
        rows="8"
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
