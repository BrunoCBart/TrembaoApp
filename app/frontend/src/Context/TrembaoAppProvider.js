import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import axios from '../api/axios'
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

  // const getFoodOptions = async () => {
  //   try {
  //     const foods = await axios.get('/foods')
  //     setFoodOptions(foods.data)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  const getFoodOptions = useCallback(async () => {
    const { data: foods } = await axios.get('/foods')
    setFoodOptions(foods)
  })

  useEffect(() => {
    getFoodOptions()
      .catch(error => console.log(error))
  }, [getFoodOptions])

  const trembaoAppValue = {
    foodOptions,
    setFoodOptions,
    getFoodOptions
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
