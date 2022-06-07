import axios from './axios'

const FOODS_URL = '/foods'

export const getFoodsByThemeId = (id = 1) => (
  axios.get(`/foods/themes/${id}`))
  .then(res => res.data)
  .catch(err => console.log(err))

export const getTypesByTheme = (id = 1) => (
  axios.get(`/foods/types/${id}`))
  .then(res => res.data)
  .catch(err => console.log(err))

export const getFoodTypes = () => (
  axios.get('/foods/types'))
  .then(res => res.data)
  .catch(err => console.log(err))

export const getFoodThemes = () => {
  return axios.get('/foods/themes')
    .then(res => res.data)
    .catch(err => console.log(err))
}
export const getCheckedFoods = () => (
  axios.get('/foods/checked'))
  .then(res => res.data)
  .catch(err => console.log(err))

export const checkFood = (id) => (
  axios.put(`${FOODS_URL}/${id}/check`))
  .catch(err => console.log(err))

export const editFood = (id, food) => (
  axios.put(`${FOODS_URL}/${id}`, food))
  .catch(() => console.log(food))
