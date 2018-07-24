import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createPost } from '../actions'

class PostsNew extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
  }

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
    this.props.createPost(values, () => {
      this.props.history.push("/");
    })
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
          <Link to="/" className="btn btn-danger">Cancel</Link>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({createPost}, dispatch)
}

PostsNew = connect(null, mapDispatchToProps)(PostsNew)

export default reduxForm({ form: 'PostNewForm', validate})(PostsNew)
