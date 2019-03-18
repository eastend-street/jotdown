import React, { Component } from "react";
import { connect } from "react-redux";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./BookmarkCard.css";

class BookmarkCard extends Component {
  render() {
    return (
      <Card>
        <CardMedia
          className="media"
          image={this.props.ogp.image}
          title={this.props.ogp.title}
        />
        <CardContent>
          <Typography component="h4">
            {this.props.ogp.title}
          </Typography>
          {/* <Typography component="p">
            {this.props.ogp.description}
          </Typography> */}
        </CardContent>
      </Card>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state.bookmarks });

// const mapDispatchToProps = { readBookmarks };

export default connect(
  mapStateToProps
  // mapDispatchToProps
)(BookmarkCard);