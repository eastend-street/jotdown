import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { postBookmark } from "../../actions";


const Form = styled.form`
  padding: 1rem;
`

const SubmitButton = styled(Button)`
  && {
    margin-top: 1rem;
  }
`;

const FormTextField = styled(TextField)`
  && {
    margin: 1rem;
  }
`;

class BookmarkForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  renderField(field) {
    const { input, label, type } = field;

    return (
      <FormTextField
        placeholder={label}
        type={type}
        {...input}
        fullWidth={true}
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
          />
          <Field
            label="Memo"
            name="memo"
            type="text"
            component={this.renderField}
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
