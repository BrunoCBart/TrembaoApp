import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import { checkFood, getFoodsByThemeId } from '../../api/trembao'
import './foodForm.css'
import FoodFormOptions from './FoodFormOptions'
import trembaoAppContext from '../../Context/TrembaoAppContext'

function FoodFormDashboard ({ foodOptions }) {
  const { setFoodOptions } = useContext(trembaoAppContext)
  const foodTypeOnClick = (type) => {
    document.querySelector(`.foodForm__type-${type}`).classList.add('active')
  }

  const addFoodToMenu = async (id) => {
    try {
      await checkFood(id)
      const foods = await getFoodsByThemeId()
      setFoodOptions(foods)
    } catch (e) {
      console.log(e)
    }
  }

  // const onEditButtonClick = (e, food) => {
  //   e.preventDefault()
  //   setFoodToEdit({ ...food, foodSubType: food.foodSubType || '' })
  // }

  // const renderCreateFoodForm = (e, food) => {
  //   e.preventDefault()
  // }

  return (
    <form className="foodForm">
      {foodOptions.map(({ name: type, image, foods }) => {
        return (
          <div key={type} className="foodForm__type-container">
            <div className="foodForm__type-heading_container" onClick={() => foodTypeOnClick(type)}>
              <div className="foodForm__type-image-container">
                <img src={image} alt="idk" className="foodForm__type-image"/>
              </div>
              <h2 className="foodForm__type-heading-title">{type}</h2>
            </div>
              <FoodFormOptions
                onCheck={addFoodToMenu}
                isChecked={() => true}
                foods={foods}
                type={type}
                image={image}
                isDashboard={true}
              />
          </div>
        )
      })}
    </form>
  )
}

FoodFormDashboard.propTypes = {
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

export default FoodFormDashboard
