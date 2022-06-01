import PropTypes from 'prop-types'
import React from 'react'
import FoodOption from './FoodOption'

function FoodOptions ({ onCheck, isChecked, isDashBoard, foods }) {
  const renderFoodOptions = () => {
    return foods.map((food) => {
      const { name, id, checked, foodType } = food
      return (<FoodOption
        optionOnCheck={onCheck}
        foodId={id}
        foodType={foodType}
        foodName={name}
        key={`${name}-key`}
        checked={isDashBoard ? checked : isChecked(id, foodType)}
        isDashBoard={isDashBoard}
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
