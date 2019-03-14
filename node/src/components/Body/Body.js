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
    return _.map(this.props.bookmarks, bookmark => (
      <div>{bookmark}</div>
    ));
  }

  render() {
    return (
      <div className="body">
        aaaaaaaaaaaa
        <Button variant="contained" color="primary">
          GetBookmarkData
        </Button>
      </div>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state });

const mapDispatchToProps = { readBookmarks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Body);
