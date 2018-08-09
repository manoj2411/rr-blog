import { FETCH_POSTS, FETCH_POST } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  if (action.type === FETCH_POSTS) {
    // return _.keyBy(action.payload.data, 'id')
    return _.mapKeys(action.payload.data, 'id')
  }
  else if (action.type === FETCH_POST) {
    const post = action.payload.data;
    return {...state, [post.id]: post}
  }
  return state;
}




