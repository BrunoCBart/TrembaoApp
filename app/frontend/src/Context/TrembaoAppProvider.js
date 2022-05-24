import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import axios from '../api/axios'
import trembaoAppContext from './TrembaoAppContext'

const INITIAL_FOOD_TYPES = [
  { foods: [], name: 'Arroz' },
  { foods: [], name: 'Feijão' },
  { foods: [], name: 'Misturas' },
  { foods: [], name: 'Guarnições' },
  { foods: [], name: 'Saladas' },
  { foods: [], name: 'Bebidas' }
]

const LOGIN_URL = '/users/login'
function TrembaoAppProvider ({ children }) {
  const [foodOptions, setFoodOptions] = useState(INITIAL_FOOD_TYPES)
  const [login, setLogin] = useState(false)

  const getSession = async (navigate) => {
    try {
      const res = await axios.get(`http://localhost:4000/${LOGIN_URL}`, { withCredentials: true })
      if (res.data.token) {
        setLogin(true)
        navigate('/admin/dashboard')
      }
    } catch (e) {
      if (e.response.status === 401) {
        console.log('Sessão expirada ou inválida')
      } else {
        console.log(e.message)
      }
    }
  }

  const getFoodOptions = useCallback(async () => {
    const { data: foods } = await axios.get('/foods')
    setFoodOptions(foods)
  })

  useEffect(() => {
    getFoodOptions()
      .catch(error => console.log(error))
  }, [getFoodOptions])

  const trembaoAppValue = {
    login,
    setLogin,
    foodOptions,
    setFoodOptions,
    getFoodOptions,
    getSession
  }

  return (
    <trembaoAppContext.Provider value={trembaoAppValue}>
      {children}
    </trembaoAppContext.Provider>
  )
}

TrembaoAppProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default TrembaoAppProvider
