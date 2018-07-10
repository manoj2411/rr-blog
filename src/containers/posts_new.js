import React from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends React.Component {
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.label}</label>
        <input {...field.input}
          type="text"
          className="form-control"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <h3>Posts new</h3>
        <form>
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
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'PostNewForm'})(PostsNew)
