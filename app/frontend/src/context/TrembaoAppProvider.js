import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { session } from '../api/login'
import { getFoodsByThemeId } from '../api/trembao'
import trembaoAppContext from './TrembaoAppContext'
import socket from '../socket'
function TrembaoAppProvider ({ children }) {
  const [foodOptions, setFoodOptions] = useState([])
  const [login, setLogin] = useState(false)
  const [price, setPrice] = useState(0)
  const [foodTypes, setFoodTypes] = useState([])
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

  useEffect(() => {
    socket.on('food-updated', (updatedFood) => {
      console.log(updatedFood)
      const updatedFoodOptions = foodOptions.map((type) => {
        if (type.id === updatedFood.foodTypeId) {
          type.foods = type.foods.map((food) => {
            if (food.id === updatedFood.id) {
              return updatedFood
            }
            return food
          })
        }
        return type
      })
      setFoodOptions(updatedFoodOptions)
    })
    socket.on('foodOption-removed', (deletedFood) => {
      const newFoods = foodOptions.map((type) => {
        if (type.id === deletedFood.foodTypeId) {
          type.foods = type.foods.filter((food) => food.id !== deletedFood.id)
        }
        return type
      })
      setFoodOptions(newFoods)
    })
  }, [foodOptions])

  const getFoodsByTheme = async (id) => {
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
    foodTypes,
    setFoodToEdit,
    foodToEdit
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
