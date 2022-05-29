import PropTypes from 'prop-types'
import React from 'react'
import FoodOption from './FoodOption'

function FoodOptions ({ onCheck, isChecked, isDashBoard, foods, TypeName, editFoodBtn }) {
  const renderFoodOptions = (foods, nameType) => {
    return foods.map(({ name, id, checked }) => (
    <FoodOption
      optionOnCheck={onCheck}
      foodId={id}
      nameType={nameType}
      foodName={name}
      key={`${name}-key`}
      checked={isDashBoard ? checked : isChecked(id, nameType)}
      >
      {editFoodBtn}
      </FoodOption>
    ))
  }
  return renderFoodOptions(foods, TypeName)
}

FoodOptions.propTypes = {
  TypeName: PropTypes.string.isRequired,
  editFoodBtn: PropTypes.node,
  foods: PropTypes.shape({
    map: PropTypes.func
  }),
  isChecked: PropTypes.func,
  isDashBoard: PropTypes.bool.isRequired,
  onCheck: PropTypes.func.isRequired
}

export default FoodOptions
