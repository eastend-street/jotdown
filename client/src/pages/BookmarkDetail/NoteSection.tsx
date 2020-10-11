import React from 'react';
import styled from 'styled-components';

import TextArea from 'components/shared/TextArea';

interface NotesSectionProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  note: string;
}

const NoteSection: React.FC<NotesSectionProps> = ({ note, onChange }) => {
  return (
    <Container>
      <TextArea value={note} onChange={onChange} />
    </Container>
  );
};

export default NoteSection;

const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
`;
