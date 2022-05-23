import PropTypes from 'prop-types'
import React from 'react'
import './foodOption.css'

function FoodOption ({ foodName, foodId, optionOnCheck, checked, nameType }) {
  return (
    <div className="form-group">
        <label className="food-option-label" htmlFor={`${foodName}-option`}>
          <input
          className={`food-option food-type-${nameType}`}
          onChange={() => optionOnCheck(foodId, nameType)}
          type="checkbox"
          name={foodName}
          id={`${foodName}-option`}
          checked={checked}
          />

          <span className='food-option-text'>
          { foodName }
          </span>
        </label>
      </div>
  )
}

FoodOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  foodId: PropTypes.number.isRequired,
  foodName: PropTypes.string.isRequired,
  nameType: PropTypes.string.isRequired,
  optionOnCheck: PropTypes.func.isRequired
}

export default FoodOption
