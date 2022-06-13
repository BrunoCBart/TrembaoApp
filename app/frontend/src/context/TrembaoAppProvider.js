import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { session } from '../api/login'
import { getFoodsByThemeId } from '../api/trembao'
import trembaoAppContext from './TrembaoAppContext'

function TrembaoAppProvider ({ children }) {
  const [foodOptions, setFoodOptions] = useState([])
  const [login, setLogin] = useState(false)
  const [price, setPrice] = useState(0)
  const [foodTypes, setFoodTypes] = useState([])

  const navigate = useNavigate()
  const getSession = async () => {
    try {
      const res = await session()
      if (res.token) {
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

  const getFoodsByTheme = async (id) => {
    console.log(id)
    const foodsByTheme = await getFoodsByThemeId(id)
    const types = foodsByTheme.reduce((acc, { name, id }) => {
      acc.push({ name, id })
      return acc
    }, [])
    setFoodTypes(types)
    setFoodOptions(foodsByTheme)
  }

  const trembaoAppValue = {
    getFoodsByTheme,
    login,
    setLogin,
    foodOptions,
    setFoodOptions,
    getSession,
    price,
    setPrice,
    foodTypes
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
