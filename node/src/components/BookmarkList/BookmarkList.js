import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { readBookmarks } from "../../actions";
import {
  readBookmarksFromLocal,
  saveSampleBookmarkToLocal
} from "../../actions/toLocalStorage";
import _ from "lodash";
import BookmarkCard from "../parts/BookmarkCard/BookmarkCard";

class BookmarkList extends Component {
  componentDidMount() {
    if (localStorage.getItem("token") != null) {
      this.props.readBookmarks();
    } else {
      const response = this.props.readBookmarksFromLocal();
      if (
        response.bookmarks == null ||
        Object.keys(response.bookmarks).length === 0
      ) {
        this.props.saveSampleBookmarkToLocal();
        this.props.readBookmarksFromLocal();
      }
    }
  }

  renderBookmarks() {
    return _.map(this.props.bookmarks, bookmark => (
      <Grid item={true} xs={12} sm={6} md={4} lg={3} key={bookmark.id}>
        <BookmarkCard bookmark={bookmark} />
      </Grid>
    ));
  }

  render() {
    return (
      <Grid container={true} spacing={4}>
        {this.renderBookmarks()}
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = {
  readBookmarks,
  readBookmarksFromLocal,
  saveSampleBookmarkToLocal
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
