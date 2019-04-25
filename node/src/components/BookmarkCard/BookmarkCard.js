import React, { Component } from "react";
import { connect } from "react-redux";

import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import "./BookmarkCard.css";

const Title = styled(Typography)`
  && {
    font-weight: bold;
  }
`;

class BookmarkCard extends Component {
  render() {
    return (
      <Card>
        <CardActionArea target="_blank" href={this.props.bookmark.url}>
            <CardMedia
              className="media"
              image={this.props.bookmark.img_url}
              title={this.props.bookmark.title}
            />
            <CardContent>
              <Title variant="title">{this.props.bookmark.title}</Title>
              {/* <Typography variant="subheading">
                {this.props.bookmark.description}
              </Typography> */}
            </CardContent>
        </CardActionArea>
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
