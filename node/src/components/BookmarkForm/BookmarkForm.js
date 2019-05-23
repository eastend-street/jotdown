import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { postBookmark } from "../../actions";

const Form = styled.form`
  padding: 1rem;
`;

const SubmitButton = styled(Button)`
  && {
    margin-top: 1rem;
  }
`;

const FormTextField = styled(TextField)`
  && {
    margin: 1rem;
    background-color: #fff;
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
      <Form onSubmit={handleSubmit(this.onSubmit)}>
        <Field
          label="URL"
          name="url"
          type="text"
          component={this.renderField}
          multiline={false}
        />
        <Field
          label="Memo"
          name="memo"
          type="text"
          component={this.renderField}
          multiline={true}
          rows={8}
        />
        <SubmitButton variant="contained" color="primary" type="submit">
          save
        </SubmitButton>
      </Form>
    );
  }
}

const mapDispatchToProps = { postBookmark };

export default connect(
  null,
  mapDispatchToProps
)(reduxForm({ form: "BookmarkForm" })(BookmarkForm));
