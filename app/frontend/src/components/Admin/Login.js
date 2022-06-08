import React, {
  useState, useRef, useEffect, useContext
} from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import trembaoAppContext from '../../context/TrembaoAppContext'
import { login } from '../../api/login'
const INITIAL_USER = {
  username: '',
  password: ''
}

function Login () {
  const userRef = useRef()
  const errRef = useRef()

  const [user, setUser] = useState(INITIAL_USER)
  const [errorMsg, setErrorMsg] = useState('')

  const { setLogin, getSession } = useContext(trembaoAppContext)

  const navigate = useNavigate()

  useEffect(() => {
    userRef.current.focus()
  }, [])

  useEffect(() => {
    setErrorMsg('')
  }, [user])

  const handleLogin = ({ target }) => {
    const { name, value } = target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    getSession()
  }, [])

  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await login({ username: user.username, password: user.password })
      setUser({ username: '', password: '' })
      if (res.token) {
        setLogin(true)
        navigate('/admin/dashboard')
      }
    } catch (err) {
      console.log(err.response)
      if (!err?.response) {
        setErrorMsg('No server response')
      } else if (err.response.status === 401) {
        setErrorMsg('UNAUTHORIZED')
      } else if (err.response.status === 400) {
        setErrorMsg('Email or Password cannot be empty')
      } else if (err.response.status === 422) {
        setErrorMsg('Invalid Email Or Password')
      } else {
        setErrorMsg('Login failed')
      }
      errRef.current.focus()
    }
  }

  const form = () => (
    <form className="loginForm" onSubmit={loginSubmit}>
      <p
        ref={errRef}
        className={errorMsg ? 'errorMsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errorMsg}
      </p>
      <h1 className="loginForm__login-title">Login</h1>
      <div className="form-group">
        <label htmlFor="login-username">
          Usuário:
          <input
            id="login-username"
            ref={userRef}
            type="text"
            name="username"
            onChange={(e) => handleLogin(e)}
            value={user.username}
            placeholder="admin"
            required
          />
        </label>
      </div>
      <div className="form-group">
        <label htmlFor="login-pw">
          Senha:
          <input
            id="login-pw"
            type="text"
            name="password"
            onChange={(e) => handleLogin(e)}
            value={user.password}
            placeholder="mysecretpw"
            required
          />
        </label>
      </div>
      <button className="btn">Login</button>
    </form>
  )

  return form()
}

export default Login
