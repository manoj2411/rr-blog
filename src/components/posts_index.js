import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends React.Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <div>Posts Index </div>
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPosts}, dispatch)
}

export default connect(null, mapDispatchToProps)(PostsIndex)

