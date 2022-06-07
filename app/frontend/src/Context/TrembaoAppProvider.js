import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { session } from '../api/login'
import { getCheckedFoods, getFoodsByThemeId } from '../api/trembao'
import trembaoAppContext from './TrembaoAppContext'

function TrembaoAppProvider ({ children }) {
  const [foodOptions, setFoodOptions] = useState([])
  const [checkedFoodOptions, setCheckedFoodOptions] = useState([])
  const [login, setLogin] = useState(false)
  const [price, setPrice] = useState(0)
  const [foodToEdit, setFoodToEdit] = useState({})

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
    const foodsByTheme = await getFoodsByThemeId(id)
    setFoodOptions(foodsByTheme)
  }

  const getCheckedFoodOptions = useCallback(async () => {
    const foods = await getCheckedFoods()
    setCheckedFoodOptions(foods)
  })

  // useEffect(() => {
  //   getFoodOptions()
  //     .catch(error => console.log(error))
  //   getCheckedFoodOptions()
  //     .catch(error => console.log(error))
  // }, [])

  const trembaoAppValue = {
    getFoodsByTheme,
    login,
    setLogin,
    foodOptions,
    setFoodOptions,
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
