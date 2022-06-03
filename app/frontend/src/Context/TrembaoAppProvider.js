import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getCheckedFoods, getFoods, session } from '../api/trembao'
import trembaoAppContext from './TrembaoAppContext'

// const INITIAL_FOOD_TYPES = [
//   { foods: [], name: 'Arroz' },
//   { foods: [], name: 'Feijão' },
//   { foods: [], name: 'Misturas' },
//   { foods: [], name: 'Guarnições' },
//   { foods: [], name: 'Saladas' },
//   { foods: [], name: 'Bebidas' }
// ]

function TrembaoAppProvider ({ children }) {
  const [foodOptions, setFoodOptions] = useState([])
  const [checkedFoodOptions, setCheckedFoodOptions] = useState([])
  const [login, setLogin] = useState(false)
  const [price, setPrice] = useState(0)
  const [foodToEdit, setFoodToEdit] = useState(null)

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

  const getFoodOptions = useCallback(async () => {
    const foods = await getFoods()
    setFoodOptions(foods)
  })

  const getCheckedFoodOptions = useCallback(async () => {
    const foods = await getCheckedFoods()
    setCheckedFoodOptions(foods)
  })

  useEffect(() => {
    getFoodOptions()
      .catch(error => console.log(error))
    getCheckedFoodOptions()
      .catch(error => console.log(error))
  }, [])

  const trembaoAppValue = {
    login,
    setLogin,
    foodOptions,
    setFoodOptions,
    getFoodOptions,
    getSession,
    getCheckedFoodOptions,
    checkedFoodOptions,
    price,
    setPrice,
    foodToEdit,
    setFoodToEdit
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
