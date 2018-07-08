import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  if (action.type === FETCH_POSTS) {
    return action.payload.data
  }
  return state;
}




