import React, { Component } from "react";
import { Field }from "redux-form";
import styled from "styled-components";


const FormTextField = styled.textarea`
  background-color: #fff;
  min-height: 10em;
  width: 94.5%;
  padding: 1rem;
  border: none;
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
        variant="outlined"
      />
    );
  }

  render() {
    return (
      <Field
        label="Note"
        name="note"
        type="text"
        component={this.renderField}
      />
    );
  }
}



export default MarkdownTextarea;
