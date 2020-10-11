import React from 'react';
import styled from 'styled-components';

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea: React.FC<TextAreaProps> = ({ value, onChange }) => {
  return <StyledTextArea value={value} onChange={onChange} />;
};

export default TextArea;

const StyledTextArea = styled.textarea`
  background-color: #fff;
  min-height: 10rem;
  padding: 1rem;
  width: 100%;
  outline: none;
  border: none;
  resize: none;
  font-size: 1rem;
  font-family: inherit;
`;
