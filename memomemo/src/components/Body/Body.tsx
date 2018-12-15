import * as React from 'react';
import MemoEditor from "../MemoEditor/MemoEditor";

class Body extends React.Component {
  render() {
    return (
      <div className="body">
        <p>Body</p>
        <MemoEditor />
      </div>
    );
  }
}

export default Body;