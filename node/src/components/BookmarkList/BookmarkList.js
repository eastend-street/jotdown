import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { readBookmarks } from "../../actions";
import _ from "lodash";
import BookmarkCard from "../parts/BookmarkCard/BookmarkCard";
import styled from "styled-components";


const StyledBookmarkList = styled.div`
  /* padding: 1rem; */
`

class BookmarkList extends Component {
  componentDidMount() {
    this.props.readBookmarks();
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

const mapDispatchToProps = { readBookmarks };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkList);
