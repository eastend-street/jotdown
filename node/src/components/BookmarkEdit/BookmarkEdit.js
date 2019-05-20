import React, { Component } from "react";
import { connect } from "react-redux";

import { getBookmark } from "../../actions";
import styled from "styled-components";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";

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

  renderBookmark() {
    return _.map(this.props.bookmarks, bookmark => (
      <StyledCard key={bookmark.id}>
        <CardActionArea target="_blank" href={bookmark.url}>
          <StyledCardMedia image={bookmark.img_url} title={bookmark.title} />
          <CardContent>
            <Title variant="subheading">{bookmark.title}</Title>
          </CardContent>
        </CardActionArea>
      </StyledCard>
    ));
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid xs={4}>
          {this.renderBookmark()}
        </Grid>
        <Grid xs={12}>
          ここにメモメモ
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = { getBookmark };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookmarkEdit);
