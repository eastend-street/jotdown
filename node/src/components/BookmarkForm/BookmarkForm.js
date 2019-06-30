import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import styled from "styled-components";

import { postBookmark } from "../../actions";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import MarkdownTabs from "../parts/MarkdownTabs/MarkdownTabs";

const Form = styled.form`
  margin-top: 3rem;
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

const FormTextField = styled.input`
  && {
    box-sizing: border-box;
    width: 100%;
    border: none;
    font-size: 1rem;
    padding: 1rem;
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

  async onSubmit(values) {
    await this.props.postBookmark(values);
    this.props.history.push("/");
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <Grid container justify="center">
        <Grid item xs={10} md={8}>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              label="bookmark URL"
              name="url"
              type="text"
              component={this.renderField}
              multiline={false}
            />
            <MarkdownTabs note={this.props.note} mode="add"/>
            <SubmitButton variant="contained" color="primary" type="submit">
              Save
            </SubmitButton>
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

const mapDispatchToProps = { postBookmark };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(reduxForm({ form: "BookmarkForm" })(BookmarkForm));
