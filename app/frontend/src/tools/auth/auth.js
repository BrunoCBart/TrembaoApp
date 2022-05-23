// import axios from '../../api/axios'
import axios from 'axios'
const LOGIN_URL = '/users/login'
class Auth {
  constructor () {
    this.authenticated = false
  }

  login (cb) {
    this.authenticated = true
    cb()
  }

  logout (cb) {
    this.authenticated = false
    cb()
  }

  isAuthenticated () {
    return this.authenticated
  }

  async getSession (navigate) {
    try {
      const res = await axios.get(`http://localhost:4000/${LOGIN_URL}`, { withCredentials: true })
      if (res.data.token) {
        this.login(() => navigate('/admin/dashboard'))
      }
    } catch (e) {
      if (e.response.status === 401) {
        console.log('Sessão expirada ou inválida')
      } else {
        console.log(e.message)
      }
    }
  }
}

export default new Auth()
