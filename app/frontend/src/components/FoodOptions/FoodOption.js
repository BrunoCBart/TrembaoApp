import PropTypes from 'prop-types'
import React from 'react'
import Pen from '../svgs/Pen'
import '../../Css/foodOption.css'
import FormButton from '../FormButton'

function FoodOption ({
  food,
  optionOnCheck,
  isDashBoard,
  checked,
  onEditButtonClick
}) {
  const EditBtn = () => {
    return (
      <FormButton className="food-option-svg-btn" onClick={(e) => onEditButtonClick(e, food)}>
        <Pen width="100%" />
      </FormButton>
    )
  }

  return (
    <div className="food-option-form-group">
      <label className="food-option-label" htmlFor={`${food.name}-option`}>
        <input
        className={'food-option food-type-$ foodType}'}
        onChange={() => optionOnCheck(food.id, food.foodType)}
        type="checkbox"
        name={food.name}
        id={`${food.name}-option`}
        checked={checked}
        />

        <span className='food-option-text'>
        { food.name }
        </span>
      </label>
     {isDashBoard ? EditBtn() : null}
    </div>
  )
}

FoodOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  food: PropTypes.shape({
    checked: PropTypes.bool.isRequired,
    foodSubType: PropTypes.string,
    foodSubTypeId: PropTypes.number,
    foodType: PropTypes.string.isRequired,
    foodTypeId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }),
  isDashBoard: PropTypes.bool.isRequired,
  onEditButtonClick: PropTypes.func,
  optionOnCheck: PropTypes.func.isRequired
}

export default FoodOption
