import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, formValueSelector } from "redux-form";

import { getBookmark, putBookmark, deleteBookmark } from "actions";
import {
  getBookmarkFromLocal,
  putBookmarkToLocal,
  deleteBookmarkFromLocal,
} from "actions/toLocalStorage";
import styled from "styled-components";

import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import _ from "lodash";

import MarkdownTabs from "components/parts/MarkdownTabs/MarkdownTabs";
import SampleImage from "static/images/sample-grey.jpeg";

const StyledBookmarkDetail = styled.div`
  padding: 1rem;
`;

const StyledCard = styled(Card)`
  && {
    height: 100%;
    box-shadow: none;
  }
`;

const WrapCardMedia = styled.div`
  && {
    padding: 0.5rem 0.5rem 0.5rem 0.5rem;
    text-align: center;
  }
`;

const StyledCardMedia = styled(CardMedia)`
  && {
    height: 0;
    padding-top: 52.5%;
  }
`;

const WrapTitle = styled.div`
  padding: 1rem;
`;

const Title = styled(Typography)`
  && {
    font-weight: bold;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
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

const DeleteButton = styled(Button)`
  && {
    max-width: 5rem;
    width: 100%;
    box-shadow: none;
    color: #fff;
    background-color: ${(props) => props.theme.colors.red};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${(props) => props.theme.colors.red};
      opacity: 0.7;
      box-shadow: none;
    }
    @media (max-width: 600px) {
      max-width: none;
      color: ${(props) => props.theme.colors.red};
      background-color: transparent;
      :hover {
        background-color: transparent;
      }
    }
  }
`;

const CancelButton = styled(Button)`
  && {
    width: 100%;
    box-shadow: none;
    color: ${(props) => props.theme.colors.green};
    text-transform: none;
    /* border: 0.05rem solid ${(props) => props.theme.colors.green}; */
    background-color: ${(props) => props.theme.colors.white};
    transition: 0.5s;
    :hover {
      background-color: ${(props) => props.theme.colors.white};
      opacity: 0.7;
      box-shadow: none;
    }
  }
`;

const SaveButton = styled(Button)`
  && {
    width: 100%;
    box-shadow: none;
    color: ${(props) => props.theme.colors.white};
    background-color: ${(props) => props.theme.colors.green};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${(props) => props.theme.colors.green};
      opacity: 0.7;
      box-shadow: none;
    }
  }
`;

const WrapButton = styled.div`
  margin: 1rem;
`;

const DeleteButtonGrid = styled(Grid)`
  padding-left: 1rem;
  @media (max-width: 600px) {
    order: 3;
    padding-top: 1rem;
    padding-left: 0;
  }
`;

const CancelButtonGrid = styled(Grid)`
  padding-left: 1rem;
  @media (max-width: 600px) {
    order: 2;
    padding-top: 1rem;
    padding-left: 0;
  }
`;

const SaveButtonGrid = styled(Grid)`
  padding-left: 1rem;
  @media (max-width: 600px) {
    order: 1;
    padding-top: 1rem;
    padding-left: 0;
  }
`;

class BookmarkDetail extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
    this.delete = this.delete.bind(this);
  }

  async componentDidMount() {
    const id = this.props.match.params.id;
    let note = "";
    if (localStorage.getItem("token") !== null) {
      const response = await this.props.getBookmark(id);
      note = response.data.note;
    } else {
      const data = await this.props.getBookmarkFromLocal(id);
      note = data.bookmark.note;
    }
    return this.props.initialize({ note: note });
  }

  renderBookmark(note) {
    return _.map(this.props.bookmarks, (bookmark) => (
      <div key={bookmark.id}>
        <StyledCard>
          <CardActionArea target="_blank" href={bookmark.url}>
            <Grid container>
              <Grid item xs={12} sm={6}>
                <Grid container>
                  <Grid item xs={12}>
                    <WrapTitle>
                      <Title variant="subtitle1" component="h2">
                        {bookmark.title}
                      </Title>
                    </WrapTitle>
                  </Grid>
                  <Grid item xs={12}>
                    <Description variant="body2" component="p">
                      {bookmark.description}
                    </Description>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
                <WrapCardMedia>
                  <StyledCardMedia
                    image={bookmark.img_url || SampleImage}
                    title={bookmark.title}
                  />
                </WrapCardMedia>
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

  cancel() {
    this.props.history.push("/");
  }

  async delete() {
    const id = this.props.match.params.id;
    if (localStorage.getItem("token") != null) {
      await this.props.deleteBookmark(id);
    } else {
      await this.props.deleteBookmarkFromLocal(id);
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
              <WrapButton>
                <Grid container>
                  <DeleteButtonGrid item xs={12} sm={6}>
                    <DeleteButton variant="contained" onClick={this.delete}>
                      Delete
                    </DeleteButton>
                  </DeleteButtonGrid>
                  <CancelButtonGrid item xs={12} sm={3}>
                    <CancelButton variant="contained" onClick={this.cancel}>
                      Cancel
                    </CancelButton>
                  </CancelButtonGrid>
                  <SaveButtonGrid item xs={12} sm={3}>
                    <SaveButton variant="contained" type="submit">
                      Save
                    </SaveButton>
                  </SaveButtonGrid>
                </Grid>
              </WrapButton>
            </form>
          </Grid>
        </Grid>
      </StyledBookmarkDetail>
    );
  }
}

const selector = formValueSelector("BookmarkDetailForm");
const mapStateToProps = (state) => ({
  note: selector(state, "note"),
  bookmarks: state.bookmarks,
});

const mapDispatchToProps = {
  getBookmark,
  putBookmark,
  deleteBookmark,
  getBookmarkFromLocal,
  putBookmarkToLocal,
  deleteBookmarkFromLocal,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "BookmarkDetailForm" })(BookmarkDetail));
