import axios from './axios'

const LOGIN_URL = '/users/login'

const FOODS_URL = '/foods'

export const login = ({ username, password }) => (
  axios.post(LOGIN_URL, { username, password },
    { withCredentials: true }))
  .then(res => res.data)

export const session = () => (
  axios.get(LOGIN_URL,
    { withCredentials: true }))
  .then(res => res.data)

export const getFoods = () => (
  axios.get('/foods'))
  .then(res => res.data)

export const getFoodTypes = () => (
  axios.get('/foods/types'))
  .then(res => res.data)

export const getCheckedFoods = () => (
  axios.get('/foods/checked'))
  .then(res => res.data)

export const checkFood = (id) => (
  axios.put(`${FOODS_URL}/${id}/check`))

export const makeOrder = (userData) => (
  axios.post('/orders', userData))

export const getOrders = () => (
  axios.get('/orders'))
  .then(res => res.data)
