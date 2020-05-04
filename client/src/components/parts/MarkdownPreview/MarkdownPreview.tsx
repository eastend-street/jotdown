import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const WrapEditor = styled.div`
  background-color: #fff;
  min-height: 10rem;
  padding: 1rem;
`;

type MarkdownPreviewProps = {
  note: string;
};

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ note }) => {
  return (
    <WrapEditor>
      <ReactMarkdown source={note} />
    </WrapEditor>
  );
};

export default MarkdownPreview;
