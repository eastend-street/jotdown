import React, { Component } from "react";
import { Field } from "redux-form";
import styled from "styled-components";
import TextareaAutoSize from "react-textarea-autosize";

const Textarea = styled.div`
  margin-top: 3rem;
  border-radius: 0.2rem;
`;

const FormTextField = styled(TextareaAutoSize)`
  box-sizing: border-box;
  width: 100%;
  border: none;
  border-radius: 0.2rem;
  padding: 1rem;
  resize: none;
  min-height: 10rem;
  font-size: 1rem;
  ::placeholder {
    color: #bdbdbd;
  }
  :focus {
    outline: none;
  }
`;

type RenderFieldProps = {
  input: string;
  label: string;
  type: string;
};

class MarkdownTextarea extends Component {
  renderField: React.FC<RenderFieldProps> = ({ input, label, type }) => {
    return (
      <FormTextField placeholder={label} type={type} minRows={10} {...input} />
    );
  };

  render() {
    return (
      <Textarea>
        <Field
          label="Write a note here"
          name="note"
          type="text"
          component={this.renderField}
        />
      </Textarea>
    );
  }
}

export default MarkdownTextarea;
