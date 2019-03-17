import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { readBookmarks } from "../../actions";
import _ from "lodash";

import "./Body.css";

class Body extends Component {
  componentDidMount() {
    this.props.readBookmarks();
  }

  renderBookmarks() {
    console.log(this.props.bookmarks[0]);
    return (
      <div>ffffffffffff</div>
    );
  }

  render() {
    return (
      <div className="body">
        aaaaaaaaaaaa
        <Button variant="contained" color="primary">
          GetBookmarkD
        </Button>
        {this.renderBookmarks()}
      </div>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = { readBookmarks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
