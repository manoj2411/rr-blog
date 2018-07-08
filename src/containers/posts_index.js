import React from 'react';
import _ from 'lodash';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts(){
    if (_.isEmpty(this.props.posts)) {
      return <span> loading... </span>;
    }

    return _.map(this.props.posts, post => (
      <li key={post.id} className="list-group-item">
        {post.title}
      </li>
    ))
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>);

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch)
}
function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex)

