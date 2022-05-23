import axios from 'axios'

export const END_POINT = 'http://localhost:4000'

export default axios.create({
  baseURL: 'http://localhost:4000/'
})
