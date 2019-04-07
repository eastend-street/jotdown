import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { readBookmarks } from "../../actions";
import _ from "lodash";
import BookmarkCard from "../BookmarkCard/BookmarkCard";

import "./Body.css";

class Body extends Component {
  componentDidMount() {
    this.props.readBookmarks();
  }

  renderBookmarks() {
    return _.map(this.props.bookmarks, bookmark => (
      <Grid item={true} xs={6} sm={4} md={3} lg={2} key={bookmark.id}>
        <BookmarkCard bookmark={bookmark}/>
      </Grid>
    ));
  }

  render() {
    return (
      <div className="body">
        <Grid container={true} spacing={8}>
          {this.renderBookmarks()}
        </Grid>
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
