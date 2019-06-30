import React, { Component } from "react";
import { Field }from "redux-form";
import styled from "styled-components";


const FormTextField = styled.textarea`
  margin-top: 1rem;
  background-color: #fff;
  height: 10rem;
  width: 98%;
  padding: 1rem;
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
