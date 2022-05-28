import React, { useContext, useEffect, useState } from 'react'
// import FoodOption from '../FoodOptions/FoodOption'
import trembaoAppContext from '../../Context/TrembaoAppContext'
import socket from '../../socket'
import OrderForm from './OrderForm'
import {
  disableOrEnableOptions,
  getCheckedAndUncheckedFoods
} from '../../utils/foodOptionsMain'
import '../FoodOptions/foodOptionsForm.css'
import DailyFoodOptions from './CheckedFoodOptions'

const INITIAL_ORDER = {
  Arroz: [],
  Feijão: [],
  Misturas: [],
  Guarnições: [],
  Saladas: [],
  Bebidas: []
}

function foodOptionsMain () {
  const [order, setOrder] = useState(INITIAL_ORDER)
  const { checkedFoodOptions, getCheckedFoodOptions } = useContext(trembaoAppContext)

  useEffect(() => {
    socket.on('foodOption-updated', async () => {
      console.log('a')
      await getCheckedFoodOptions()
    })
  }, [])
  const setInitialUncheckedOrder = () => {
    const uncheckedOptions = checkedFoodOptions.reduce((acc, { name, foods }) => {
      foods.forEach(({ id, checked, name: foodName }) => {
        if (checked) {
          acc[name].push({ id, foodName, checked: false })
        }
      })
      return acc
    }, { Arroz: [], Feijão: [], Misturas: [], Guarnições: [], Saladas: [], Bebidas: [] })
    setOrder(uncheckedOptions)
  }

  useEffect(() => {
    setInitialUncheckedOrder()
  }, [checkedFoodOptions])

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

  const checkFoodOption = (id, nameType) => {
    const newOrder = { ...order }

    newOrder[nameType] = newOrder[nameType]
      .map(({ id: foodId, foodName, checked }) => {
        if (foodId === id) {
          return { id, foodName, checked: !checked }
        }
        return { id: foodId, foodName, checked }
      })
    setOrder(newOrder)
  }

  const foodOptionIsChecked = (id, nameType) => {
    const food = order[nameType].find(({ id: foodId }) => {
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
     <DailyFoodOptions
      handleActiveFoodType={handleActiveFoodType}
      checkedFoodOptions={checkedFoodOptions}
      checkFoodOption={checkFoodOption}
      foodOptionIsChecked={foodOptionIsChecked}
      />
      {/* {order.Arroz && checkedFoodOptions.map(({ name, foods }) => (
       <div className={'foodOptionsForm-type-container food-options-container--main'}
        onClick={() => handleActiveFoodType(name)}
        key={name}
        >
        <h2 className="food-options__type">{name}</h2>
        <div className={`foodOptionsForm__food-options-container food-type-${name}`}>
        <FoodOptions
          foods={foods}
          TypeName={name}
          onCheck={checkFoodOption}
          isChecked={foodOptionIsChecked}
          isDashBoard={false}
        />
       </div>
     </div>
      ))} */}
      <button className="btn foodOptionsForm__order-btn foodOptionsForm__order-btn--hover"
      onClick={renderOrderForm}>
        Pedir
      </button>
      <OrderForm orderIngredients={order}/>
    </section>
  )
}

export default foodOptionsMain
