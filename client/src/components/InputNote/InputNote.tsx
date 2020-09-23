import React from 'react';
import styled from 'styled-components';
import TextareaAutoSize from 'react-textarea-autosize';

type InputNoteProps = {
  note: string;
  setNote: any; // TODO: define useState setNote type
};

const InputNote: React.FC<InputNoteProps> = ({ note, setNote }) => (
  <Container>
    <Textarea
      placeholder="Write note here"
      type="text"
      minRows={10}
      value={note}
      onChange={(e) => setNote(e.target.value)}
    />
  </Container>
);

const Container = styled.div`
  margin-top: 3rem;
  border-radius: 0.2rem;
`;

const Textarea = styled(TextareaAutoSize)`
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

export default InputNote;
