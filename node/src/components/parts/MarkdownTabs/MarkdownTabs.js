import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import NoteEditor from "../NoteEditor/NoteEditor";
import MarkdownTextarea from "../MarkdownTextarea/MarkdownTextarea"


export default function MarkdownTabs(props) {
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div>
      <Tabs value={value} onChange={handleChange}>
        <Tab label="Write" />
        <Tab label="Preview" />
      </Tabs>
      {value === 0 && <MarkdownTextarea note={props.note}/>}
      {value === 1 && <NoteEditor note={props.note}/>}
    </div>
  );
}
