import React from "react";
import styled from "styled-components";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MarkdownPreview from "../MarkdownPreview/MarkdownPreview";
import MarkdownTextarea from "../MarkdownTextarea/MarkdownTextarea"

const WrapMarkdown = styled.div`
  margin-top: 3rem;
  background-color: #fff;
`

const StyledTabs = styled(Tabs)`
    &&{
      padding: 0.5rem;
    }
    .indicator {
      background-color: #66717e;
    }

`

export default function MarkdownTabs(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <WrapMarkdown>
      <StyledTabs value={value} onChange={handleChange} classes={{ indicator: "indicator"}}>
        <Tab label="Write" />
        <Tab label="Preview" />
      </StyledTabs>
      {value === 0 && <MarkdownTextarea note={props.note}/>}
      {value === 1 && <MarkdownPreview note={props.note}/>}
    </WrapMarkdown>
  );
}
