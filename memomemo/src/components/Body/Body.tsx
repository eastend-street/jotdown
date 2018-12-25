import * as React from "react";
import MemoEditor from "../MemoEditor/MemoEditor";
import MemoList from "../MemoList/MemoList";

import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div>
        <MemoList />
        <MemoEditor />
      </div>
    );
  }
}

export default Body;