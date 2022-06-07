import PropTypes from 'prop-types'
import React, { useContext, useEffect } from 'react'
import trembaoAppContext from '../../Context/TrembaoAppContext'
import '../../Css/foodOptionsForm.css'
import FoodOptions from '../FoodOptions/FoodOptions'
import { checkFood } from '../../api/trembao'
import FormButton from '../FormButton'
import Create from '../svgs/Create'

function FoodOptionsDashboard ({ currentType }) {
  const {
    foodToEdit,
    foodOptions,
    getFoodOptions,
    setFoodToEdit
  } = useContext(trembaoAppContext)

  useEffect(() => {
    if (Object.keys(foodToEdit).length > 0) {
      document.querySelector('.foodEditForm').classList.add('foodEditForm--active')
    }
  }, [foodToEdit])

  const optionOnCheck = async (id) => {
    try {
      await checkFood(id)
      await getFoodOptions()
    } catch (e) {
      console.log(e)
    }
  }

  const onEditButtonClick = (e, food) => {
    e.preventDefault()
    setFoodToEdit({ ...food, foodSubType: food.foodSubType || '' })
  }

  const renderCreateFoodForm = (e, food) => {
    e.preventDefault()
  }

  const createFoodBtn = () => {
    return (
      <FormButton className="food-option-svg-btn" onClick={(e) => renderCreateFoodForm(e)}>
        <Create width="100%"/>
      </FormButton>
    )
  }

  return (
    <form className="foodOptionsForm">
      {foodOptions.length > 0 && foodOptions
        .filter(({ foodType }) => foodType === currentType)
        .map(({ foodType, foods }) => (
        <div className="foodOptionsForm-type-container" key={foodType}>
          <div className="FoodOptionsForm-type-container__headig-container">
            <h2 className="FoodOptionsForm-type-container__heading-title">{foodType}</h2>
            {createFoodBtn()}
          </div>
          <div className="foodOptionsForm__food-options-container food-type--active">
          <FoodOptions
            foods={foods}
            foodType={foodType}
            onCheck={optionOnCheck}
            isDashBoard={true}
            onEditButtonClick={onEditButtonClick}
          />
          </div>
        </div>
        ))}
    </form>
  )
}

FoodOptionsDashboard.propTypes = {
  currentType: PropTypes.string.isRequired
}

export default FoodOptionsDashboard
