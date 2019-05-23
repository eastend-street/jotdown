import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";

import { getBookmark } from "../../actions";
import styled from "styled-components";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import _ from "lodash";

const StyledBookmarkEdit = styled.div`
  padding: 1rem;
`;

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

const FormTextField = styled(TextField)`
  && {
    margin-top: 1rem;
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
    const getBookmark = this.props.getBookmark(id);
    getBookmark.then(response =>
      this.props.initialize({ memo: response.data.memo })
    );
  }

  renderField(field) {
    const { input, label, type } = field;
    return (
      <FormTextField
        placeholder={label}
        type={type}
        {...input}
        fullWidth={true}
        multiline
        rows="4"
        variant="outlined"
      />
    );
  }

  renderBookmark() {
    return _.map(this.props.bookmarks, bookmark => (
      <div key={bookmark.id}>
        <StyledCard>
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
        </StyledCard>
        <Field
          label="Memo"
          name="memo"
          type="text"
          component={this.renderField}
        />
      </div>
    ));
  }

  render() {
    return (
      <StyledBookmarkEdit>
        <Grid container justify="center">
          <Grid item xs={12} md={6}>
            <form>
              {this.renderBookmark()}
              <SubmitButton variant="contained" color="primary" type="submit">
                save
              </SubmitButton>
            </form>
          </Grid>
        </Grid>
      </StyledBookmarkEdit>
    );
  }
}

const mapStateToProps = state => ({ bookmarks: state.bookmarks });

const mapDispatchToProps = { getBookmark };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "BookmarkEditForm" })(BookmarkEdit));
