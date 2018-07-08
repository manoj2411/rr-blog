import axios from 'axios';

const API_ENDPOINT = 'https://reduxblog.herokuapp.com/api'
const API_KEY = '?key=test'
export const FETCH_POSTS = 'FETCH_POSTS'

export function fetchPosts() {

  const url = `${API_ENDPOINT}/posts${API_KEY}`
  const request = axios.get(url)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
