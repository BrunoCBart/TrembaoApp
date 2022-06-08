import PropTypes from 'prop-types'
import React, { useContext, useEffect, useState } from 'react'
import { getAllFoodTypes } from '../../helpers/foodOptionsMain'
import FoodFormOptions from './FoodFormOptions'
import socket from '../../socket'
import trembaoAppContext from '../../context/TrembaoAppContext'
import OrderForm from './OrderForm'
function FoodFormMain ({ foodOptions }) {
  const [order, setOrder] = useState({})
  const [renderOrderForm, setRenderOrderForm] = useState(false)
  const { getFoodsByTheme } = useContext(trembaoAppContext)

  useEffect(() => {
    socket.on('foodOption-updated', async () => {
      console.log('a')
      await getFoodsByTheme()
    })
  }, [])

  const foodTypeOnClick = (type) => {
    document.querySelector(`.foodForm__type-${type}`).classList.add('active')
  }

  useEffect(() => {
    getAllFoodTypes()
      .then((types) => {
        setInitialUncheckedOrder(types)
      })
  }, [])
  const setInitialUncheckedOrder = (types = []) => {
    const initialOrder = types.reduce((acc, type) => {
      acc[type.name] = []
      return acc
    }, {})
    const uncheckedOrderOptions = foodOptions.reduce((acc, { foods }) => {
      foods
        .filter(({ onMenu }) => onMenu)
        .forEach(({ id, name: foodName, foodType }) => {
          acc[foodType].push({ id, foodName, checked: false })
        })
      return acc
    }, initialOrder)
    setOrder(uncheckedOrderOptions)
  }

  const checkFoodOption = (id, foodType) => {
    const newOrder = { ...order }

    newOrder[foodType] = newOrder[foodType]
      .map((food) => {
        if (food.id === id) {
          return { ...food, checked: !food.checked }
        }
        return food
      })
    setOrder(newOrder)
  }

  const isFoodOptionChecked = (id, foodType) => {
    const food = order[foodType].find(({ id: foodId }) => {
      return foodId === id
    })
    return food ? food.checked : false
  }

  const displayOrderForm = (e) => {
    setRenderOrderForm(true)
    e.preventDefault()
  }

  return (
    <>
      <form className="foodForm" onSubmit={displayOrderForm}>
        { Object.keys(order).length > 0 &&
        foodOptions.map(({ name: type, image, foods }) => {
          return (
            <div key={type} className="foodForm__type-container">
              <div className="foodForm__type-heading_container" onClick={() => foodTypeOnClick(type)}>
                <div className="foodForm__type-image-container">
                  <img src={image} alt="idk" className="foodForm__type-image"/>
                </div>
                <h2 className="foodForm__type-heading-title">{type}</h2>
              </div>
                <FoodFormOptions
                  onCheck={checkFoodOption}
                  isChecked={isFoodOptionChecked}
                  foods={foods}
                  type={type}
                  image={image}
                  isDashboard={false}/>
            </div>
          )
        })}
        <button className="btn" aria-label='make-order'>Pedir</button>
      </form>
      {renderOrderForm &&
      <OrderForm
        renderOrderForm={setRenderOrderForm}
        orderIngredients={order}
      />
      }
    </>
  )
}

FoodFormMain.propTypes = {
  foodOptions: PropTypes.arrayOf(PropTypes.shape({
    image: PropTypes.string,
    foods: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        onMenu: PropTypes.bool,
        price: PropTypes.number,
        foodType: PropTypes.string,
        foodTypeId: PropTypes.number,
        foodSubType: PropTypes.string,
        foodSubTypeId: PropTypes.number
      })
    )
  }))
}

export default FoodFormMain
