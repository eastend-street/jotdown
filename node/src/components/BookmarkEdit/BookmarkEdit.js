import React, { Component } from "react";
import { connect } from "react-redux";

import { getBookmark } from "../../actions";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const StyledCard = styled(Card)`
  height: 100%;
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    min-height: 10rem;
    object-fit: contain;
  }
`;

const Title = styled(Typography)`
  && {
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
    min-height: 4.5rem;
  }
`;

class BookmarkEdit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getBookmark(id);
  }

  render() {
    return (
      <StyledCard>
        {/* <CardActionArea target="_blank" href={this.props.bookmark.url}>
          <StyledCardMedia
            image={this.props.bookmark.img_url}
            title={this.props.bookmark.title}
          />
          <CardContent>
            <Title variant="subheading">{this.props.bookmark.title}</Title>
          </CardContent>
        </CardActionArea> */}
      </StyledCard>
    );
  }
}

// stateの中からどの値を子コンポーネントに渡すのかを定義する。
const mapStateToProps = state => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = { getBookmark };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkEdit);
