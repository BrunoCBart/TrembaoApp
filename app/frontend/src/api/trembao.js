import axios from './axios'

const FOODS_URL = '/foods'

export const getFoodsByThemeId = (id = 1) => (
  axios.get(`/foods/themes/${id}`))
  .then(res => res.data)
  .catch(err => console.log(err))

export const getTypesByThemeId = (id = 1) => (
  axios.get(`/foods/types/${id}`))
  .then(res => res.data)
  .catch(err => console.log(err))

export const getFoodThemes = () => {
  return axios.get('/foods/themes')
    .then(res => res.data)
    .catch(err => console.log(err))
}

export const checkFood = (id) => (
  axios.put(`${FOODS_URL}/${id}/check`))
  .catch(err => console.log(err))

export const editFood = (id, food) => (
  axios.put(`${FOODS_URL}/${id}`, food))
  .catch((err) => ({ error: err.message }))

export const deleteFood = (id) => (
  axios.delete(`${FOODS_URL}/${id}`))
  .catch(err => console.log(err))
