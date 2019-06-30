import React from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const WrapEditor = styled.div`
  background-color: #fff;
  min-height: 10em;
  padding: 1rem;
`;

const StyledReactMarkdown = styled(ReactMarkdown)`
  && {
  }
`;

export default function MarkdownPreview(props) {
    return (
      <React.Fragment>
        <WrapEditor>
          <StyledReactMarkdown source={props.note}/>
        </WrapEditor>
      </React.Fragment>
    );
}