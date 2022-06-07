import PropTypes from 'prop-types'
import React from 'react'
import FoodOption from './FoodOption'

function FoodOptions ({ onCheck, isChecked, isDashBoard, foods, onEditButtonClick }) {
  const renderFoodOptions = () => {
    return foods.map((food) => {
      const { name, id, checked, foodType } = food
      return (<FoodOption
        food={food}
        optionOnCheck={onCheck}
        key={isDashBoard ? `${name}-key-dashboard` : `${name}-key`}
        checked={isDashBoard ? checked : isChecked(id, foodType)}
        isDashBoard={isDashBoard}
        onEditButtonClick={onEditButtonClick}
        />)
    })
  }
  return renderFoodOptions()
}

FoodOptions.propTypes = {
  editFoodBtn: PropTypes.node,
  foods: PropTypes.array.isRequired,
  isChecked: PropTypes.func,
  isDashBoard: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
}

export default FoodOptions
