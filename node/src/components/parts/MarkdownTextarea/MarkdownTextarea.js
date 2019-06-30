import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";

const WrapTextarea = styled.div`
  padding: 1rem;
  width: 100%;
`

const FormTextField = styled.textarea`
  background-color: #fff;
  min-height: 10em;
  width: 90%;
  /* border: none; */
  padding: 1rem;
  resize: vertical;
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
      <WrapTextarea>
        <Field
          label="Note"
          name="note"
          type="text"
          component={this.renderField}
        />
      </WrapTextarea>
    );
  }
}

export default MarkdownTextarea;
