import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import styled from "styled-components";

import { postBookmark } from "../../actions";
import { saveBookmarkToLocal } from "../../actions/toLocalStorage";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import MarkdownTabs from "../parts/MarkdownTabs/MarkdownTabs";

const Form = styled.form`
  margin-top: 3rem;
`;

const CancelButton = styled(Button)`
  && {
    margin: 1rem;
    min-width: 7rem;
    box-shadow: none;
    color: #66717e;
    background-color: #fff;
    text-transform: none;
    :hover {
      background-color: #eeeeee;
    }
  }
`;

const SaveButton = styled(Button)`
  && {
    margin: 1rem;
    min-width: 7rem;
    box-shadow: none;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.green};
    text-transform: none;
    transition: 0.5s;
    :hover {
      background-color: ${props => props.theme.colors.green};
      opacity: 0.7;
      box-shadow: none;
    }
  }
`;

const WrapButton = styled.div`
  text-align: right;
`;

const FormTextField = styled.input`
  && {
    box-sizing: border-box;
    border-radius: 0.2rem;
    width: 100%;
    border: none;
    font-size: 1rem;
    padding: 1rem;
    box-shadow: ${props => props.theme.shadow.normal};
    ::placeholder {
      color: #bdbdbd;
    }
    :focus {
      outline: none;
    }
  }
`;

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  renderField(field) {
    const { input, label, type, multiline, rows } = field;
    return (
      <FormTextField
        placeholder={label}
        type={type}
        {...input}
        fullWidth={true}
        variant="outlined"
        multiline={multiline}
        rows={rows}
      />
    );
  }

  async onSubmit(bookmark) {
    if (localStorage.getItem("token") === null) {
      await this.props.saveBookmarkToLocal(bookmark);
    } else {
      const data = {
        0: bookmark
      };
      await this.props.postBookmark(data);
    }
    this.props.history.push("/");
  }

  cancel() {
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Grid container justify="center">
        <Grid item xs={11} md={8}>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              label="bookmark URL"
              name="url"
              type="text"
              component={this.renderField}
              multiline={false}
            />
            <MarkdownTabs note={this.props.note} mode="add" />
            <WrapButton>
              <CancelButton variant="contained" onClick={this.cancel}>
                Cancel
              </CancelButton>
              <SaveButton variant="contained" color="primary" type="submit">
                Save
              </SaveButton>
            </WrapButton>
          </Form>
        </Grid>
      </Grid>
    );
  }
}

const selector = formValueSelector("BookmarkForm");

const mapStateToProps = state => ({
  note: selector(state, "note")
});

const mapDispatchToProps = { postBookmark, saveBookmarkToLocal };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "BookmarkForm" })(BookmarkForm));
