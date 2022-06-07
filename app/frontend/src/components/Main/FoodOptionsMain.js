import React, { useContext, useEffect, useState } from 'react'
import trembaoAppContext from '../../Context/TrembaoAppContext'
import socket from '../../socket'
import OrderForm from '../FoodForm/OrderForm'
import {
  disableOrEnableOptions,
  getCheckedAndUncheckedFoods,
  getAllFoodTypes
} from '../../helpers/foodOptionsMain'
import '../../Css/foodOptionsForm.css'
import DailyFoodOptions from './CheckedFoodOptions'
import LunchSize from './LunchSize'

function foodOptionsMain () {
  const [order, setOrder] = useState({})
  const { checkedFoodOptions, getCheckedFoodOptions } = useContext(trembaoAppContext)

  useEffect(() => {
    socket.on('foodOption-updated', async () => {
      await getCheckedFoodOptions()
    })
  }, [])

  // useMemo(() => {
  //   console.log('a')
  //   getAllFoodTypes()
  //     .then((types) => {
  //       setInitialUncheckedOrder(types)
  //     })
  // }, [checkedFoodOptions])

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
    const uncheckedOrderOptions = checkedFoodOptions.reduce((acc, { foodType, foods }) => {
      foods.forEach(({ id, checked, name: foodName }) => {
        if (checked) acc[foodType].push({ id, foodName, checked: false })
      })
      return acc
    }, initialOrder)

    setOrder(uncheckedOrderOptions)
  }
  useEffect(() => {
    const setLimitForFoodOptions = async () => {
      const foodTypeOptions = Object.keys(order)

      foodTypeOptions.forEach((type) => {
        const foodOptionsCheckboxes = Array.from(document.querySelectorAll(`.food-type-${type}`))
        const { checkedOptions, uncheckedOptions } = getCheckedAndUncheckedFoods(foodOptionsCheckboxes)
        const checkedAmount = checkedOptions.length
        disableOrEnableOptions(checkedAmount, type, uncheckedOptions)
      })
    }
    setLimitForFoodOptions()
      .catch(error => console.log(error))
  }, [order])

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

  const renderOrderForm = () => {
    const orderBtn = document.querySelector('.foodOptionsForm__order-btn')
    document.querySelector('.orderForm').classList.add('orderForm--active')
    orderBtn.classList.remove('foodOptionsForm__order-btn--hover')
    orderBtn.disabled = true
    orderBtn.style.opacity = 0.5
  }

  const handleActiveFoodType = (name) => {
    const foodOption = document.querySelector(`.food-type-${name}`)
    if (foodOption.classList.contains('food-type--active')) {
      foodOption.classList.remove('food-type--active')
      return
    }
    const previousContainerSelected = document.querySelector('.food-type--active')
    if (previousContainerSelected) previousContainerSelected.classList.remove('food-type--active')
    foodOption.classList.add('food-type--active')
  }

  return (
    <section className="foodOptionsForm">
      <LunchSize />
      {Object.keys(order).length > 0 && <DailyFoodOptions
        handleActiveFoodType={handleActiveFoodType}
        checkedFoodOptions={checkedFoodOptions}
        checkFoodOption={checkFoodOption}
        isFoodOptionChecked={isFoodOptionChecked}
      />}
      <button className="btn foodOptionsForm__order-btn foodOptionsForm__order-btn--hover"
      onClick={renderOrderForm}>
        Pedir
      </button>
      <OrderForm orderIngredients={order}/>
    </section>
  )
}

export default foodOptionsMain
