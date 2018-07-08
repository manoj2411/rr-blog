import { FETCH_POSTS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  if (action.type === FETCH_POSTS) {
    // return _.keyBy(action.payload.data, 'id')
    return _.mapKeys(action.payload.data, 'id')
  }
  return state;
}




