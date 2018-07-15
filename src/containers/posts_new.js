import React from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends React.Component {
  renderField(field) {
    const {meta: {touched, invalid, error}} = field;
    const classNames = `form-group ${touched && invalid ? 'has-danger' : '' }`;

    return (
      <div className={classNames}>
        <label>{field.label}</label>
        <input {...field.input}
          type="text"
          className="form-control"
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  submitForm(values) {
    console.log('submitForm - ');
    console.log(values)
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Posts new</h3>
        {/*<form onSubmit={handleSubmit(this.submitForm.bind(this))}>*/}
        <form onSubmit={handleSubmit(this.submitForm)}>
          <Field
            name="title"
            label="Title: "
            component={this.renderField}
          />
          <Field
            name="categories"
            label="Categories: "
            component={this.renderField}
          />
          <Field
            name="content"
            label="Content: "
            component={this.renderField}
          />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  if(!values.title) {
    errors.title  = "Enter a title!"
  }
  if(!values.categories) {
    errors.categories  = "Enter some categories!"
  }
  if (!values.content) {
    errors.content = 'Enter some content!'
  }

  return errors;
}

export default reduxForm({ form: 'PostNewForm', validate})(PostsNew)
