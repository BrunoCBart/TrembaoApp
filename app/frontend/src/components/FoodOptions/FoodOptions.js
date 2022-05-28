import PropTypes from 'prop-types'
import React from 'react'
import FoodOption from './FoodOption'

function FoodOptions ({ onCheck, isChecked, isDashBoard, foods, TypeName }) {
  const renderFoodOptions = (foods, nameType) => {
    return foods.map(({ name, id, checked }) => (
    <FoodOption
      optionOnCheck={onCheck}
      foodId={id}
      nameType={nameType}
      foodName={name}
      key={`${name}-key`}
      checked={isDashBoard ? checked : isChecked(id, nameType)}
      />
    ))
  }
  return renderFoodOptions(foods, TypeName)
}

FoodOptions.propTypes = {
  isChecked: PropTypes.func,
  isDashBoard: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
}

export default FoodOptions
