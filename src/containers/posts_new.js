import React from 'react';
import { Field, reduxForm } from 'redux-form';


class PostsNew extends React.Component {
  renderTitleField(field) {
    return <input {...field.input} type="text" />
  }

  render() {
    return (
      <div>
        <div>Posts new</div>
        <form>
          <Field name="title" component={this.renderTitleField}/>
        </form>
      </div>
    );
  }
}

export default reduxForm({ form: 'PostNewForm'})(PostsNew)
