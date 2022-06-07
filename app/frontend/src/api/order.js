import axios from './axios'

export const makeOrder = (userData) => (
  axios.post('/orders', userData))
  .catch(err => console.log(err))

export const getOrders = () => (
  axios.get('/orders'))
  .then(res => res.data)
  .catch(err => console.log(err))
