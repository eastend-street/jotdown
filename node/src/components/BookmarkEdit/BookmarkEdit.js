import React, { Component } from "react";
import { connect } from "react-redux";

import { getBookmark } from "../../actions";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
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
    min-height: 15rem;
    object-fit: contain;
    margin: 0.5rem;
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

const Description = styled(Typography)`
  && {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    overflow: hidden;
    margin: 0.5rem;
  }
`;

const StyledHr = styled.hr`
  border: 0.05rem solid #f5f5f5;
  margin: 0rem 0.5rem;
`;

const Memo = styled(Typography)`
  && {
    min-height: 10rem;
    margin: 1rem;
  }
`;

const SubmitButton = styled(Button)`
  && {
    margin-top: 1rem;
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
          <Grid container>
            <Grid item xs={7}>
              <StyledCardMedia
                image={bookmark.img_url}
                title={bookmark.title}
              />
            </Grid>
            <Grid item xs={5}>
              <CardContent>
                <Title variant="title">{bookmark.title}</Title>
              </CardContent>
              <Description variant="body1" component="p">
                {bookmark.description}
              </Description>
            </Grid>
          </Grid>
        </CardActionArea>
        <StyledHr />
        <Memo variant="body1" component="p">
          {bookmark.memo}
        </Memo>
      </StyledCard>
    ));
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          {this.renderBookmark()}
          <SubmitButton variant="contained" color="primary" type="submit">
            save
          </SubmitButton>
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
