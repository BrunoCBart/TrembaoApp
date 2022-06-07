import axios from './axios'

const LOGIN_URL = '/users/login'

export const login = ({ username, password }) => (
  axios.post(LOGIN_URL, { username, password },
    { withCredentials: true }))
  .then(res => res.data)

export const session = () => (
  axios.get(LOGIN_URL,
    { withCredentials: true }))
  .then(res => res.data)
