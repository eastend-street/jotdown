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
import styled from "styled-components";
// import sampleBookmarks from "../../lib/sampleBookmark/sampleBookmark.json";

const StyledBookmarkList = styled.div`
  /* padding: 1rem; */
`;

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
    // let bookmarks = {};
    // if (Object.keys(this.props.bookmarks).length === 0) {
    //   bookmarks = sampleBookmarks;
    // }
    return _.map(this.props.bookmarks, bookmark => (
      <Grid item={true} xs={12} sm={6} md={4} lg={3} key={bookmark.id}>
        <BookmarkCard bookmark={bookmark} />
      </Grid>
    ));
  }

  render() {
    return (
      <StyledBookmarkList>
        <Grid container={true} spacing={4}>
          {this.renderBookmarks()}
        </Grid>
      </StyledBookmarkList>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = {
  readBookmarks,
  readBookmarksFromLocal,
  saveSampleBookmarkToLocal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList);
