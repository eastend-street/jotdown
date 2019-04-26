import React, { Component } from "react";
import { connect } from "react-redux";

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
`

const Title = styled(Typography)`
  && {
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

const Memo = styled(Typography)`
  && {
    margin-top: 0.5rem;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
`;

const StyledHr = styled.hr`
  border: 0.05rem solid #f5f5f5;
`;

class BookmarkCard extends Component {
  render() {
    return (
      <StyledCard>
        <CardActionArea target="_blank" href={this.props.bookmark.url}>
          <StyledCardMedia
            image={this.props.bookmark.img_url}
            title={this.props.bookmark.title}
          />
          <CardContent>
            <Title variant="subheading">{this.props.bookmark.title}</Title>
            <StyledHr />
            <Memo variant="body1" component="p">
              {this.props.bookmark.memo}
            </Memo>
          </CardContent>
        </CardActionArea>
      </StyledCard>
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
