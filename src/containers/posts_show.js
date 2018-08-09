import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { fetchPost } from '../actions';

class PostsShow extends React.Component {

  componentDidMount(){
    this.props.fetchPost(this.props.match.params.id)
  }

  render() {
    const { post } = this.props;

    if (!post) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <Link to="/">Back to all</Link>
        <br />
        <h1>{post.title}</h1>
        <h6>Categories: {post.categories}</h6>
        <p> {post.content} </p>
      </div>)
  }
}

function mapStateToProps(state, ownProps) {
  return { post: state.posts[ownProps.match.params.id]}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchPost}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow)
