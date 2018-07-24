import axios from 'axios';

const API_ENDPOINT = 'https://reduxblog.herokuapp.com/api'
const API_KEY = '?key=test'
export const FETCH_POSTS = 'FETCH_POSTS'
export const CREATE_POST = 'CREATE_POST'

export function fetchPosts() {

  const url = `${API_ENDPOINT}/posts${API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(values, callback) {

  const url = `${API_ENDPOINT}/posts${API_KEY}`
  const request = axios.post(url, values).then(() => {
    callback();
  })

  return {
    type: CREATE_POST,
    payload: request
  }
}
