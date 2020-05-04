import React from "react";
import styled from "styled-components";

import MarkdownTextarea from "../MarkdownTextarea/MarkdownTextarea";

const WrapMarkdown = styled.div`
  margin-top: 3rem;
  background-color: #fff;
`;

export default function MarkdownTabs(props) {
  const [value] = React.useState(0);
  return (
    <WrapMarkdown>
      {value === 0 && <MarkdownTextarea note={props.note} />}
    </WrapMarkdown>
  );
}
