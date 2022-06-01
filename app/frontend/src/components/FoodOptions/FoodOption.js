import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import Pen from '../svgs/Pen'
import './foodOption.css'
import trembaoAppContext from '../../Context/TrembaoAppContext'

function FoodOption ({ foodName, foodId, optionOnCheck, checked, foodType, isDashBoard }) {
  const { setFoodToEdit } = useContext(trembaoAppContext)
  const onEditButtonClick = (e) => {
    e.preventDefault()
    setFoodToEdit(foodId)
  }
  const EditBtn = () => {
    return (
      <button className="food-option-edit-btn" onClick={onEditButtonClick}>
        <Pen className="food-option-edit-pen" />
      </button>
    )
  }
  return (
    <div className="food-option-form-group">
      <label className="food-option-label" htmlFor={`${foodName}-option`}>
        <input
        className={'food-option food-type-$ foodType}'}
        onChange={() => optionOnCheck(foodId, foodType)}
        type="checkbox"
        name={foodName}
        id={`${foodName}-option`}
        checked={checked}
        />

        <span className='food-option-text'>
        { foodName }
        </span>
      </label>
     {isDashBoard ? EditBtn() : null}
    </div>
  )
}

FoodOption.propTypes = {
  checked: PropTypes.bool.isRequired,
  foodId: PropTypes.number.isRequired,
  foodName: PropTypes.string.isRequired,
  isDashBoard: PropTypes.bool.isRequired,
  foodType: PropTypes.string.isRequired,
  optionOnCheck: PropTypes.func.isRequired
}

export default FoodOption
