import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import { readBookmarks } from "actions";
import {
  readBookmarksFromLocal,
  saveSampleBookmarkToLocal,
} from "actions/toLocalStorage";
import _ from "lodash";

import BookmarkCard from "components/parts/BookmarkCard/BookmarkCard";
import SkeletonCard from "components/parts/SkeletonCard/SkeletonCard";

class BookmarkList extends Component {
  state = { loading: true };

  componentDidMount() {
    if (localStorage.getItem("token") != null) {
      this.props
        .readBookmarks()
        .then((res) => this.setState({ loading: false }));
    } else {
      const response = this.props.readBookmarksFromLocal();
      if (
        response.bookmarks == null ||
        Object.keys(response.bookmarks).length === 0
      ) {
        this.props.saveSampleBookmarkToLocal();
        this.props.readBookmarksFromLocal();
      }
      this.setState({ loading: false });
    }
  }

  renderBookmarks() {
    return _.map(this.props.bookmarks, (bookmark) => (
      <Grid item={true} xs={12} sm={6} md={4} lg={3} key={bookmark.id}>
        <BookmarkCard bookmark={bookmark} />
      </Grid>
    ));
  }

  renderSkeleton() {
    const skeletons = [];
    for (let i = 0; i < 4; i++) {
      skeletons.push(
        <Grid item={true} xs={12} sm={6} md={4} lg={3} key={i}>
          <SkeletonCard />
        </Grid>
      );
    }
    return <>{skeletons}</>;
  }

  render() {
    return (
      <Grid container={true} spacing={4}>
        {this.state.loading ? (
          <>{this.renderSkeleton()}</>
        ) : (
          <>{this.renderBookmarks()}</>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = {
  readBookmarks,
  readBookmarksFromLocal,
  saveSampleBookmarkToLocal,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkList);
