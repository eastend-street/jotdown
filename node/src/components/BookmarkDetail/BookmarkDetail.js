import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import { getBookmark, putBookmark } from "../../actions";
import {
  getBookmarkFromLocal,
  putBookmarkToLocal
} from "../../actions/toLocalStorage";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";

import MarkdownTabs from "../parts/MarkdownTabs/MarkdownTabs";
import SampleImage from "../../static/images/sample-grey.jpeg";

const StyledBookmarkDetail = styled.div`
  padding: 1rem;
`;

const StyledCard = styled(Card)`
  && {
    height: 100%;
    box-shadow: none;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 0;
    padding-top: 52.5%;
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
    padding: 1rem;
  }
`;

const SubmitButton = styled(Button)`
  && {
    margin-top: 1rem;
    box-shadow: none;
    color: #fff;
    background-color: #66717e;
    text-transform: none;
    :hover {
      background-color: #838e9a;
    }
  }
`;

class BookmarkDetail extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    let note = "";
    if (localStorage.getItem("token") != null) {
      const response = await this.props.getBookmark(id);
      note = response.data.note;
    } else {
      const data = await this.props.getBookmarkFromLocal(id);
      note = data.bookmark.note;
    }
    return this.props.initialize({ note: note });
  }

  renderBookmark(note) {
    return _.map(this.props.bookmarks, bookmark => (
      <div key={bookmark.id}>
        <StyledCard>
          <CardActionArea target="_blank" href={bookmark.url}>
            <Grid container>
              <Grid item xs={5}>
                <StyledCardMedia
                  image={bookmark.img_url || SampleImage}
                  title={bookmark.title}
                />
              </Grid>
              <Grid item xs={7}>
                <CardContent>
                  <Title variant="subtitle1">{bookmark.title}</Title>
                </CardContent>
              </Grid>
              <Grid>
                <Description variant="body2" component="p">
                  {bookmark.description}
                </Description>
              </Grid>
            </Grid>
          </CardActionArea>
        </StyledCard>
        <MarkdownTabs note={note} mode="edit" />
      </div>
    ));
  }

  async onSubmit(values) {
    const id = this.props.match.params.id;
    if (localStorage.getItem("token") != null) {
      await this.props.putBookmark(id, values);
    } else {
      const data = await this.props.putBookmarkToLocal(id, values);
      localStorage.setItem("bookmarks", JSON.stringify(data.bookmarks));
    }
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <StyledBookmarkDetail>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              {this.renderBookmark(this.props.note)}
              <SubmitButton variant="contained" type="submit">
                Save
              </SubmitButton>
            </form>
          </Grid>
        </Grid>
      </StyledBookmarkDetail>
    );
  }
}

const selector = formValueSelector("BookmarkDetailForm");
const mapStateToProps = state => ({
  note: selector(state, "note"),
  bookmarks: state.bookmarks
});

const mapDispatchToProps = {
  getBookmark,
  putBookmark,
  getBookmarkFromLocal,
  putBookmarkToLocal
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "BookmarkDetailForm" })(BookmarkDetail));
